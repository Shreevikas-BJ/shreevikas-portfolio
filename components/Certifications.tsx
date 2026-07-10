import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Certification that supports my cloud data engineering foundation."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification) => (
          <article key={certification.name} className="premium-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-black">{certification.name}</h3>
                <p className="mt-1 font-semibold text-primary">{certification.issuer}</p>
                <p className="mt-3 leading-7 text-muted-foreground">{certification.details}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
