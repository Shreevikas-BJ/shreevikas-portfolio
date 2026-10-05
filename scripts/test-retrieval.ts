import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { retrieveKnowledge, type KnowledgeSnapshot } from "../lib/ai/retrieval";

const cases = [
  ["Where did you go to college?", "education"],
  ["Which qualifications and credentials do you hold?", "certifications"],
  ["How did you help employees find IT and HR answers faster?", "experience-0"],
  ["What have you built to test agents for dangerous behavior?", "project-agentshield"],
  ["Tell me about the copilot that designs software architectures.", "project-archpilot"],
  ["What scientific modeling research have you done?", "research"],
  ["Which tools do you use for data pipelines?", "skills-"],
  ["What did you do at Whiterock?", "experience-1"],
  ["What projects use grounded answers with document citations?", "project-ai-ml-knowledge-rag-assistant"]
];
for (const [question, expected] of cases) {
  const result = await retrieveKnowledge(question);
  console.info(question, result.matches.map((item) => `${item.id}:${item.score.toFixed(2)}`));
  assert.ok(result.matches.some((item) => item.id.includes(expected)), `Missing relevant result: ${expected}`);
}
const snapshot: KnowledgeSnapshot = JSON.parse(await readFile("data/generated/knowledge.json", "utf8"));
const originalNow = Date.now;
const originalFetch = globalThis.fetch;
const originalUrl = process.env.SUPABASE_URL;
const originalKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
try {
  process.env.SUPABASE_URL = "https://test-project.supabase.co";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "sb_secret_test_only";
  Date.now = () => originalNow() + 600_000;
  globalThis.fetch = async (url, options) => {
    assert.ok(String(url).includes(snapshot.revision));
    assert.equal(new Headers(options?.headers).get("apikey"), "sb_secret_test_only");
    return Response.json(snapshot.documents);
  };
  assert.equal((await retrieveKnowledge("Where did you study?")).source, "supabase");
  Date.now = () => originalNow() + 1_200_000;
  globalThis.fetch = async () => Response.json(snapshot.documents.map((item, index) => index === 0 ? { ...item, content: "Invented employer" } : item));
  assert.equal((await retrieveKnowledge("Where did you study?")).source, "local", "Reject stale or modified database content");
} finally {
  Date.now = originalNow;
  globalThis.fetch = originalFetch;
  if (originalUrl === undefined) delete process.env.SUPABASE_URL; else process.env.SUPABASE_URL = originalUrl;
  if (originalKey === undefined) delete process.env.SUPABASE_SERVICE_ROLE_KEY; else process.env.SUPABASE_SERVICE_ROLE_KEY = originalKey;
}
console.info("Real FAISS retrieval, semantic paraphrases, Supabase adapter and canonical fallback PASS");
