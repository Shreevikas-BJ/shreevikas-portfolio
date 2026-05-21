import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { PdfDownloadButton } from "@/components/PdfDownloadButton";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description: `View and download the resume of ${siteConfig.name}.`
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside id="download" className="surface rounded-2xl p-6 lg:p-8">
            <p className="eyebrow w-fit">Resume</p>
            <h1 className="mt-5 text-3xl font-black text-balance sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-5 leading-8 text-muted-foreground">
              Data Engineer and AI Data Engineer focused on scalable cloud data platforms,
              analytics engineering, RAG systems, and production-ready AI workflows.
            </p>

            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              <PdfDownloadButton
                fileName="Shreevikas_Bangalore_Jagadish_Resume.pdf"
                href="/api/download/resume"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </PdfDownloadButton>
              <Button asChild variant="outline">
                <a href="/Shreevikas_Bangalore_Jagadish_Resume.pdf">
                  <ExternalLink className="h-4 w-4" />
                  Open PDF File
                </a>
              </Button>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="surface overflow-hidden rounded-2xl p-3">
              <Image
                src="/document-previews/resume/page-01.jpg"
                alt="Resume preview for Shreevikas Bangalore Jagadish"
                width={980}
                height={1268}
                className="w-full rounded-xl bg-white"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
