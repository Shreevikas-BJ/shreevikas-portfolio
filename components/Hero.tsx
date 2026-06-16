"use client";

import {
  ArrowRight,
  BrainCircuit,
  Database,
  FileText,
  Github,
  Layers3,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import Image from "next/image";
import { achievementCards, heroStats, siteConfig } from "@/data/portfolio";
import { RequestResumeButton } from "@/components/RequestResumeButton";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

const pipelineNodes = [
  { icon: Workflow, label: "Ingest", value: "Kafka / Fivetran" },
  { icon: Database, label: "Model", value: "dbt / Spark SQL" },
  { icon: Layers3, label: "Serve", value: "Snowflake / Databricks" },
  { icon: BrainCircuit, label: "Ground", value: "RAG / Vector Search" }
];

const reliabilitySignals = [
  "CDC + SCD Type-2 validation",
  "LLM evaluation and guardrails",
  "CloudWatch and failure monitoring"
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-20 lg:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,hsl(var(--primary)/0.18),transparent_42%),linear-gradient(290deg,hsl(var(--violet)/0.12),transparent_40%)]" />
        <div className="data-grid absolute inset-0 opacity-45" />
        <div className="data-flow absolute left-0 right-0 top-32 h-px opacity-80" />
        <div className="absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
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
            Building scalable data pipelines and AI-ready infrastructure for production teams.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I am {siteConfig.name}, an AI Data Engineer with 2+ years of experience
            building production RAG systems, real-time pipelines, agentic evaluation
            workflows, and cloud data platforms across AWS, Databricks, and Snowflake.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.roles.map((role) => (
              <Badge key={role}>{role}</Badge>
            ))}
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              <Mail className="h-4 w-4" />
              Contact Me
            </ButtonLink>
            <RequestResumeButton variant="secondary">
              <FileText className="h-4 w-4" />
              Request Resume
            </RequestResumeButton>
            <ButtonLink href={siteConfig.github} variant="outline" external>
              <Github className="h-4 w-4" />
              GitHub
            </ButtonLink>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-tile">
                <div className="text-2xl font-black text-primary">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-rise-in [animation-delay:120ms]">
          <div className="data-panel mx-auto max-w-xl p-3 shadow-2xl shadow-primary/10">
            <div className="relative z-10 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/30 to-transparent" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src={siteConfig.profileImage}
                    alt="Professional portrait of Shreevikas Jagadish"
                    fill
                    sizes="(max-width: 1024px) 88vw, 260px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="grid content-between gap-3">
                <div className="rounded-2xl border border-border/70 bg-background/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Platform Focus
                      </p>
                      <h2 className="mt-2 text-xl font-black">Data to AI systems</h2>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {pipelineNodes.map((node, index) => {
                      const Icon = node.icon;
                      return (
                        <div
                          key={node.label}
                          className="relative rounded-xl border border-border/60 bg-card/70 p-3"
                        >
                          {index < pipelineNodes.length - 1 ? (
                            <span
                              aria-hidden="true"
                              className="absolute left-6 top-full h-2 w-px bg-primary/50"
                            />
                          ) : null}
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                                {node.label}
                              </p>
                              <p className="text-sm font-black">{node.value}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    Reliability Signals
                  </p>
                  <div className="mt-3 grid gap-2">
                    {reliabilitySignals.map((signal) => (
                      <div key={signal} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {signal}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {achievementCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="premium-card rounded-xl p-4">
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
