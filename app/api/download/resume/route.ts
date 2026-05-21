import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const filePath = join(process.cwd(), "public", "Shreevikas_Bangalore_Jagadish_Resume.pdf");
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Shreevikas_Bangalore_Jagadish_Resume.pdf"',
      "Content-Length": String(file.byteLength)
    }
  });
}
