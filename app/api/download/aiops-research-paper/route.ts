import { join } from "node:path";
import { createDownloadResponse } from "@/lib/downloadFile";

export async function GET(request: Request) {
  const filePath = join(process.cwd(), "public", "research", "aiops-research-paper.pdf");

  return createDownloadResponse(request, {
    filePath,
    fileName: "aiops-research-paper.pdf",
    label: "AIOps research paper",
    backHref: "/research/aiops"
  });
}
