"use client";

import { ArrowUpRight, Github, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/data/portfolio";

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProjectModal({
  project,
  onClose
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex justify-end bg-background/78 backdrop-blur-md"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        className="h-full w-full max-w-3xl overflow-y-auto border-l border-border bg-background px-5 py-6 shadow-2xl sm:px-8 lg:px-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-summary"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-5 border-b border-border pb-6">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h2 id="project-modal-title" className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
              {project.title}
            </h2>
          </div>
          <Button
            ref={closeButtonRef}
            variant="outline"
            className="h-10 w-10 shrink-0 !px-0"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {project.visual ? (
          <div className="mt-7">
            <ProjectVisual project={project} />
          </div>
        ) : null}

        <p id="project-modal-summary" className="mt-7 text-lg leading-8 text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-9 grid gap-8 sm:grid-cols-2">
          <section className="border-l border-error/45 pl-5">
            <h3 className="mono-label text-error">Problem</h3>
            <p className="mt-3 leading-8 text-muted-foreground">
              {project.problem || project.summary}
            </p>
          </section>
          <section className="border-l border-primary/55 pl-5">
            <h3 className="mono-label text-primary">Solution</h3>
            <p className="mt-3 leading-8 text-muted-foreground">
              {project.solution || project.summary}
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-border pt-8">
          <h3 className="text-xl font-semibold">Architecture and technical decisions</h3>
          <p className="mt-4 leading-8 text-muted-foreground">{project.architecture}</p>
        </section>

        <section className="mt-9 border-t border-border pt-8">
          <h3 className="text-xl font-semibold">Reliability and outcomes</h3>
          <ul className="mt-5 space-y-4 leading-8 text-muted-foreground">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-9 border-t border-border pt-8">
          <h3 className="text-xl font-semibold">Technology stack</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          {project.repoUrl ? (
            <ButtonLink href={project.repoUrl} external>
              <Github className="h-4 w-4" />
              View Repository
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          ) : null}
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} variant="outline" external>
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
