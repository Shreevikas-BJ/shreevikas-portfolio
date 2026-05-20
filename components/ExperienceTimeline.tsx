import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Experience across production data engineering, AI data pipelines, and scientific ML research."
        description="An ATS-readable timeline with verified roles, dates, locations, technologies, and impact-focused bullets."
      />

      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-border md:block" />
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.title}`} className="relative md:pl-12">
              <div className="absolute left-[9px] top-7 hidden h-3 w-3 rounded-full border-2 border-background bg-primary md:block" />
              <div className="surface rounded-xl p-6 transition hover:border-primary/40">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-xl font-black">{experience.title}</h3>
                    <p className="mt-1 font-semibold text-primary">{experience.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.location}</p>
                  </div>
                  <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-foreground dark:text-accent">
                    {experience.dates}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
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
