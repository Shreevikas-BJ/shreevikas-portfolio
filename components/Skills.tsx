"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Network } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeGroup = skills[activeIndex];
  const ActiveIcon = activeGroup.icon;

  return (
    <section id="skills" className="section-band-alt">
      <div className="section-shell">
        <SectionHeading
          eyebrow="05 / Capabilities"
          title="A technical stack organized around the systems I ship."
          description="I combine AI, machine learning, scientific computing, data engineering, and cloud delivery as one connected production discipline."
        />

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div className="relative">
            <div className="absolute bottom-5 left-5 top-5 hidden w-px bg-border sm:block" aria-hidden="true">
              <motion.span
                className="block w-px origin-top bg-gradient-to-b from-primary via-secondary to-accent"
                animate={{ height: `${((activeIndex + 1) / skills.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="grid gap-2 sm:pl-10" role="group" aria-label="Technical capability groups">
              {skills.map((group, index) => {
                const Icon = group.icon;
                const active = index === activeIndex;
                return (
                  <button
                    key={group.category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "focus-ring group flex min-h-16 items-center gap-4 rounded-lg border px-4 py-3 text-left transition",
                      active
                        ? "border-primary/55 bg-primary/10"
                        : "border-transparent hover:border-border hover:bg-surface/55"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition",
                        active
                          ? "border-primary/35 bg-primary/10 text-primary"
                          : "border-border bg-surface text-muted-foreground group-hover:text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold sm:text-base">{group.category}</span>
                      <span className="mt-1 block font-mono text-[0.64rem] text-muted-foreground">
                        {group.items.length} capabilities
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition",
                        active ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            aria-live="polite"
            aria-label={`${activeGroup.category} capabilities`}
            className="relative min-h-[500px] overflow-hidden rounded-lg border border-border bg-surface/72 p-6 shadow-elevated sm:p-9"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(180deg,black,transparent_88%)]" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeGroup.category}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="relative"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="mono-label">Active capability cluster</p>
                    <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                      {activeGroup.category}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {activeGroup.summary}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {activeGroup.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: Math.min(index * 0.025, 0.22) }}
                      className="flex min-h-14 items-center rounded-lg border border-border bg-background/68 px-3 py-2 font-mono text-[0.72rem] font-medium leading-5 text-foreground"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <Network className="h-4 w-4 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">
                      Connected to the full production lifecycle
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-success">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
