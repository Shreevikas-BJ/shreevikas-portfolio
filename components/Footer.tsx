import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Built for {siteConfig.name}.</p>
        <div className="flex gap-4">
          <a className="focus-ring rounded-md hover:text-foreground" href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="focus-ring rounded-md hover:text-foreground" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="focus-ring rounded-md hover:text-foreground" href={`mailto:${siteConfig.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
