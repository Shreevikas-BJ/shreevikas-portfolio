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
        title="Projects that show my AI infrastructure, RAG, and cloud data engineering work end to end."
        description="Selected projects from my latest resume, including AgentShield, AI/ML Knowledge RAG Assistant, and a Databricks Medallion pipeline."
      />

      <div className="mb-12 rounded-3xl border border-border/70 bg-card/30 p-4 backdrop-blur-xl sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-black">Featured Projects</h3>
          <span className="hidden text-sm text-muted-foreground sm:block">
            AI infrastructure, RAG, and data platform highlights
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
