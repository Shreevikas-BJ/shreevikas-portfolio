import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SelectedWork } from "@/data/selectedWork";
import { ProjectMotif } from "@/components/ProjectMotif";

export function ProjectRow({ work, number }: { work: SelectedWork; number: number }) {
  const { project, discipline, description } = work;

  return (
    <li className="work-row" data-featured={project.featured || undefined}>
      <span className="work-number" aria-hidden="true">{String(number).padStart(2, "0")}</span>
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
      <div className="work-side">
        {project.featured ? <ProjectMotif visual={project.visual} /> : null}
        <Link href={`/projects/${project.slug}`} className="work-arrow" aria-label={`Read ${project.title} case study`}>
          <ArrowUpRight size={24} aria-hidden="true" />
        </Link>
      </div>
    </li>
  );
}
