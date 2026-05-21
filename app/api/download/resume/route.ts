import { join } from "node:path";
import { createDownloadResponse } from "@/lib/downloadFile";

export async function GET() {
  const filePath = join(process.cwd(), "public", "Shreevikas_Bangalore_Jagadish_Resume.pdf");

  return createDownloadResponse({
    filePath,
    fileName: "Shreevikas_Bangalore_Jagadish_Resume.pdf"
  });
}
