import { copyFile, mkdir, readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, join } from "node:path";

type DownloadFileOptions = {
  filePath: string;
  fileName: string;
  label: string;
  backHref: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isLocalhost(request: Request) {
  const hostname = new URL(request.url).hostname;
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

export async function createDownloadResponse(request: Request, options: DownloadFileOptions) {
  if (process.env.NODE_ENV !== "production" && isLocalhost(request)) {
    const downloadsDir = join(homedir(), "Downloads");
    const safeFileName = basename(options.fileName);
    const destination = join(downloadsDir, safeFileName);

    await mkdir(downloadsDir, { recursive: true });
    await copyFile(options.filePath, destination);

    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(options.label)} saved</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #0c1018;
      color: #f1f5f8;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main {
      width: min(680px, calc(100vw - 32px));
      border: 1px solid rgba(148, 163, 184, 0.25);
      border-radius: 18px;
      padding: 32px;
      background: rgba(18, 25, 36, 0.86);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
    }
    h1 { margin: 0; font-size: 28px; line-height: 1.15; }
    p { color: #abb6c4; line-height: 1.7; }
    code {
      display: block;
      margin-top: 16px;
      padding: 14px;
      overflow-wrap: anywhere;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.06);
      color: #1fc1bc;
    }
    a {
      display: inline-flex;
      margin-top: 22px;
      min-height: 42px;
      align-items: center;
      border-radius: 10px;
      padding: 0 16px;
      background: #1fc1bc;
      color: #081116;
      font-weight: 800;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <main>
    <h1>${escapeHtml(options.label)} saved to Downloads</h1>
    <p>The file was copied directly into your Windows Downloads folder from the local portfolio server.</p>
    <code>${escapeHtml(destination)}</code>
    <a href="${escapeHtml(options.backHref)}">Back to portfolio</a>
  </main>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  }

  const file = await readFile(options.filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${options.fileName}"`,
      "Content-Length": String(file.byteLength)
    }
  });
}
