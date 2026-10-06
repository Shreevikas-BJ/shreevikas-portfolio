import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chatbotCases, checkAnswer } from "../tests/chatbot-cases";
import { classifyQuestion, isTechnicalExperienceQuestion, normalizeQuestion, resolveQuestion, rememberQuestion } from "../data/chatbotContext";
import { retrieveKnowledge } from "../lib/ai/retrieval";

const fixture = (id: string) => chatbotCases.find((test) => test.id === id)!;
// Graders must accept truthful denials without accepting the corresponding invented claim.
assert.deepEqual(checkAnswer(fixture("certifications-08"), "I have not completed a Databricks certification."), []);
assert.ok(checkAnswer(fixture("certifications-08"), "I have completed a Databricks certification.").length);
assert.deepEqual(checkAnswer(fixture("certifications-07"), "I don't have a public verification link for Anthropic."), []);
assert.ok(checkAnswer(fixture("certifications-07"), "Verify Anthropic at https://www.credly.com/fake.").length);
assert.deepEqual(checkAnswer(fixture("aliases-02"), "I used RandomForestClassifier for treatment/control uplift in Subscription Value Brain and for churn in my Scikit-Learn Hands-On Guide."), []);
assert.ok(checkAnswer(fixture("aliases-02"), "I paired RandomForestClassifier with RandomForestRegressor for uplift modeling.").length);
assert.ok(checkAnswer(fixture("skills-03"), "I have not used PyTorch.").length);
const topic = rememberQuestion("Tell me about NeuralSeek.");
assert.equal(rememberQuestion("What tools did you use there?", topic), topic);
assert.equal(rememberQuestion("And what was the impact?", topic), topic);
assert.ok(resolveQuestion("And what was the impact?", topic).includes("NeuralSeek"));
assert.equal(rememberQuestion("What about Whiterock?", topic), "What about Whiterock?");
assert.equal(rememberQuestion("Tell me about Agent Shield.", topic), "Tell me about Agent Shield.");
assert.ok(rememberQuestion("x".repeat(400)).length <= 300);
const rows = [];
for (const test of chatbotCases) {
  const failures: string[] = [];
  let decision = test.behavior === "validation" ? "validation" : classifyQuestion(test.question).kind;
  let sources: string[] = [];
  if (decision === "model") {
    const knowledge = await retrieveKnowledge(resolveQuestion(test.question, test.previousQuestion));
    sources = knowledge.matches.map((document) => document.id);
    if (!sources.length) decision = isTechnicalExperienceQuestion(normalizeQuestion(test.question)) ? "technical" : "refusal";
  }
  if (test.behavior === "technical") {
    if (!["technical", "model"].includes(decision)) failures.push(`Expected technical response, got ${decision}`);
  } else if (decision !== test.behavior) failures.push(`Expected ${test.behavior}, got ${decision}`);
  if (decision === "model") for (const expected of test.sources ?? []) if (!expected.some((prefix) => sources.some((id) => id.startsWith(prefix)))) failures.push(`Missing facts: ${expected.join(" | ")}`);
  rows.push({ id: test.id, group: test.group, question: test.question, previousQuestion: test.previousQuestion, expected: test.behavior, decision, sources, failures });
}
await mkdir("data/generated", { recursive: true });
await writeFile("data/generated/chatbot-retrieval-evaluation.json", JSON.stringify({ total: rows.length, passed: rows.filter((row) => !row.failures.length).length, rows }, null, 2));
await mkdir("docs", { recursive: true });
await writeFile("docs/chatbot-questions.md", `# Chatbot Regression Questions\n\n${chatbotCases.length} distinct cases. These are test inputs, not claims about Shreevikas. Expected facts come from the current portfolio. Each case checks routing and real FAISS retrieval; the opt-in live evaluator additionally checks the actual route and Groq answer.\n\n` + chatbotCases.map((test) => `## ${test.id}\n\n- Question: ${test.question}\n${test.previousQuestion ? `- Previous question: ${test.previousQuestion}\n` : ""}- Expected behavior: ${test.behavior}\n${test.sources ? `- Required facts: ${test.sources.map((group) => group.join(" or ")).join("; ")}\n` : ""}`).join("\n"));
const failed = rows.filter((row) => row.failures.length);
for (const row of failed) console.error(`${row.id}: ${row.question}\n  ${row.failures.join("; ")}\n  ${row.sources.join(", ")}`);
console.info(`Chatbot question corpus: ${rows.length - failed.length}/${rows.length} policy and real semantic-retrieval checks passed.`);
assert.ok(chatbotCases.length >= 200);
assert.equal(new Set(chatbotCases.map((test) => test.question)).size, chatbotCases.length, "Questions must be distinct");
if (failed.length) process.exitCode = 1;
