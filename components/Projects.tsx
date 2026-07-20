"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button, ButtonLink } from "@/components/ui/Button";
import type { Project, ProjectFilter } from "@/data/portfolio";
import { projectFilters, projects, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = useMemo(
    () =>
      projects
        .filter((project) => project.featured)
        .sort((first, second) => (first.featuredOrder || 99) - (second.featuredOrder || 99)),
    []
  );

  const additionalProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      if (project.featured) return false;
      const matchesFilter =
        activeFilter === "All" || project.filters.includes(activeFilter);
      const matchesQuery =
        !normalizedQuery ||
        [project.title, project.summary, project.category, ...project.tech]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const visibleProjects =
    showAll || activeFilter !== "All" || query.trim()
      ? additionalProjects
      : additionalProjects.slice(0, 3);

  const selectFilter = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04 / Projects"
          title="Engineering work across AI safety, RAG, MLOps, and modern data platforms."
          description="These systems show how I frame problems, design architectures, build reliability into the workflow, and turn technical output into something people can use."
        />

        <div className="mb-8 flex flex-col gap-4 border-y border-border/70 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mono-label">Flagship systems</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Six focused builds spanning production AI and data infrastructure.
            </p>
          </div>
          <ButtonLink href={`${siteConfig.github}?tab=repositories`} variant="outline" external>
            <Github className="h-4 w-4" />
            View all repositories
          </ButtonLink>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.035, 0.14) }}
            >
              <ProjectCard
                project={project}
                onDetails={setSelectedProject}
                large
                reverse={index % 2 === 1}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Project explorer</p>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">More applied systems</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                Search by project, architecture, or technology, then narrow the collection by domain.
              </p>
            </div>

            <label className="relative block w-full max-w-md">
              <span className="sr-only">Search projects</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setShowAll(false);
                }}
                type="search"
                placeholder="Search projects or technologies"
                className="focus-ring h-12 w-full rounded-lg border border-border bg-surface/65 pl-11 pr-4 text-sm placeholder:text-muted-foreground/75"
              />
            </label>
          </div>

          <div className="mt-8 flex items-start gap-3">
            <SlidersHorizontal className="mt-2.5 hidden h-4 w-4 shrink-0 text-primary sm:block" />
            <div className="flex flex-wrap gap-2" aria-label="Filter projects">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => selectFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={cn(
                    "focus-ring rounded-full border px-3.5 py-2 font-mono text-xs font-semibold transition",
                    activeFilter === filter
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface/45 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>{additionalProjects.length} matching projects</span>
            {query ? (
              <button
                type="button"
                className="focus-ring rounded-md text-primary hover:underline"
                onClick={() => setQuery("")}
              >
                Clear search
              </button>
            ) : null}
          </div>

          <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.22 }}
                >
                  <ProjectCard project={project} onDetails={setSelectedProject} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {!visibleProjects.length ? (
            <div className="mt-8 rounded-lg border border-dashed border-border py-14 text-center">
              <p className="font-semibold">No projects match that search.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try another technology or category.</p>
            </div>
          ) : null}

          {!showAll && activeFilter === "All" && !query.trim() && additionalProjects.length > 3 ? (
            <div className="mt-10 flex justify-center">
              <Button variant="outline" onClick={() => setShowAll(true)}>
                Show {additionalProjects.length - 3} more projects
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
