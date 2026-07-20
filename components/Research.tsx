import { Activity, ArrowDown, Cpu, Gauge, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { researchExperience } from "@/data/portfolio";

export function Research() {
  return (
    <section id="research" className="section-band-alt">
      <div className="section-shell">
        <SectionHeading
          eyebrow="03 / Research"
          title="Scientific machine learning for faster engineering simulation."
          description="My research explores physics-informed AI and neural operators as practical surrogate models for computationally expensive simulation workflows."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <Reveal>
            <p className="mono-label">{researchExperience.role}</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
              {researchExperience.organization}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {researchExperience.location} &middot; {researchExperience.dates}
            </p>
            <p className="mt-7 text-lg leading-9 text-foreground">
              {researchExperience.summary}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6">
              {researchExperience.capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div key={capability.label} className="border-l border-primary/45 pl-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold leading-6">{capability.label}</p>
                  </div>
                );
              })}
            </div>

            <ul className="mt-9 space-y-5 text-base leading-8 text-muted-foreground">
              {researchExperience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {researchExperience.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-lg border border-border bg-surface/76 shadow-elevated">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <p className="mono-label">Simulation-to-AI pipeline</p>
                  <p className="mt-1 text-sm font-semibold">Surrogate model workflow</p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold text-success">
                  <Activity className="h-3.5 w-3.5" /> GPU READY
                </span>
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="relative grid gap-2 sm:grid-cols-5 sm:items-center">
                  {researchExperience.pipeline.map((stage, index) => (
                    <div key={stage} className="contents">
                      <div className="rounded-lg border border-border bg-background/78 p-4 text-center">
                        <span className="font-mono text-[0.62rem] font-semibold text-primary">
                          0{index + 1}
                        </span>
                        <p className="mt-2 text-sm font-semibold leading-5">{stage}</p>
                      </div>
                      {index < researchExperience.pipeline.length - 1 ? (
                        <ArrowDown className="mx-auto h-4 w-4 text-primary sm:hidden" aria-hidden="true" />
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="relative mt-7 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-border bg-background/74 p-5">
                    <Cpu className="h-5 w-5 text-primary" />
                    <p className="mt-4 mono-label">Compute</p>
                    <p className="mt-2 text-sm font-semibold">CUDA acceleration</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/74 p-5">
                    <Zap className="h-5 w-5 text-accent" />
                    <p className="mt-4 mono-label">Runtime</p>
                    <p className="mt-2 text-sm font-semibold">ONNX + TensorRT</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/74 p-5">
                    <Gauge className="h-5 w-5 text-secondary" />
                    <p className="mt-4 mono-label">Output</p>
                    <p className="mt-2 text-sm font-semibold">Fast inference</p>
                  </div>
                </div>

                <div className="relative mt-6 border-t border-border pt-5">
                  <div className="flex items-center justify-between font-mono text-[0.68rem] text-muted-foreground">
                    <span>PHYSICS CONSTRAINTS PRESERVED</span>
                    <span className="text-success">INFERENCE PATH OPTIMIZED</span>
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                    <div className="signal-bar h-full w-[88%] rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
