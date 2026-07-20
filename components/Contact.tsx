import { ArrowUpRight, CheckCircle2, FileText, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-band-alt">
      <div className="section-shell">
        <Reveal>
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-primary/70" />
                07 / Contact
              </p>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.14] text-balance sm:text-5xl">
                Let&apos;s build an AI or data system that earns trust in production.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                I am open to AI/ML Engineer, Data Scientist, and Data Engineer roles,
                as well as conversations with teams working on RAG, MLOps, scientific AI,
                or cloud data infrastructure.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={siteConfig.emailHref}>
                  <Mail className="h-4 w-4" />
                  Email Me
                </ButtonLink>
                <CopyEmailButton email={siteConfig.email} />
                <ButtonLink href={siteConfig.linkedin} variant="outline" external>
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={siteConfig.github} variant="outline" external>
                  <Github className="h-4 w-4" />
                  GitHub
                </ButtonLink>
                <ButtonLink href={siteConfig.resumePath} variant="secondary" external>
                  <FileText className="h-4 w-4" />
                  View Resume
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface/75 p-6 shadow-elevated sm:p-8">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-35" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </span>
                <span className="font-mono text-xs font-semibold text-success">OPEN TO OPPORTUNITIES</span>
              </div>

              <dl className="mt-6 space-y-5">
                <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:items-center">
                  <dt className="flex items-center gap-2 text-sm font-semibold">
                    <Mail className="h-4 w-4 text-primary" /> Email
                  </dt>
                  <dd className="break-all font-mono text-sm text-muted-foreground">
                    <a className="hover:text-primary" href={siteConfig.emailHref}>{siteConfig.email}</a>
                  </dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:items-center">
                  <dt className="flex items-center gap-2 text-sm font-semibold">
                    <Phone className="h-4 w-4 text-primary" /> Phone
                  </dt>
                  <dd className="font-mono text-sm text-muted-foreground">
                    <a className="hover:text-primary" href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                  </dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:items-center">
                  <dt className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="h-4 w-4 text-primary" /> Location
                  </dt>
                  <dd className="font-mono text-sm text-muted-foreground">
                    {siteConfig.location} &middot; {siteConfig.relocation}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 border-t border-border pt-5">
                <p className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  Best fit: teams building reliable AI products, predictive systems,
                  or modern data platforms.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
