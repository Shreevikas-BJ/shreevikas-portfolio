import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText, Mail, ShieldCheck } from "lucide-react";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description: `Professional resume for ${siteConfig.name}, AI/ML Engineer, Data Scientist, and Data Engineer.`
};

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AmbientBackground />
      <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to portfolio
        </Link>

        <section className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-primary/70" /> Resume
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              A concise view of my AI, machine-learning, and data engineering experience.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Review my latest experience, research, technical capabilities, education,
              and selected engineering outcomes in one document.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.resumePath} external>
                <FileText className="h-4 w-4" aria-hidden="true" />
                Open Resume PDF
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={siteConfig.emailHref} variant="outline">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </ButtonLink>
            </div>
          </div>

          <div className="data-panel p-7 sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-mono text-[0.66rem] font-semibold text-success">CURRENT PDF</span>
            </div>
            <p className="mt-8 mono-label">Candidate profile</p>
            <h2 className="mt-3 text-2xl font-semibold">{siteConfig.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              AI/ML Engineer &middot; Data Scientist &middot; Data Engineer
            </p>
            <div className="mt-7 space-y-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
              <p>{siteConfig.location}</p>
              <p>{siteConfig.relocation}</p>
              <p className="inline-flex items-center gap-2 text-accent">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                AWS Certified Data Engineer - Associate
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
