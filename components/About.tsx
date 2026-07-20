"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutHighlights } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const lifecycle = ["Understand", "Engineer", "Model", "Evaluate", "Deploy", "Monitor"];

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeCapability = aboutHighlights[activeIndex];
  const ActiveIcon = activeCapability.icon;

  return (
    <section id="about" className="section-band-alt">
      <div className="section-shell">
        <SectionHeading
          eyebrow="01 / About"
          title="I connect machine intelligence with the data systems that make it dependable."
          description="My work sits where AI, data engineering, and scientific computing meet: understanding the real constraint, designing the right system, and validating it under production conditions."
        />

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="max-w-xl text-xl leading-9 text-foreground sm:text-2xl sm:leading-10">
              I am most interested in systems that move beyond a compelling demo and become
              useful, measurable, and maintainable products.
            </p>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              That means treating data quality, evaluation, latency, observability, and user
              decisions as part of the model itself. I enjoy moving between predictive modeling,
              retrieval systems, distributed processing, and GPU-accelerated research when the
              problem calls for it.
            </p>

            <div className="mt-10 border-l border-primary/50 pl-5">
              <p className="mono-label">Engineering lifecycle</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-xs font-semibold text-foreground">
                {lifecycle.map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    {item}
                    {index < lifecycle.length - 1 ? (
                      <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
            <div className="grid grid-cols-2 gap-3" role="group" aria-label="Engineering capabilities">
              {aboutHighlights.map((item, index) => {
                const Icon = item.icon;
                const active = activeIndex === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    aria-pressed={active}
                    onPointerEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "focus-ring group min-h-28 rounded-lg border p-4 text-left transition sm:min-h-32",
                      active
                        ? "border-primary/65 bg-primary/10 shadow-glow"
                        : "border-border bg-surface/55 hover:border-primary/35 hover:bg-surface"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5 transition",
                        active ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                      )}
                    />
                    <span className="mt-6 block text-sm font-semibold leading-5 sm:text-base">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-64 overflow-hidden rounded-lg border border-border bg-surface/72 p-6 sm:min-h-full">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary via-secondary to-transparent" />
              <p className="mono-label">Capability map</p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeCapability.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-10"
                >
                  <ActiveIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-5 text-2xl font-semibold">{activeCapability.title}</h3>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {activeCapability.description}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-5 left-6 right-6 h-px bg-border">
                <motion.span
                  className="block h-px origin-left bg-primary"
                  animate={{ scaleX: (activeIndex + 1) / aboutHighlights.length }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
