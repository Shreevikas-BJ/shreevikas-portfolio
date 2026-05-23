"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/portfolio";
import { projectFilters, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Projects that show my data platform, AI, and analytics work end to end."
        description="Selected projects that show my work across data pipelines, cloud platforms, RAG systems, and machine learning."
      />

      <div className="mb-12">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-black">Featured Projects</h3>
          <span className="hidden text-sm text-muted-foreground sm:block">
            Data engineering, AI/RAG, and ML/analytics highlights
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

      <div className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
              activeFilter === filter
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card/70 text-muted-foreground hover:border-primary/60 hover:text-foreground"
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
