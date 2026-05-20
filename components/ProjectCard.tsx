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
    <article className="surface group flex h-full flex-col rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          {project.highlightLabel ? (
            <span className="mb-3 inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent-foreground dark:text-accent">
              {project.highlightLabel}
            </span>
          ) : null}
          <h3 className={large ? "text-2xl font-black" : "text-xl font-black"}>
            {project.title}
          </h3>
          <p className="mt-3 leading-7 text-muted-foreground">{project.summary}</p>
        </div>
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:flex">
          {project.category === "AI/RAG" ? <Code2 className="h-5 w-5" /> : <Layers className="h-5 w-5" />}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, large ? 8 : 6).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
        {project.bullets.slice(0, large ? 3 : 2).map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm leading-6 text-muted-foreground">
        <span className="font-semibold text-foreground">Architecture: </span>
        {project.architecture}
      </p>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <ButtonLink href={project.repoUrl} variant="primary" external>
          View GitHub Repo
          <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
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
