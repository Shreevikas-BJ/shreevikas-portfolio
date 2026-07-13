"use client";

import { ArrowUpRight, Code2, Layers } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";

export function ProjectCard({
  project,
  onDetails,
  large = false
}: {
  project: Project;
  onDetails: (project: Project) => void;
  large?: boolean;
}) {
  return (
    <article className="premium-card group flex h-full flex-col p-6 sm:p-8">
      <div aria-hidden="true" className="trace-line left-6 right-6 top-0" />
      <div className="flex items-start justify-between gap-4">
        <div>
          {project.highlightLabel ? (
            <span className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent-foreground dark:text-accent">
              {project.highlightLabel}
            </span>
          ) : null}
          <span className="mb-3 ml-0 inline-flex max-w-full whitespace-normal rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-left text-xs font-bold text-primary sm:ml-2">
            {project.category}
          </span>
          <h3 className={large ? "text-2xl font-black" : "text-xl font-black"}>
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{project.summary}</p>
        </div>
        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition group-hover:scale-105 sm:flex">
          {project.filters.includes("AI Agents") || project.filters.includes("RAG & GenAI") ? (
            <Code2 className="h-5 w-5" />
          ) : (
            <Layers className="h-5 w-5" />
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {project.tech.slice(0, large ? 8 : 6).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
        {project.bullets.slice(0, large ? 3 : 2).map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        {project.repoUrl ? (
          <ButtonLink href={project.repoUrl} variant="primary" external>
            View GitHub Repo
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        ) : null}
        <Button variant="outline" onClick={() => onDetails(project)}>
          View Details
        </Button>
        {project.liveUrl ? (
          <ButtonLink href={project.liveUrl} variant="outline" external>
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        ) : null}
      </div>
    </article>
  );
}
