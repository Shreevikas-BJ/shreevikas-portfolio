import { join } from "node:path";
import { createDownloadResponse } from "@/lib/downloadFile";

export async function GET() {
  const filePath = join(process.cwd(), "public", "Shreevikas_Jagadish_DE_CV.pdf");

  return createDownloadResponse({
    filePath,
    fileName: "Shreevikas_Jagadish_DE_CV.pdf"
  });
}
