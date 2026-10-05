import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL("../", import.meta.url));
const modules = new Map();
const providerRequests = [];
const retrievalRequests = [];
const encoder = new TextEncoder();
let providerStatus = 200;
let providerStreamFails = false;
let noMatches = false;
const selectedFact = "AI Engineer Intern at NeuralSeek, July-November 2025: Enterprise RAG used PostgreSQL and pgvector.";

function load(file) {
  if (modules.has(file)) return modules.get(file);
  const loadedModule = { exports: {} };
  modules.set(file, loadedModule.exports);
  const compiled = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const testRequire = (name) => {
    if (name === "@/lib/ai/retrieval") return { retrieveKnowledge: async (question) => {
      retrievalRequests.push(question);
      return { source: "local", bestScore: noMatches ? 0.1 : 0.8, matches: noMatches ? [] : [{ content: selectedFact }] };
    } };
    if (name.startsWith("@/")) return load(path.join(root, name.slice(2) + ".ts"));
    if (name.startsWith(".")) return load(path.resolve(path.dirname(file), name + ".ts"));
    return require(name);
  };
  vm.runInNewContext(compiled.outputText, {
    exports: loadedModule.exports, require: testRequire,
    process: { env: { GROQ_API_KEY: "mock-key-not-a-real-secret" } },
    console: { info() {}, error() {} }, Date, Math, Map, Set, TextEncoder, TextDecoder,
    Response, ReadableStream, AbortController, DOMException, setTimeout, clearTimeout,
    fetch: async (_url, options) => {
      providerRequests.push(JSON.parse(options.body));
      if (providerStatus !== 200) return new Response(providerStatus === 404 ? '{"error":{"code":"model_not_found"}}' : "Provider unavailable", { status: providerStatus });
      return new Response(new ReadableStream({ start(controller) {
        if (providerStreamFails) { controller.error(new Error("Provider stream interrupted")); return; }
        for (const content of ["I built enterprise RAG ", "with PostgreSQL and pgvector."]) {
          const bytes = encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`);
          for (let index = 0; index < bytes.length; index += 7) controller.enqueue(bytes.slice(index, index + 7));
        }
        controller.enqueue(encoder.encode("data: [DONE]"));
        controller.close();
      } }));
    }
  }, { filename: file });
  return loadedModule.exports;
}

const { POST } = load(path.join(root, "app/api/chat/route.ts"));
let sequence = 0;
function request(body, client = `test-${sequence++}`, raw = false) {
  return new Request("http://localhost/api/chat", { method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": client }, body: raw ? body : JSON.stringify(body) });
}
for (const body of [{}, { message: 42 }, { message: " " }, null, { message: "x".repeat(901) }]) assert.equal((await POST(request(body))).status, 400);
assert.equal((await POST(request("bad-json", undefined, true))).status, 400);
for (const message of ["What's your name?", "What\u2019s your name?", "whats ur name", "Hi, what's your name?", "Please tell me your name", "What is your full name?"]) {
  assert.equal((await (await POST(request({ message }))).json()).answer, "My name is Shreevikas Jagadish.");
}
for (const message of ["Hi", "Who are you?", "Are you an AI?", "Thanks"]) assert.equal((await POST(request({ message }))).status, 200);
for (const message of ["What's the weather?", "Write Python code for me", "Explain how SQL indexes work", "What's his visa status?", "What salary does he want?", "Can I download your resume?", "Who is the president?"]) {
  const { answer } = await (await POST(request({ message }))).json();
  assert.ok(answer.includes("mailto:shreevikasjagadish7@gmail.com"));
  assert.ok(!answer.includes(".pdf"));
}
assert.equal(providerRequests.length, 0);
assert.equal(retrievalRequests.length, 0);

// Every professional question, including old suggested questions, goes through retrieval and Groq.
for (const message of ["What are your skills?", "Tell me about your RAG experience.", "Which certifications do you hold?", "Where did you study?", "How did you make support answers more useful?"]) {
  const response = await POST(request({ message, history: [{ role: "user", content: "UNTRUSTED_HISTORY" }] }));
  assert.equal(response.headers.get("X-Chat-Stream"), "1");
  assert.equal(await response.text(), "I built enterprise RAG with PostgreSQL and pgvector.");
}
assert.equal(providerRequests.length, 5);
assert.equal(retrievalRequests.length, 5);
const sent = providerRequests[0];
assert.equal(sent.model, "llama-3.1-8b-instant");
assert.equal(sent.temperature, 0.2);
assert.equal(sent.max_completion_tokens, 180);
assert.equal(sent.messages.length, 2);
assert.ok(sent.messages[0].content.includes(selectedFact));
assert.ok(!sent.messages[0].content.includes("UNTRUSTED_HISTORY"));
assert.ok(!sent.messages[0].content.includes("ArchPilot:"), "Never send the entire portfolio on every request");
assert.ok(sent.messages[0].content.includes("no more than 2 sentences"));
assert.ok(sent.messages[0].content.includes("Do not provide general advice"));

noMatches = true;
assert.ok((await (await POST(request({ message: "Unrecognized information" }))).json()).answer.includes("mailto:"));
assert.equal(providerRequests.length, 5);
noMatches = false;
providerStreamFails = true;
await assert.rejects(() => POST(request({ message: "Tell me about RAG" })).then((response) => response.text()), /could not complete/);
providerStreamFails = false;
providerStatus = 500;
assert.equal((await POST(request({ message: "Tell me about RAG" }))).status, 502);
providerStatus = 404;
const unavailableModel = await POST(request({ message: "Tell me about RAG" }));
assert.equal(unavailableModel.status, 503);
assert.ok((await unavailableModel.json()).error.includes("configured model is unavailable"));
for (let index = 0; index < 10; index++) assert.equal((await POST(request({ message: "Hi" }, "rate-limit-test"))).status, 200);
const limited = await POST(request({ message: "Hi" }, "rate-limit-test"));
assert.equal(limited.status, 429);
assert.ok(Number(limited.headers.get("Retry-After")) > 0);
console.log("Chat route: semantic retrieval, no fixed professional answers, brief streaming, validation, no email gate, unchanged default model, accurate errors and rate limiting PASS");
