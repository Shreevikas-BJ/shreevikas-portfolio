import { join } from "node:path";
import { createDownloadResponse } from "@/lib/downloadFile";

export async function GET() {
  const filePath = join(process.cwd(), "public", "research", "aiops-research-paper.pdf");

  return createDownloadResponse({
    filePath,
    fileName: "aiops-research-paper.pdf"
  });
}
