import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { RequestResumeButton } from "@/components/RequestResumeButton";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Request Resume | ${siteConfig.name}`,
  description: `Request the latest resume for ${siteConfig.name}.`
};

export default function ResumeRequestPage() {
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

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="data-panel p-6 text-center sm:p-8 lg:p-10">
            <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-8 w-8" />
            </div>
            <p className="eyebrow mx-auto mt-6 w-fit">Request Resume</p>
            <h1 className="mt-5 text-3xl font-black text-balance sm:text-4xl">
              Contact me for my latest resume.
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-muted-foreground">
              I do not publish a direct resume download on this portfolio. Recruiters and
              hiring teams can request my latest resume through the form below or email me
              directly.
            </p>
            <div className="mt-8 flex justify-center">
              <RequestResumeButton>
                <FileText className="h-4 w-4" />
                Request Resume
              </RequestResumeButton>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
