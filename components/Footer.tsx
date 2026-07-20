import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const footerLinks = [
  { label: "GitHub", href: siteConfig.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  { label: "Email", href: siteConfig.emailHref, icon: Mail }
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface/35 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-[1320px] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
        <div>
          <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/45 bg-primary/10 font-mono text-xs font-bold text-primary">
              {siteConfig.initials}
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{siteConfig.name}</span>
              <span className="mt-0.5 block font-mono text-[0.62rem] text-muted-foreground">
                AI / ML + DATA SYSTEMS
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
            Designed and engineered as a focused view of my work across production AI,
            scientific machine learning, and modern data infrastructure.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            const external = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                aria-label={link.label}
                title={link.label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
          <a
            href="#home"
            className="focus-ring ml-2 inline-flex h-10 items-center gap-2 rounded-lg border border-border px-3 font-mono text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            Top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
