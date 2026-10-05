import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { knowledgeDocuments } from "../data/knowledge";
import { embedText, EMBEDDING_DIMENSIONS, EMBEDDING_MODEL, EMBEDDING_REVISION, MODEL_DIRECTORY } from "../lib/ai/embeddings";

const files = ["config.json", "tokenizer.json", "tokenizer_config.json", "onnx/model_quantized.onnx"];
for (const file of files) {
  const target = path.join(MODEL_DIRECTORY, EMBEDDING_MODEL, file);
  await mkdir(path.dirname(target), { recursive: true });
  try { await readFile(target); } catch {
    const response = await fetch(`https://huggingface.co/${EMBEDDING_MODEL}/resolve/${EMBEDDING_REVISION}/${file}`, { signal: AbortSignal.timeout(120_000) });
    if (!response.ok) throw new Error(`Embedding model download failed: ${file} (${response.status})`);
    await writeFile(target, Buffer.from(await response.arrayBuffer()));
  }
}

const revision = createHash("sha256").update(JSON.stringify({ knowledgeDocuments, EMBEDDING_REVISION })).digest("hex");
const outputPath = path.join(process.cwd(), "data/generated/knowledge.json");
let existing: { revision?: string } | undefined;
try { existing = JSON.parse(await readFile(outputPath, "utf8")); } catch {}
if (existing?.revision === revision) {
  console.info("Portfolio knowledge index is up to date.");
} else {
  const documents = [];
  for (const document of knowledgeDocuments) {
    const embedding = await embedText(document.searchText ?? document.content);
    if (embedding.length !== EMBEDDING_DIMENSIONS) throw new Error("Invalid embedding dimensions.");
    documents.push({ ...document, embedding });
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify({ revision, embeddingModel: EMBEDDING_MODEL, documents }));
  console.info(`Prepared ${documents.length} portfolio knowledge chunks (${EMBEDDING_DIMENSIONS} dimensions).`);
}
