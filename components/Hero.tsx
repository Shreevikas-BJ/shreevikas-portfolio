"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { achievementCards, heroStats, siteConfig } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Data Engineering + AI Infrastructure
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {siteConfig.location} · {siteConfig.availability}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-normal text-balance sm:text-5xl lg:text-6xl">
            Data Engineer building scalable cloud data platforms and AI-powered retrieval systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I am {siteConfig.name}, an AWS Certified Data Engineer and MS IT candidate
            building lakehouse pipelines, streaming workflows, RAG systems, and analytics-ready
            datasets for business, healthcare, and AI use cases.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.roles.map((role) => (
              <Badge key={role}>{role}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              <ArrowDown className="h-4 w-4" />
              View Projects
            </ButtonLink>
            <ButtonLink href={siteConfig.resumeUrl} variant="secondary" download>
              <Download className="h-4 w-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink href={siteConfig.github} variant="outline" external>
              <Github className="h-4 w-4" />
              GitHub
            </ButtonLink>
            <ButtonLink href={siteConfig.linkedin} variant="outline" external>
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="outline">
              <Mail className="h-4 w-4" />
              Contact Me
            </ButtonLink>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="surface rounded-lg p-4">
                <div className="text-2xl font-black text-primary">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="surface relative mx-auto max-w-md overflow-hidden rounded-2xl p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
              <Image
                src={siteConfig.profileImage}
                alt="Professional portrait of Shreevikas Bangalore Jagadish"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {achievementCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="surface rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Icon className="h-4 w-4 text-accent" />
                    {card.label}
                  </div>
                  <div className="mt-2 text-lg font-bold">{card.value}</div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{card.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
