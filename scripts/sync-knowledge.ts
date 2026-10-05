import { readFile } from "node:fs/promises";
import path from "node:path";

try { process.loadEnvFile(".env.local"); } catch {}
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local before synchronizing.");
const snapshot = JSON.parse(await readFile(path.join(process.cwd(), "data/generated/knowledge.json"), "utf8"));
const records = snapshot.documents.map(({ id, kind, content, embedding }: Record<string, unknown>) => ({ id, kind, content, embedding, embedding_model: snapshot.embeddingModel, revision: snapshot.revision, updated_at: new Date().toISOString() }));
const response = await fetch(new URL("/rest/v1/portfolio_knowledge?on_conflict=id", url), {
  method: "POST",
  signal: AbortSignal.timeout(15_000),
  headers: { apikey: key, ...(!key.startsWith("sb_secret_") ? { Authorization: `Bearer ${key}` } : {}), "Content-Type": "application/json", Prefer: "resolution=merge-duplicates,return=minimal" },
  body: JSON.stringify(records)
});
if (!response.ok) throw new Error(`Supabase synchronization failed (${response.status}). Check the table migration and server key.`);
console.info(`Synchronized ${records.length} portfolio knowledge chunks to Supabase.`);
