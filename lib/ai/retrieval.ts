import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import faiss from "faiss-node";
import type { KnowledgeDocument } from "@/data/knowledge";
import { embedText, EMBEDDING_DIMENSIONS, EMBEDDING_MODEL } from "./embeddings";

export type EmbeddedDocument = KnowledgeDocument & { embedding: number[] };
export type KnowledgeSnapshot = { revision: string; embeddingModel: string; documents: EmbeddedDocument[] };
type RetrievalIndex = { index: InstanceType<typeof faiss.IndexFlatIP>; documents: EmbeddedDocument[]; source: "supabase" | "local" };
let indexPromise: Promise<RetrievalIndex> | undefined;
let refreshAt = 0;

async function createIndex(): Promise<RetrievalIndex> {
  const snapshot: KnowledgeSnapshot = JSON.parse(await readFile(path.join(process.cwd(), "data/generated/knowledge.json"), "utf8"));
  let documents = snapshot.documents;
  let source: RetrievalIndex["source"] = "local";
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (url && key) {
    try {
      const endpoint = new URL("/rest/v1/portfolio_knowledge", url);
      endpoint.searchParams.set("select", "id,kind,content,embedding");
      endpoint.searchParams.set("revision", `eq.${snapshot.revision}`);
      endpoint.searchParams.set("embedding_model", `eq.${EMBEDDING_MODEL}`);
      endpoint.searchParams.set("limit", String(documents.length));
      const response = await fetch(endpoint, { cache: "no-store", signal: AbortSignal.timeout(2000), headers: { apikey: key, ...(!key.startsWith("sb_secret_") ? { Authorization: `Bearer ${key}` } : {}) } });
      if (!response.ok) throw new Error(`Supabase knowledge read failed (${response.status}).`);
      const remote: unknown = await response.json();
      // Only the current canonical content can become model context; stale revisions are ignored.
      if (!Array.isArray(remote) || remote.length !== documents.length) throw new Error("Supabase knowledge needs synchronization.");
      const expected = new Map(documents.map((document) => [document.id, document]));
      const seen = new Set<string>();
      for (const item of remote) {
        if (!item || typeof item !== "object" || !expected.has(item.id) || seen.has(item.id) || item.content !== expected.get(item.id)?.content || !Array.isArray(item.embedding) || item.embedding.length !== EMBEDDING_DIMENSIONS || !item.embedding.every((value: unknown) => typeof value === "number" && Number.isFinite(value))) throw new Error("Invalid stored portfolio knowledge.");
        seen.add(item.id);
      }
      documents = (remote as EmbeddedDocument[]).map((item) => ({ ...item, entities: expected.get(item.id)?.entities }));
      source = "supabase";
    } catch (error) {
      console.warn("[chatbot] Using current local knowledge index.", { reason: error instanceof Error ? error.message : "Supabase unavailable" });
    }
  }
  const index = new faiss.IndexFlatIP(EMBEDDING_DIMENSIONS);
  index.add(documents.flatMap((document) => document.embedding));
  return { index, documents, source };
}

