"use client";

import {
  ArrowDown,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { achievementCards, heroStats, siteConfig } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-20 lg:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(31,193,188,0.16),transparent_36%),linear-gradient(290deg,rgba(245,176,65,0.13),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="max-w-3xl animate-rise-in">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Data Engineering + AI Infrastructure
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {siteConfig.location} | {siteConfig.availability}
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

          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              <ArrowDown className="h-4 w-4" />
              View Projects
            </ButtonLink>
            <Button asChild variant="outline">
              <a href="/Shreevikas_Bangalore_Jagadish_Resume.pdf">
                <FileText className="h-4 w-4" />
                View Resume
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href="/Shreevikas_Bangalore_Jagadish_Resume.pdf"
                download="Shreevikas_Bangalore_Jagadish_Resume.pdf"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <ButtonLink href={siteConfig.github} variant="outline" external>
              <Github className="h-4 w-4" />
              GitHub
            </ButtonLink>
            <ButtonLink href={siteConfig.linkedin} variant="outline" external>
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
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
        </div>

        <div className="relative animate-rise-in [animation-delay:120ms]">
          <div className="surface relative mx-auto max-w-md overflow-hidden rounded-2xl p-3 shadow-2xl shadow-primary/10">
            <div aria-hidden="true" className="absolute inset-x-3 top-3 z-10 h-24 rounded-t-xl bg-gradient-to-b from-black/25 to-transparent" />
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
        </div>
      </div>
    </section>
  );
}
