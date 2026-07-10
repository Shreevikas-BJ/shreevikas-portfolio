"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import { useState } from "react";
import type { Project, ProjectFilter } from "@/data/portfolio";
import { projectFilters, projects, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { ButtonLink } from "@/components/ui/Button";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);
  const visibleProjects =
    activeFilter === "All"
      ? additionalProjects
      : additionalProjects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="AI, ML, RAG, agentic AI, data engineering, and analytics projects."
        description="A focused project showcase for roles across AI engineering, applied AI, data science, machine learning engineering, data engineering, agent engineering, and forward deployed AI."
      />

      <div className="rounded-3xl border border-border/70 bg-card/30 p-4 backdrop-blur-xl sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-black">Featured Projects</h3>
          <span className="hidden text-sm text-muted-foreground sm:block">
            Agent safety, FinOps AI, RAG, Databricks, and Snowflake/dbt
          </span>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
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

      <div className="mt-12">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-black">More Projects</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Additional selected GitHub projects grouped by the areas recruiters often scan first.
            </p>
          </div>
          <ButtonLink href={`${siteConfig.github}?tab=repositories`} variant="outline" external>
            <Github className="h-4 w-4" />
            View More on GitHub
          </ButtonLink>
        </div>

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
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
