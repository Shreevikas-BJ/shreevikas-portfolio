import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { TransformerBackground } from "@/components/TransformerBackground";

export function Hero() {
  return (
    <section id="home" className="editorial-hero" aria-labelledby="hero-title">
      <TransformerBackground />
      <div className="editorial-shell hero-inner">
        <h1 id="hero-title">
          <span>{siteConfig.name},</span>{" "}
          <span className="hero-statement">I build reliable AI.</span>
        </h1>
        <p className="hero-description">
          I turn complex data into dependable machine-learning, retrieval, and cloud systems.
        </p>
        <a href="#projects" className="hero-link">
          Explore my work <ArrowDownRight size={22} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
