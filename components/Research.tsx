import { BookOpen, Download, FileText } from "lucide-react";
import { research } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";

export function Research() {
  return (
    <section id="research" className="section-shell">
      <SectionHeading
        eyebrow="Research & Publications"
        title="AIOps research through a process-engineering lens."
        description="A polished publication card for Shreevikas's uploaded research paper, with the exact paper title and a direct PDF link."
      />

      <article className="surface overflow-hidden rounded-2xl">
        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-border bg-muted/40 p-6 lg:border-b-0 lg:border-r lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="h-8 w-8" />
            </div>
            <p className="mt-6 text-sm font-semibold text-primary">{research.course}</p>
            <p className="mt-1 text-sm text-muted-foreground">{research.institution}</p>
            <p className="mt-1 text-sm text-muted-foreground">{research.date}</p>
            <div className="relative z-10 mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="/research/aiops-research-paper.pdf">
                  <FileText className="h-4 w-4" />
                  View Research Paper
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="/research/aiops-research-paper.pdf"
                  download="aiops-research-paper.pdf"
                >
                  <Download className="h-4 w-4" />
                  Download Research Paper
                </a>
              </Button>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <h3 className="text-2xl font-black text-balance">{research.title}</h3>
            <p className="mt-5 leading-8 text-muted-foreground">{research.summary}</p>

            <div className="mt-6">
              <h4 className="font-bold">Key topics</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {research.topics.map((topic) => (
                  <Badge key={topic}>{topic}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background/40 p-5">
              <h4 className="font-bold">Concepts covered</h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {research.concepts.map((concept) => (
                  <div key={concept} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {concept}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
