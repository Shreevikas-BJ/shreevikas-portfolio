import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/portfolio";
import { selectedWork, supportingWork } from "@/data/selectedWork";

export function Projects() {
  return (
    <section id="projects" className="editorial-shell work-section" aria-labelledby="work-title">
      <Reveal className="work-heading">
        <h2 id="work-title">Selected work</h2>
        <span className="technical-label">{String(selectedWork.length).padStart(2, "0")} projects</span>
      </Reveal>
      <Reveal>
        <ol className="work-list">
          {selectedWork.map((work, index) => (
            <ProjectRow key={work.slug} work={work} number={index + 1} />
          ))}
        </ol>
      </Reveal>
      <div className="project-catalog" aria-labelledby="catalog-title">
        <h3 id="catalog-title" className="catalog-heading">More of my work</h3>
        {supportingWork.map((category) => (
          <details key={category.title} className="project-category">
            <summary>
              <span className="category-title">{category.title}</span>
              <span className="technical-label category-count">{String(category.projects.length).padStart(2, "0")} projects</span>
              <span className="category-toggle" aria-hidden="true"><ChevronDown size={20} /></span>
            </summary>
            <ol className="work-list">
              {category.projects.map((work, index) => (
                <ProjectRow key={work.slug} work={work} number={index + 1} />
              ))}
            </ol>
          </details>
        ))}
        <a href={`${siteConfig.github}?tab=repositories`} className="text-link catalog-link" target="_blank" rel="noopener noreferrer">
          More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
