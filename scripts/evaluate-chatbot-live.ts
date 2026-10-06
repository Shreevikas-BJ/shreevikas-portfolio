import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import nextEnv from "@next/env";
import { chatbotCases, checkAnswer, type ChatCase } from "../tests/chatbot-cases";
import { buildChatMessages, classifyQuestion, resolveQuestion, isTechnicalExperienceQuestion, normalizeQuestion, refusalMessage, technicalClarification } from "../data/chatbotContext";
import { retrieveKnowledge } from "../lib/ai/retrieval";

if (!process.argv.includes("--confirm-live")) throw new Error("Pass --confirm-live to authorize real Groq calls. No visitor data is used.");
nextEnv.loadEnvConfig(process.cwd());
if (!process.env.GROQ_API_KEY) throw new Error("Set GROQ_API_KEY locally before running the live evaluator.");
const { POST } = await import("../app/api/chat/route");
const model = process.env.GROQ_MODEL?.trim() || "openai/gpt-oss-20b";
const revision = JSON.parse(await readFile("data/generated/knowledge.json", "utf8")).revision;
const routeSource = await readFile("app/api/chat/route.ts", "utf8");
const fingerprint = createHash("sha256").update(revision + await readFile("data/chatbotContext.ts", "utf8") + routeSource + await readFile("lib/ai/retrieval.ts", "utf8")).digest("hex");
async function prepare(test: ChatCase) {
  const decision = classifyQuestion(test.question);
  const facts = test.behavior !== "validation" && decision.kind === "model" ? await retrieveKnowledge(resolveQuestion(test.question, test.previousQuestion)) : undefined;
  const context = facts?.matches.map((document) => document.content).join("\n\n") ?? "";
  const messages = context ? buildChatMessages(test.question, context, test.previousQuestion) : [];
  const fallback = !context && test.behavior !== "validation" && decision.kind === "model" ? isTechnicalExperienceQuestion(normalizeQuestion(test.question)) ? technicalClarification : refusalMessage : undefined;
  const requestFingerprint = createHash("sha256").update(JSON.stringify({ routeSource, decision, payload: test.behavior === "validation" ? test.payload : { message: test.question, previousQuestion: test.previousQuestion }, messages, fallback })).digest("hex");
  return { context, messages, requestFingerprint };
}
type Row = { id: string; group: string; question: string; previousQuestion?: string; status: number; answer: string; groq: boolean; latencyMs: number; failures: string[]; requestFingerprint?: string };
const reportPath = "data/generated/chatbot-live-evaluation.json";
const rows: Row[] = [];
if (process.argv.includes("--resume")) {
  try {
    const stored = JSON.parse(await readFile(reportPath, "utf8"));
    if ((stored.model ?? "openai/gpt-oss-20b") === model && (stored.fingerprint === fingerprint || stored.rows.some((row: Row) => row.requestFingerprint))) {
      for (const row of stored.rows as Row[]) {
        const test = chatbotCases.find((item) => item.id === row.id);
        if (!test) continue;
        const prepared = await prepare(test);
        // Reuse only identical API policy, payload, and actual model inputs; recheck assertions.
        if (row.requestFingerprint ? row.requestFingerprint !== prepared.requestFingerprint : stored.fingerprint !== fingerprint) continue;
        const failures = [...checkAnswer(test, row.answer, row.status), ...row.failures.filter((failure) => /^(?:URL|Metric) not present/.test(failure))];
        if (!failures.length) rows.push({ ...row, failures, requestFingerprint: prepared.requestFingerprint });
      }
    }
  } catch {}
}
const groupNames = [...new Set(chatbotCases.map((test) => test.group))];
const groups = groupNames.map((group) => chatbotCases.filter((test) => test.group === group));
const spread: ChatCase[] = [];
for (let index = 0; groups.some((group) => group[index]); index++) for (const group of groups) if (group[index]) spread.push(group[index]);
const limitIndex = process.argv.indexOf("--limit");
const idsIndex = process.argv.indexOf("--ids");
const ids = idsIndex >= 0 ? new Set(process.argv[idsIndex + 1].split(",")) : undefined;
const filtered = ids ? spread.filter((test) => ids.has(test.id)) : spread;
const selected = process.argv.includes("--verify-only") ? [] : limitIndex >= 0 ? filtered.slice(0, Number(process.argv[limitIndex + 1])) : filtered;
const completed = new Set(rows.map((row) => row.id));
const retainedCases = rows.length;
const info = console.info;
console.info = (...args) => { if (args[0] !== "[chatbot]") info(...args); };
if (retainedCases) info(`Reusing ${retainedCases} unchanged passing cases after rechecking assertions.`);
const fetchReal = globalThis.fetch;
let providerCalled = false;
let providerStatus = 0;
let providerUsage: Promise<number> | undefined;
let providerFatal = "";
globalThis.fetch = async (input, init) => {
  if (String(input).startsWith("https://api.groq.com/")) {
    providerCalled = true;
    const response = await fetchReal(input, init);
    providerStatus = response.status;
    if ([401, 403].includes(response.status)) providerFatal = "Provider credentials or permissions need attention.";
    if (response.status === 429 && /tokens per day|requests per day|billing|quota exceeded/i.test(await response.clone().text())) providerFatal = "Provider daily quota exhausted; do not keep retrying.";
    providerUsage = response.ok ? response.clone().text().then((body) => {
      let tokens = 0;
      for (const line of body.split("\n")) {
        if (!line.startsWith("data: ")) continue;
        try {
          const chunk = JSON.parse(line.slice(6));
          tokens = Math.max(tokens, chunk.usage?.total_tokens ?? chunk.x_groq?.usage?.total_tokens ?? 0);
        } catch {}
      }
      return tokens;
    }).catch(() => 0) : undefined;
    return response;
  }
  return fetchReal(input, init);
};

