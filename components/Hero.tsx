"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Award,
  CheckCircle2,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EngineeringFlow } from "@/components/EngineeringFlow";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";

const focusAreas = [
  "Production machine learning",
  "Trustworthy RAG systems",
  "Agentic AI workflows",
  "LLM evaluation and guardrails",
  "Physics-informed neural networks",
  "Cloud data platforms",
  "Real-time data engineering"
];

function FocusRotator() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % focusAreas.length),
      2800
    );
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="mt-7 flex min-h-8 items-center gap-3" aria-label="Current technical focus">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
        <Sparkles className="h-3.5 w-3.5" />
      </span>
      <div className="relative h-7 min-w-0 flex-1 overflow-hidden font-mono text-sm font-semibold text-primary sm:text-base">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={focusAreas[index]}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center"
          >
            {focusAreas[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

const socialLinks = [
  { href: siteConfig.github, label: "GitHub", icon: Github },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail }
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      <div className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--glow))]" />
            AI / ML &middot; Data &middot; Scientific Computing
          </p>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-[3.9rem]">
            {siteConfig.name}
          </h1>
          <p className="mt-4 font-mono text-sm font-semibold uppercase text-muted-foreground sm:text-base">
            AI/ML Engineer &middot; Data Scientist &middot; Data Engineer
          </p>

          <p className="mt-8 max-w-3xl text-3xl font-semibold leading-[1.16] text-balance sm:text-[2.45rem] lg:text-[2.7rem]">
            I build production AI systems that turn complex data into reliable decisions.
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            I bring 4+ years of experience across machine learning, advanced RAG,
            agentic AI, MLOps, scalable cloud pipelines, and physics-informed AI.
            My focus is practical engineering: systems that are measurable, observable,
            and ready to operate.
          </p>

          <FocusRotator />

          <div className="relative z-10 mt-9 flex flex-wrap gap-3 max-sm:pr-16">
            <ButtonLink href="#projects" className="group">
              Explore My Work
              <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="secondary" external>
              <FileText className="h-4 w-4" />
              View Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Contact Me
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
                <Image
                  src={siteConfig.profileImage}
                  alt="Professional portrait of Shreevikas Jagadish"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                  Open to engineering opportunities
                </p>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {siteConfig.location}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{siteConfig.relocation}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label}
                    title={link.label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <a
            href="https://www.credly.com/badges/017bc7a0-a378-4cfa-abb0-bc968c20d7da/public_url"
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md font-mono text-xs font-semibold text-muted-foreground transition hover:text-primary"
          >
            <Award className="h-4 w-4 text-accent" />
            AWS Certified Data Engineer - Associate
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="w-full min-w-0"
        >
          <EngineeringFlow />
        </motion.div>
      </div>
    </section>
  );
}
