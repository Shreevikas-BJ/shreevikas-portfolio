import { readFile } from "node:fs/promises";

type DownloadFileOptions = {
  filePath: string;
  fileName: string;
};

export async function createDownloadResponse(options: DownloadFileOptions) {
  const file = await readFile(options.filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${options.fileName}"`,
      "Content-Length": String(file.byteLength),
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
