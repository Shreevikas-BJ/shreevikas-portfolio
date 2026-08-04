"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  CheckCircle2,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";

const focusAreas = [
  "Industrial computer vision",
  "Agentic supply-chain automation",
  "Enterprise RAG",
  "Open-source LLM fine-tuning",
  "Document AI",
  "Production MLOps",
  "Scientific machine learning",
  "Cloud data platforms"
];

const socialLinks = [
  { href: siteConfig.github, label: "GitHub", icon: Github },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: siteConfig.emailHref, label: "Email", icon: Mail }
];

function FocusRotator() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % focusAreas.length),
      2600
    );
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="mt-7 flex min-h-9 items-center gap-3" aria-label="Current technical focus">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="relative h-8 min-w-0 flex-1 overflow-hidden text-base font-semibold text-primary sm:text-lg">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={focusAreas[index]}
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center"
          >
            {focusAreas[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero-section relative isolate overflow-hidden pt-16">
      <div className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-14 py-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          <p className="eyebrow">AI Engineer &middot; ML Engineer &middot; Data Scientist &middot; Data Engineer</p>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.98] text-balance sm:text-6xl lg:text-[4.8rem]">
            {siteConfig.name}
          </h1>
          <p className="mt-7 max-w-3xl text-3xl font-semibold leading-[1.12] text-balance sm:text-[2.7rem] lg:text-[3.1rem]">
            I build AI systems that see, reason, retrieve, and scale.
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            I bring 4+ years of experience architecting computer vision, machine learning,
            Generative AI, RAG, and MLOps systems for enterprise manufacturing.
          </p>

          <FocusRotator />

          <div className="relative z-10 mt-10 flex flex-wrap gap-3 max-sm:pr-14">
            <ButtonLink href="#projects" className="group">
              Explore My Work
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
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
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                {siteConfig.availability}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {siteConfig.location} &middot; {siteConfig.relocation}
                </p>
                <p className="inline-flex items-center gap-2 text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  AWS Certified Data Engineer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const external = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    aria-label={link.label}
                    title={link.label}
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface/55 text-muted-foreground transition hover:border-primary/45 hover:bg-surface hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hero-portrait-stage"
        >
          <Image
            src={siteConfig.profileImage}
            alt="Professional portrait of Shreevikas Jagadish"
            fill
            sizes="(max-width: 1024px) 92vw, 42vw"
            className="object-cover object-top"
            priority
          />
          <div className="hero-portrait-shade" aria-hidden="true" />

          <div className="absolute left-5 top-5 z-10 rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-white backdrop-blur-xl sm:left-7 sm:top-7">
            <p className="text-xs font-semibold text-white/65">CURRENT FOCUS</p>
            <p className="mt-1 text-sm font-semibold">Production AI systems</p>
          </div>

          <div className="absolute inset-x-5 bottom-5 z-10 grid grid-cols-2 gap-2 sm:inset-x-7 sm:bottom-7 sm:grid-cols-4">
            {["Vision", "Agents", "RAG", "MLOps"].map((label, index) => (
              <motion.div
                key={label}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.1, duration: 0.45 }}
                className="rounded-lg border border-white/15 bg-black/35 px-3 py-3 text-center text-sm font-semibold text-white backdrop-blur-xl"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
