import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="editorial-shell editorial-section" aria-labelledby="experience-title">
      <div className="work-heading">
        <h2 id="experience-title">Work experience</h2>
        <span className="technical-label">Industry</span>
      </div>
      {experiences.map((experience) => (
        <article key={`${experience.company}-${experience.title}`} className="background-entry">
          <header className="entry-meta">
            <a className="experience-company-mark" href={experience.companyUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${experience.company} on LinkedIn`}>
              <Image src={experience.logo.src} width={experience.logo.width} height={experience.logo.height} sizes="64px" alt="" className="experience-company-logo" />
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <p className="technical-label">{experience.dates}</p>
            <h3><a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="experience-company-name">{experience.company}</a></h3>
            <p className="entry-role">{experience.title}</p>
            <p className="entry-location">{experience.location}</p>
          </header>
          <div className="entry-content">
            <p className="entry-summary">{experience.summary}</p>
            <ul className="engineering-decisions">
              {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <ul className="technology-list" aria-label={`${experience.company} technologies`}>
              {experience.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
