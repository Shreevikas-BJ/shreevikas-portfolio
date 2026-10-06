/* eslint-disable @next/next/no-html-link-for-pages -- Native fragment links re-scroll even when the current hash is already active. */
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
          <a href="/#projects" className="text-link">Work</a>
          <a href="/#experience" className="text-link">Experience</a>
          <a href="/#research" className="text-link">Research</a>
          <a href="/#education" className="text-link">Education</a>
          <a href="/#certifications" className="text-link">Credentials</a>
        </div>
      </nav>
    </header>
  );
}
