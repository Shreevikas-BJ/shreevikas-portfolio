"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";

export function ProjectModal({
  project,
  onClose
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="surface max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl p-6 shadow-2xl sm:rounded-2xl sm:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow">{project.category}</span>
            <h3 id="project-modal-title" className="mt-4 text-3xl font-black text-balance">
              {project.title}
            </h3>
            <p className="mt-4 leading-7 text-muted-foreground">{project.summary}</p>
          </div>
          <Button
            variant="outline"
            className="h-10 w-10 shrink-0 px-0"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
          <h4 className="font-bold">Architecture and impact</h4>
          <p className="mt-2 leading-7 text-muted-foreground">{project.architecture}</p>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Achievement highlights</h4>
          <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Tech stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={project.repoUrl} external>
            View GitHub Repo
          </ButtonLink>
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} variant="outline" external>
              Live Demo
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