// Admission happens before POST starts its timeout. Keep below the account's observed 8k TPM.
const reservations: Array<{ at: number; tokens: number }> = [];
async function reserve(tokens: number) {
  while (true) {
    const now = Date.now();
    while (reservations[0] && reservations[0].at < now - 65_000) reservations.shift();
    if (!reservations.length || reservations.reduce((sum, item) => sum + item.tokens, 0) + tokens <= 6500) {
      reservations.push({ at: now, tokens });
      return reservations.at(-1)!;
    }
    const wait = Math.max(1, reservations[0].at + 65_100 - now);
    info(`Provider pacing: waiting ${Math.ceil(wait / 1000)}s before the next generation.`);
    await new Promise((resolve) => setTimeout(resolve, wait));
  }
}
async function save() {
  await mkdir("data/generated", { recursive: true });
  await writeFile(reportPath, JSON.stringify({ fingerprint, model, at: new Date().toISOString(), total: chatbotCases.length, tested: rows.length, passed: rows.filter((row) => !row.failures.length).length, groqGenerations: rows.filter((row) => row.groq).length, rows }, null, 2));
}
try {
  for (const test of selected) {
    if (completed.has(test.id)) continue;
    const { context, messages, requestFingerprint } = await prepare(test);
    const reservation = context ? await reserve(Math.ceil(messages.reduce((sum, message) => sum + message.content.length, 0) / 3) + 180) : undefined;
    let response: Response | undefined;
    let answer = "";
    let groq = false;
    const started = Date.now();
    for (let attempt = 0; attempt < 3; attempt++) {
      providerCalled = false;
      providerStatus = 0;
      providerUsage = undefined;
      providerFatal = "";
      // Isolated, in-process test clients; this never bypasses the public endpoint's rate limiter.
      response = await POST(new Request("http://evaluation.local/api/chat", { method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": `evaluation-${test.id}-${attempt}` }, body: JSON.stringify(test.behavior === "validation" ? test.payload : { message: test.question, previousQuestion: test.previousQuestion }) }));
      groq ||= providerCalled;
      try {
        if (response.headers.get("X-Chat-Stream") === "1") answer = await response.text();
        else {
          const payload = await response.json();
          answer = payload.answer ?? payload.error ?? "";
        }
      } catch (error) { answer = error instanceof Error ? error.message : "Interrupted response"; }
      const actualTokens = await providerUsage;
      if (reservation && actualTokens) reservation.tokens = actualTokens;
      if (providerFatal) break;
      if (providerStatus !== 429) break;
      info(`Provider quota retry for ${test.id}; waiting 65s.`);
      await new Promise((resolve) => setTimeout(resolve, 65_000));
    }
    const failures = checkAnswer(test, answer, response!.status);
    for (const url of answer.match(/https?:\/\/[^\s<>]+/g) ?? []) {
      const clean = url.replace(/[).,;]+$/, "");
      if (!context.includes(clean)) failures.push(`URL not present in retrieved facts: ${clean}`);
    }
    for (const metric of answer.match(/\d+(?:\.\d+)?\s*%/g) ?? []) if (!context.replace(/\s/g, "").includes(metric.replace(/\s/g, ""))) failures.push(`Metric not present in retrieved facts: ${metric}`);
    rows.push({ id: test.id, group: test.group, question: test.question, previousQuestion: test.previousQuestion, status: response!.status, answer, groq, latencyMs: Date.now() - started, failures, requestFingerprint });
    await save();
    info(`${failures.length ? "FAIL" : "PASS"} ${rows.length}/${chatbotCases.length} ${test.id}${failures.length ? `: ${failures.join("; ")}\n${answer}` : ""}`);
    if (providerFatal) throw new Error(providerFatal);
  }
} finally {
  console.info = info;
  globalThis.fetch = fetchReal;
  await save();
}
const failed = rows.filter((row) => row.failures.length);
info(`Live evaluation: ${rows.length - failed.length}/${rows.length} passed; ${rows.filter((row) => row.groq).length} Groq-backed cases, including resumed results. New cases tested: ${rows.length - retainedCases}. Full corpus: ${chatbotCases.length}.`);
if (failed.length) process.exitCode = 1;
