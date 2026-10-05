import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const directory = path.join(process.cwd(), ".next/server/app/api/chat");
const trace: { files: string[] } = JSON.parse(await readFile(path.join(directory, "route.js.nft.json"), "utf8"));
const files = [];
for (const file of new Set(trace.files)) files.push({ file, bytes: (await stat(path.resolve(directory, file))).size });
const total = files.reduce((sum, file) => sum + file.bytes, 0);
console.info(`Chat function trace: ${(total / 1024 / 1024).toFixed(1)} MiB.`);
console.info("Largest traced assets:", files.sort((a, b) => b.bytes - a.bytes).slice(0, 8).map((item) => ({ file: item.file, MiB: Number((item.bytes / 1024 / 1024).toFixed(1)) })));
if (total > 240 * 1024 * 1024) throw new Error("Chat function trace is too large for Vercel. Trim unused native binaries before deploying.");
