import { ArrowRight } from "lucide-react";
import { researchExperience } from "@/data/portfolio";
import { ResearchVisual } from "@/components/ResearchVisual";

export function Research() {
  return (
    <section id="research" className="editorial-shell editorial-section" aria-labelledby="research-title">
      <div className="work-heading">
        <h2 id="research-title">Research experience</h2>
        <span className="technical-label">Scientific AI</span>
      </div>
      <article className="background-entry">
        <header className="entry-meta">
          <p className="technical-label">{researchExperience.role}</p>
          <h3>{researchExperience.organization}</h3>
          <p className="entry-location">{researchExperience.location}</p>
          <ResearchVisual />
        </header>
        <div className="entry-content">
          <h3 className="research-focus">{researchExperience.title}</h3>
          <p className="entry-summary">{researchExperience.summary}</p>
          <ul className="engineering-decisions">
            {researchExperience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <ol className="architecture-flow" aria-label="Scientific modeling workflow">
            {researchExperience.pipeline.map((stage, index) => (
              <li key={stage}>
                {index > 0 ? <ArrowRight size={14} aria-hidden="true" /> : null}
                <span>{stage}</span>
              </li>
            ))}
          </ol>
          <ul className="technology-list" aria-label="Research technologies">
            {researchExperience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
      </article>
    </section>
  );
}
