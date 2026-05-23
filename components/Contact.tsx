import { Github, Linkedin, Mail } from "lucide-react";
import { contactItems, siteConfig } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="surface rounded-2xl p-6 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Open to Data Engineering, Analytics Engineering, and AI Data Engineering roles."
          description="Recruiters and hiring teams can reach me through email, LinkedIn, or GitHub. I am based in Chicago, IL and open to relocation."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="rounded-xl border border-border bg-background/50 p-4 transition hover:border-primary/50">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </div>
                <p className="mt-2 break-words text-sm text-muted-foreground">{item.value}</p>
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

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.emailHref} external>
            <Mail className="h-4 w-4" />
            Email Me
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
    </section>
  );
}