export async function retrieveKnowledge(question: string) {
  if (!indexPromise || Date.now() >= refreshAt) {
    refreshAt = Date.now() + 5 * 60_000;
    indexPromise = createIndex().catch((error: unknown) => { indexPromise = undefined; throw error; });
  }
  const loaded = await indexPromise;
  const query = await embedText(question);
  const found = loaded.index.search(query, loaded.documents.length);
  const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const normalized = ` ${normalize(question)} `;
  const namedProject = loaded.documents.filter((document) => document.kind === "project" && document.entities?.some((entity) => normalized.includes(` ${normalize(entity)} `)));
  let outsideProjectName = normalized;
  for (const entity of namedProject.flatMap((document) => document.entities ?? []).sort((a, b) => b.length - a.length)) outsideProjectName = outsideProjectName.replace(` ${normalize(entity)} `, " ");
  const namedComparisons = loaded.documents.filter((document) => document.kind === "comparison" && document.entities?.some((entity) => normalized.includes(` ${normalize(entity)} `)));
  const namedForestVariant = loaded.documents.some((document) => /^technology-randomforest(?:classifier|regressor)$/.test(document.id) && document.entities?.some((entity) => normalized.includes(` ${normalize(entity)} `)));
  let outsideServiceName = normalized;
  for (const entity of namedComparisons.flatMap((document) => document.entities ?? []).sort((a, b) => b.length - a.length)) outsideServiceName = outsideServiceName.replace(` ${normalize(entity)} `, " ");
  const intentIds: string[] = [];
  if (!namedProject.length) {
    if (/\b(certif\w*|credentials?|coursera|anthropic|verify|verification)\b/.test(normalized)) intentIds.push("certifications");
    if (/\b(education|educational|stud(?:y|ied)|college|universit\w*|master\w*|bachelor\w*|degree|graduate\w*|doctorate|phd|vtu)\b/.test(normalized)) intentIds.push("education");
    if (/\b(research|scientific ai|scientific modeling|academic work|physics|pinns?|physicsnemo|iit)\b/.test(normalized)) intentIds.push("research");
    if (/\b(email|phone|contact|linkedin|based|location|relocation|targeting|target roles|about yourself)\b/.test(normalized)) intentIds.push("profile");
    if (/\b(employed|employment|employer|work history|career|internship|intern|manufacturing|whiterock|white rock|neuralseek|neural seek)\b/.test(normalized)) intentIds.push("work-history");
    if (/\b(internship|intern)\b/.test(normalized)) intentIds.push(...loaded.documents.filter((document) => document.kind === "experience" && /\bIntern at\b/.test(document.content)).map((document) => document.id));
    if (/\bmanufacturing\b/.test(normalized)) intentIds.push(...loaded.documents.filter((document) => document.kind === "experience" && /\bmanufacturing\b/i.test(document.content)).map((document) => document.id));
  }
  // Exact tool aliases supplement semantic search; comparison facts require an explicit service match.
  const ranked = found.labels.map((label, position) => {
    const document = loaded.documents[label];
    const score = found.distances[position];
    const named = document.entities?.some((entity) => normalized.includes(` ${normalize(entity)} `)) ?? false;
    const intent = intentIds.includes(document.id);
    const boost = intent ? 1.5 : named ? (document.kind === "comparison" ? 1.2 : document.kind === "project" ? 1.1 : document.kind === "technology" ? 0.9 : 0.4) : 0;
    const penalty = document.kind === "technology" && !named ? 0.12 : 0;
    return { ...document, score, rank: score + boost - penalty, named, intent };
  }).filter((document) =>
    (document.score >= 0.26 || document.named || document.intent) &&
    (document.kind !== "comparison" || document.named) &&
    (!/\bprojects?\b/.test(normalized) || /project/.test(document.kind) || document.named || document.intent)
  ).sort((a, b) => b.rank - a.rank);
  const credentialOnly = intentIds.includes("certifications") && !/\b(used|using|hands on|experience|tools|projects?)\b/.test(normalized);
  const specificFacts = ranked.filter((document) => (!namedForestVariant || document.id !== "technology-random-forest") && (document.intent || (document.named &&
    (!credentialOnly || document.kind !== "technology") &&
    (!namedComparisons.length || document.kind !== "technology" || document.entities?.some((entity) => outsideServiceName.includes(` ${normalize(entity)} `))) &&
    (!namedProject.length || document.kind !== "technology" || document.entities?.some((entity) => outsideProjectName.includes(` ${normalize(entity)} `)))
  )));
  // Tool-specific facts already contain connected examples; unrelated high-similarity facts add ambiguity.
  const matches = (specificFacts.length ? specificFacts : ranked).slice(0, 5);
  return { source: loaded.source, matches, bestScore: found.distances[0] ?? 0 };
}
