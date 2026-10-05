import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { retrieveKnowledge, type KnowledgeSnapshot } from "../lib/ai/retrieval";
import { knowledgeDocuments } from "../data/knowledge";
import { skills } from "../data/portfolio";
import { canonicalTechnology, comparisonDocuments, technologies } from "../data/technicalExperience";

assert.equal(new Set(knowledgeDocuments.map((document) => document.id)).size, knowledgeDocuments.length, "Knowledge IDs must be unique");

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

// Every listed skill must be directly retrievable, not mistaken for missing information.
for (const skill of skills.flatMap((group) => group.items)) {
  const name = canonicalTechnology(skill);
  const expected = `technology-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const result = await retrieveKnowledge(`Have you used ${skill}?`);
  assert.ok(result.matches.some((document) => document.id === expected), `Missing hands-on skill: ${skill}`);
}
for (const alias of ["random forests", "RandomForestClassifier", "RandomForestRegressor", "RF", "sklearn", "K8s", "AWS S3", "Azure Machine Learning", "PINNs"]) {
  const result = await retrieveKnowledge(`Have you used ${alias}?`);
  const expected = `technology-${canonicalTechnology(alias).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  assert.ok(result.matches.some((document) => document.id === expected), `Missing tool alias: ${alias}`);
}
const forest = await retrieveKnowledge("Have you used Random Forest in a project?");
assert.ok(forest.matches.some((document) => document.id === "technology-random-forest" && document.content.includes("Subscription Value Brain") && document.content.includes("Scikit-Learn Hands-On Guide")));
assert.ok(!forest.matches.some((document) => document.id === "project-customer-churn-prediction-ml"), "Do not promote a future improvement to implemented Random Forest work");

for (const comparison of comparisonDocuments) {
  for (const service of comparison.entities) {
    const result = await retrieveKnowledge(`Have you used ${service}?`);
    assert.equal(result.matches[0]?.id, comparison.id, `Missing explicit cloud comparison: ${service}`);
    assert.ok(result.matches[0].content.includes("not established as hands-on experience"));
  }
}
for (const tool of ["Azure ML", "BigQuery", "S3", "SageMaker"]) {
  const result = await retrieveKnowledge(`Have you used ${tool}?`);
  assert.equal(result.matches[0]?.kind, "technology", `Known tool should be direct experience: ${tool}`);
  assert.ok(!result.matches.some((document) => document.kind === "comparison"));
}
const genericCloud = await retrieveKnowledge("What cloud tools do you use?");
assert.ok(!genericCloud.matches.some((document) => document.kind === "comparison"), "Do not infer unasked services from semantic similarity");
console.info(`Hands-on coverage: ${skills.flatMap((group) => group.items).length} listed skills, ${technologies.length} distinct technologies, aliases, Random Forest evidence and ${comparisonDocuments.length} cloud capability families PASS`);
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
    assert.equal(new URL(String(url)).searchParams.get("limit"), String(snapshot.documents.length));
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
