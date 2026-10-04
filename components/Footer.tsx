import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="editorial-shell editorial-footer">
      <nav aria-label="Contact links">
        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
        <a href={`mailto:${siteConfig.email}`}>Email <ArrowUpRight size={15} aria-hidden="true" /></a>
      </nav>
    </footer>
  );
}
