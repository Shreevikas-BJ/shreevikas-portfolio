import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { research, siteConfig } from "@/data/portfolio";
import { PdfDownloadButton } from "@/components/PdfDownloadButton";

const researchPreviewPages = Array.from({ length: 21 }, (_, index) => {
  const page = String(index + 1).padStart(2, "0");
  return `/document-previews/aiops/page-${page}.jpg`;
});

export const metadata: Metadata = {
  title: `AIOps Research Paper | ${siteConfig.name}`,
  description:
    "View and download Shreevikas Bangalore Jagadish's AIOps research paper on AI-driven process engineering for IT operations."
};

export default function AiopsResearchPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell">
        <Link
          href="/#research"
          className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside id="download" className="surface rounded-2xl p-6 lg:p-8">
            <p className="eyebrow w-fit">Research & Publications</p>
            <h1 className="mt-5 text-3xl font-black text-balance sm:text-4xl">
              {research.title}
            </h1>
            <p className="mt-5 leading-8 text-muted-foreground">{research.summary}</p>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Course:</span> {research.course}
              </p>
              <p>
                <span className="font-semibold text-foreground">Institution:</span>{" "}
                {research.institution}
              </p>
              <p>
                <span className="font-semibold text-foreground">Date:</span> {research.date}
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              <PdfDownloadButton
                fileName="aiops-research-paper.pdf"
                href="/api/download/aiops-research-paper"
              >
                <Download className="h-4 w-4" />
                Download Research Paper
              </PdfDownloadButton>
            </div>
          </aside>

          <div className="space-y-4">
            {researchPreviewPages.map((src, index) => (
              <div key={src} className="surface overflow-hidden rounded-2xl p-3">
                <Image
                  src={src}
                  alt={`AIOps research paper preview page ${index + 1}`}
                  width={980}
                  height={1268}
                  className="w-full rounded-xl bg-white"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
