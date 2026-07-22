import { ArrowUpRight, Award, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications, education } from "@/data/portfolio";

export function Credentials() {
  return (
    <section id="education" className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="06 / Credentials"
          title="Formal study and cloud data engineering certification."
          description="My academic foundation spans information technology management and computer science, supported by an AWS data engineering credential."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {certifications.map((certification) => {
            const Icon = certification.icon;
            return (
              <Reveal key={certification.name} className="h-full">
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-card focus-ring group flex h-full min-h-72 flex-col p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-8 mono-label">Certification</p>
                  <h3 className="box-heading mt-3 text-xl font-semibold leading-7">{certification.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{certification.issuer}</p>
                  <span className="mt-auto pt-8 font-mono text-xs font-semibold text-primary">
                    View credential
                  </span>
                </a>
              </Reveal>
            );
          })}

          {education.map((item, index) => (
            <Reveal key={item.degree} delay={(index + 1) * 0.06} className="h-full">
              <article className="premium-card flex h-full min-h-72 flex-col p-7 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="mt-8 mono-label">Education</p>
                <h3 className="box-heading mt-3 text-xl font-semibold leading-7">{item.degree}</h3>
                <p className="box-heading mt-3 font-semibold text-primary">{item.school}</p>
                <div className="mt-auto space-y-2 pt-8 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    {item.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-accent" />
                    {item.dates}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 border-t border-border/70 pt-6 font-mono text-xs text-muted-foreground">
          <Award className="h-4 w-4 text-primary" />
          Learning across applied AI, data systems, and engineering leadership.
        </div>
      </div>
    </section>
  );
}
