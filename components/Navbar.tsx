import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="editorial-shell header-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label={`SJ - ${siteConfig.name} home`}>
          {siteConfig.initials}<span aria-hidden="true">.</span>
        </Link>
        <span className="header-discipline">AI / ML / DATA</span>
        <div className="header-links">
          <Link href="/#projects" className="text-link">Work</Link>
          <Link href="/#experience" className="text-link">Experience</Link>
          <Link href="/#research" className="text-link">Research</Link>
          <Link href="/#education" className="text-link">Education</Link>
          <Link href="/#certifications" className="text-link">Credentials</Link>
        </div>
      </nav>
    </header>
  );
}
