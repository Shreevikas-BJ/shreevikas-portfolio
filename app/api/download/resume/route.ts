import { join } from "node:path";
import { createDownloadResponse } from "@/lib/downloadFile";

export async function GET(request: Request) {
  const filePath = join(process.cwd(), "public", "Shreevikas_Bangalore_Jagadish_Resume.pdf");

  return createDownloadResponse(request, {
    filePath,
    fileName: "Shreevikas_Bangalore_Jagadish_Resume.pdf",
    label: "Resume",
    backHref: "/resume"
  });
}
