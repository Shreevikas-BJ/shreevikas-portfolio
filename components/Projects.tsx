import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { selectedWork } from "@/data/selectedWork";

export function Projects() {
  return (
    <section id="projects" className="editorial-shell work-section" aria-labelledby="work-title">
      <Reveal className="work-heading">
        <h2 id="work-title">Selected work</h2>
        <span className="technical-label">01 / 06</span>
      </Reveal>
      <Reveal>
        <ol className="work-list">
          {selectedWork.map(({ project, discipline, description }, index) => (
            <li key={project.slug} className="work-row">
              <span className="work-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className="work-copy">
                <p className="technical-label">{discipline}</p>
                <h3>
                  <Link href={`/projects/${project.slug}`} className="work-title-link">
                    {project.title}
                  </Link>
                </h3>
                <p className="work-description">{description}</p>
                <ul className="technology-list" aria-label={`${project.title} technologies`}>
                  {project.tech.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                {project.repoUrl ? (
                  <a href={project.repoUrl} className="repository-link" target="_blank" rel="noopener noreferrer">
                    GitHub <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only">: {project.title} repository</span>
                  </a>
                ) : null}
              </div>
              <Link href={`/projects/${project.slug}`} className="work-arrow" aria-label={`Read ${project.title} case study`}>
                <ArrowUpRight size={24} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
