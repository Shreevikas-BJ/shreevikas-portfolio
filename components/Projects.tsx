"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import { useMemo, useState } from "react";
import type { Project, ProjectFilter } from "@/data/portfolio";
import { projectFilters, projects, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { ButtonLink } from "@/components/ui/Button";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("Featured");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = useMemo(() => {
    if (activeFilter === "Featured") return projects.filter((project) => project.featured);
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Production-minded ML, forecasting, data engineering, RAG, and analytics projects."
        description="A curated set of resume-backed and GitHub projects that show how I build analytical systems across predictive modeling, MLOps, cloud data platforms, RAG, AI agents, and decision intelligence."
      />

      <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-border/70 bg-card/40 p-2 backdrop-blur-xl">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
              activeFilter === filter
                ? "border-primary bg-primary text-primary-foreground"
                : "border-transparent bg-transparent text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {activeFilter === "Featured" ? (
        <div className="rounded-3xl border border-border/70 bg-card/30 p-4 backdrop-blur-xl sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-black">Featured Projects</h3>
            <span className="hidden text-sm text-muted-foreground sm:block">
              Forecasting, data platforms, FinOps AI, RAG, and customer analytics
            </span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onDetails={setSelectedProject}
                large
              />
            ))}
          </div>
        </div>
      ) : (
        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} onDetails={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <div className="mt-10 flex justify-center">
        <ButtonLink href={`${siteConfig.github}?tab=repositories`} variant="outline" external>
          <Github className="h-4 w-4" />
          View More on GitHub
        </ButtonLink>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
