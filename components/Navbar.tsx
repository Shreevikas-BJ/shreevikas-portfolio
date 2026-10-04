import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="editorial-shell header-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label={`SJ - ${siteConfig.name} home`}>
          {siteConfig.initials}<span aria-hidden="true">.</span>
        </Link>
        <span className="header-discipline">AI / ML / DATA</span>
        <Link href="/#projects" className="text-link header-work">
          Selected work <ArrowDown size={14} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
