import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation in information technology management, computer science, and applied analytics."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.degree} className="premium-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-black">{item.degree}</h3>
                <p className="mt-1 font-semibold text-primary">{item.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
                <p className="mt-1 text-sm font-semibold">{item.dates}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
