import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Experience delivering predictive systems, AI engineering, production ML, and decision intelligence."
        description="A snapshot of my work across demand forecasting, RAG and agentic AI, ML reliability, manufacturing quality intelligence, statistical analysis, and cloud-based analytical delivery."
      />

      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:block" />
        <div className="space-y-8">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.title}`} className="relative md:pl-12">
              <div className="absolute left-[5px] top-8 hidden h-5 w-5 rounded-full border border-primary/50 bg-background p-1 md:block">
                <span className="block h-full w-full rounded-full bg-primary shadow-glow" />
              </div>
              <div className="premium-card p-7 sm:p-9">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-black">{experience.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-primary">{experience.company}</p>
                    <p className="mt-2 text-base text-muted-foreground">{experience.location}</p>
                  </div>
                  <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-foreground dark:text-accent">
                    {experience.dates}
                  </span>
                </div>

                {experience.metrics?.length ? (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {experience.metrics.map((metric) => (
                      <div key={metric} className="stat-tile py-3">
                        <p className="text-sm font-black text-foreground">{metric}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {experience.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <ul className="mt-7 space-y-4 text-base leading-8 text-muted-foreground">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
