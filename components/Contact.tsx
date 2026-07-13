import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { contactItems, siteConfig } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="data-panel p-7 sm:p-10 lg:p-12">
        <div className="relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Open to Data Scientist, AI-ML, Machine Learning, and Decision Intelligence roles."
          description="Recruiters and hiring teams can reach me through email, phone, LinkedIn, GitHub, or the latest resume linked below. I am based in the United States."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="h-full rounded-2xl border border-border/70 bg-background/50 p-5 transition hover:border-primary/50 hover:bg-primary/5">
                <div className="flex items-center gap-2 text-base font-semibold text-primary">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </div>
                <p className="mt-3 break-words text-base leading-7 text-muted-foreground">{item.value}</p>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring rounded-xl"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.emailHref} external>
            <Mail className="h-4 w-4" />
            Email Me
          </ButtonLink>
          <CopyEmailButton email={siteConfig.email} />
          <ButtonLink href={siteConfig.resumePath} variant="secondary" external>
            <FileText className="h-4 w-4" />
            View Resume
          </ButtonLink>
          <ButtonLink href={siteConfig.resumePath} variant="outline" download>
            <FileText className="h-4 w-4" />
            Download Resume
          </ButtonLink>
          <ButtonLink href={siteConfig.linkedin} variant="outline" external>
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </ButtonLink>
          <ButtonLink href={siteConfig.github} variant="outline" external>
            <Github className="h-4 w-4" />
            View GitHub
          </ButtonLink>
        </div>
        </div>
      </div>
    </section>
  );
}
