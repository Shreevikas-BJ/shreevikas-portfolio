"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 72%"]
  });
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25
  });

  return (
    <section id="experience" className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Production systems, measured by the decisions they improve."
          description="My experience spans enterprise forecasting, RAG and agentic AI, model reliability, and manufacturing intelligence. Each role combines technical ownership with measurable operational outcomes."
        />

        <div ref={timelineRef} className="relative">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-border md:left-1/2" aria-hidden="true">
            <motion.span
              className="block h-full w-px origin-top bg-gradient-to-b from-primary via-secondary to-accent"
              style={{ scaleY: reduceMotion ? 1 : timelineProgress }}
            />
          </div>

          <div className="space-y-14 lg:space-y-20">
            {experiences.map((experience, index) => {
              const contentOnRight = index % 2 === 0;
              return (
                <motion.article
                  key={`${experience.company}-${experience.title}`}
                  initial={reduceMotion ? false : { opacity: 0, x: contentOnRight ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid gap-7 pl-10 md:grid-cols-2 md:gap-16 md:pl-0"
                >
                  <span
                    className="absolute left-[7px] top-8 z-10 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_5px_hsl(var(--primary)/0.12),0_0_18px_hsl(var(--glow)/0.6)] md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  />

                  <div
                    className={cn(
                      "md:pt-7",
                      contentOnRight ? "md:col-start-1 md:text-right" : "md:col-start-2 md:row-start-1"
                    )}
                  >
                    <p className="mono-label">Role {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{experience.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-primary">{experience.company}</p>
                    <div
                      className={cn(
                        "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground",
                        contentOnRight && "md:justify-end"
                      )}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-accent" />
                        {experience.dates}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-accent" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "rounded-lg border border-border bg-surface/70 p-6 shadow-elevated sm:p-8",
                      contentOnRight
                        ? "md:col-start-2 md:row-start-1"
                        : "md:col-start-1 md:row-start-1"
                    )}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <BriefcaseBusiness className="h-4 w-4 text-primary" />
                      Responsibility
                    </div>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      {experience.summary}
                    </p>

                    {experience.metrics?.length ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.metrics.map((metric) => (
                          <span key={metric} className="metric-chip">
                            {metric}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-7 border-t border-border/70 pt-6">
                      <p className="mono-label">Selected outcomes</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                        {experience.bullets.slice(0, 4).map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 border-t border-border/70 pt-5">
                      <p className="mono-label mb-3">Core technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.tags.slice(0, 9).map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
