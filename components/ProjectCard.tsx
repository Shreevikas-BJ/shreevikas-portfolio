"use client";

import { ArrowUpRight, Github, Layers3, ScanSearch } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  onDetails,
  large = false,
  reverse = false
}: {
  project: Project;
  onDetails: (project: Project) => void;
  large?: boolean;
  reverse?: boolean;
}) {
  if (large) {
    return (
      <article className="group overflow-hidden rounded-lg border border-border bg-surface/68 shadow-elevated transition duration-300 hover:border-primary/45">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className={cn("p-6 sm:p-8 lg:p-10", reverse && "lg:order-2")}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">{project.highlightLabel}</span>
              <span className="font-mono text-[0.66rem] text-muted-foreground">{project.category}</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-tight text-balance sm:text-3xl">
              {project.title}
            </h3>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="border-l border-error/45 pl-4">
                <p className="mono-label text-error">Problem</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.problem}</p>
              </div>
              <div className="border-l border-primary/55 pl-4">
                <p className="mono-label text-primary">Solution</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {project.solution || project.summary}
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-border/70 pt-6">
              <p className="mono-label">Primary engineering features</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                {project.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.slice(0, 7).map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.repoUrl ? (
                <ButtonLink href={project.repoUrl} external>
                  <Github className="h-4 w-4" />
                  Repository
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              ) : null}
              <Button variant="outline" onClick={() => onDetails(project)}>
                <ScanSearch className="h-4 w-4" />
                Case Study
              </Button>
              {project.liveUrl ? (
                <ButtonLink href={project.liveUrl} variant="outline" external>
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div className={cn("flex items-center bg-background/35 p-5 sm:p-7 lg:p-8", reverse && "lg:order-1")}>
            <ProjectVisual project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="premium-card group flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{project.highlightLabel || project.filters[0]}</p>
          <h3 className="mt-4 text-xl font-semibold leading-7">{project.title}</h3>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
          <Layers3 className="h-4 w-4" />
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 6).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        {project.repoUrl ? (
          <ButtonLink href={project.repoUrl} external className="min-h-10 px-3 py-2 text-xs">
            <Github className="h-3.5 w-3.5" />
            GitHub
          </ButtonLink>
        ) : null}
        <Button
          variant="outline"
          className="min-h-10 px-3 py-2 text-xs"
          onClick={() => onDetails(project)}
        >
          Details
        </Button>
      </div>
    </article>
  );
}
