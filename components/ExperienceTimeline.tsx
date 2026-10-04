"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 / Experience"
          title="AI engineering shaped by production outcomes."
          description="My experience spans enterprise RAG, LLM serving and fine-tuning, manufacturing ML, predictive maintenance, NLP, and cloud data pipelines."
        />

        <div className="divide-y divide-border/70 border-y border-border/70">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.title}`}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="grid min-w-0 gap-10 py-14 sm:py-16 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20 lg:py-20"
            >
              <header className="min-w-0 lg:sticky lg:top-28 lg:self-start">
                <p className="mono-label">Chapter {String(index + 1).padStart(2, "0")}</p>
                <h3 className="box-heading mt-4 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                  {experience.title}
                </h3>
                <p className="box-heading mt-3 text-xl font-semibold text-primary">{experience.company}</p>

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{experience.dates}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{experience.location}</span>
                  </p>
                </div>
              </header>

              <div className="min-w-0">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <BriefcaseBusiness className="h-4 w-4 text-primary" />
                  Role focus
                </div>
                <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground sm:text-xl sm:leading-9">
                  {experience.summary}
                </p>

                {experience.metrics?.length ? (
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {experience.metrics.map((metric) => (
                      <span key={metric} className="metric-chip">
                        {metric}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-10">
                  <p className="mono-label">Selected outcomes</p>
                  <ul className="mt-5 grid gap-5 text-base leading-8 text-muted-foreground xl:grid-cols-2 xl:gap-x-10">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex min-w-0 gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="min-w-0">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-border/60 pt-7">
                  <p className="mono-label mb-4">Core technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
