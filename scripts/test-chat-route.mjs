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
const encoder = new TextEncoder();
let providerStatus = 200;
let providerStreamFails = false;

function load(file) {
  if (modules.has(file)) return modules.get(file);
  const loadedModule = { exports: {} };
  modules.set(file, loadedModule.exports);
  const compiled = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const testRequire = (name) => {
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
        for (const content of ["I use Python and SQL ", "for data and AI workflows."]) {
          const bytes = encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`);
          for (let index = 0; index < bytes.length; index += 7) controller.enqueue(bytes.slice(index, index + 7));
        }
        controller.enqueue(encoder.encode('data: {"choices":[{"delta":{"content":" GPU experiments."}}]}'));
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

for (const message of ["What are Shreevikas's core skills?", "What did he build at NeuralSeek?", "Which certifications does he hold?", "Tell me about his RAG work."]) {
  const response = await POST(request({ message }));
  assert.equal(response.status, 200);
  const payload = await response.json();
  assert.equal(payload.cached, true);
  assert.ok(payload.answer.length > 30);
}
assert.equal(providerRequests.length, 0, "Starter questions must be instant cached answers");
const commonQuestions = [
  ["What's your name?", "My name is Shreevikas Jagadish."],
  ["What\u2019s your name?", "My name is Shreevikas Jagadish."],
  ["whats ur name", "My name is Shreevikas Jagadish."],
  ["Hi, what's your name?", "My name is Shreevikas Jagadish."],
  ["Who is Shreevikas Jagadish?", "My name is Shreevikas Jagadish."],
  ["Please tell me your name", "My name is Shreevikas Jagadish."],
  ["What is your full name?", "My name is Shreevikas Jagadish."],
  ["Who are you?", "AI portfolio assistant"],
  ["Are you an AI?", "AI portfolio assistant"],
  ["Hi", "portfolio assistant"],
  ["Hello, how are you?", "portfolio assistant"],
  ["Tell me about yourself", "AI/ML"],
  ["What do you build?", "AI/ML"],
  ["Where are you based?", "United States"],
  ["Are you open to relocation?", "relocation"],
  ["What is your email?", "mailto:shreevikasjagadish7@gmail.com"],
  ["How can I contact you?", "mailto:shreevikasjagadish7@gmail.com"],
  ["What is your phone number?", "312"],
  ["What's your GitHub?", "github.com/Shreevikas-BJ"],
  ["What's your LinkedIn?", "linkedin.com/in/shreevikasbj/"],
  ["What is your website?", "shreevikas-portfolio.vercel.app"],
  ["Where did you study?", "Illinois Institute of Technology"],
  ["Where did you go to college?", "Visvesvaraya"],
  ["What are your qualifications?", "Master"],
  ["Are you open to work?", "roles"],
  ["Where have you worked?", "NeuralSeek"],
  ["What companies have you worked for?", "Whiterock"],
  ["What are your skills?", "Python"],
  ["What tools do you use?", "pgvector"],
  ["Do you know Python?", "Python is part of"],
  ["Have you used SQL?", "SQL is part of"],
  ["Do you use CUDA?", "CUDA is part of"],
  ["Which certifications do you hold?", "coursera.org"],
  ["Tell me about your RAG experience.", "NeuralSeek"],
  ["Tell me about your research", "NVIDIA PhysicsNeMo"],
  ["What are your projects?", "ArchPilot"],
  ["Tell me about AgentShield", "six failure modes"],
  ["What is ArchPilot?", "no public live link"],
  ["Tell me about Sales Forecasting MLOps Pipeline", "repository"],
  ["Thanks", "You're welcome"]
];
for (const [message, expected] of commonQuestions) {
  const response = await POST(request({ message }));
  assert.equal(response.status, 200, message);
  const payload = await response.json();
  assert.equal(payload.cached, true, message);
  assert.ok(payload.answer.includes(expected), `${message}: ${payload.answer}`);
}
assert.equal(providerRequests.length, 0, "Common profile questions must not call Groq");
for (const message of ["What is my name?", "How old are you?", "What's your home address?", "Who won the football match?", "Write a Python function", "Explain transformer mathematics"]) {
  const payload = await (await POST(request({ message }))).json();
  assert.ok(payload.answer.includes("mailto:"), message);
  assert.ok(!payload.answer.startsWith("My name is"), "Never infer visitor identity");
}
for (const message of ["What's the weather in Chicago?", "Write Python code for me", "Explain how SQL indexes work", "Tell me sports and skills", "What's his visa status?", "What salary does he want?", "Can I download your resume?", "Who is the president?"]) {
  const response = await POST(request({ message }));
  assert.equal(response.status, 200);
  const { answer } = await response.json();
  assert.ok(answer.includes("mailto:shreevikasjagadish7@gmail.com"), message);
  assert.ok(!answer.includes(".pdf"));
}
assert.equal(providerRequests.length, 0);

const response = await POST(request({ message: "How has he used SQL at NeuralSeek?" }));
assert.equal(response.headers.get("X-Chat-Stream"), "1");
assert.equal(await response.text(), "I use Python and SQL for data and AI workflows. GPU experiments.");
assert.equal(providerRequests.length, 1);
const sent = providerRequests[0];
assert.equal(sent.model, "llama-3.1-8b-instant");
assert.equal(sent.temperature, 0.2);
assert.equal(sent.max_completion_tokens, 180);
assert.equal(sent.messages.length, 2);
assert.ok(sent.messages[0].content.includes("Portfolio context:"));
assert.ok(sent.messages[0].content.includes("Do not provide general advice"));

providerStreamFails = true;
const brokenStream = await POST(request({ message: "How has he used SQL at NeuralSeek?" }));
await assert.rejects(() => brokenStream.text(), /could not complete/);
providerStreamFails = false;

providerStatus = 500;
assert.equal((await POST(request({ message: "How has he used SQL at NeuralSeek?" }))).status, 502);
providerStatus = 404;
const retiredModel = await POST(request({ message: "How has he used SQL at NeuralSeek?" }));
assert.equal(retiredModel.status, 200);
assert.ok((await retiredModel.json()).answer.includes("mailto:shreevikasjagadish7@gmail.com"));
for (let index = 0; index < 10; index++) assert.equal((await POST(request({ message: "skills" }, "rate-limit-test"))).status, 200);
const limited = await POST(request({ message: "skills" }, "rate-limit-test"));
assert.equal(limited.status, 429);
assert.ok(Number(limited.headers.get("Retry-After")) > 0);
console.log("Chat route: validation, no email gate, cached starters, contact fallback, streaming, unchanged model, provider failure and rate limiting PASS");
