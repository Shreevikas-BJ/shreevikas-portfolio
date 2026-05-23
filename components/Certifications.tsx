import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials aligned with data engineering, analytics, and cloud data platforms."
        description="Certifications that support my foundation in analytics, cloud, and data engineering."
        align="center"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification) => (
          <article key={certification.name} className="surface flex h-full flex-col rounded-xl p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent-foreground dark:text-accent">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-black">{certification.name}</h3>
            <p className="mt-2 text-sm font-semibold text-primary">{certification.issuer}</p>
            <p className="mt-2 text-sm text-muted-foreground">{certification.status}</p>
            <div className="mt-auto pt-6">
              <ButtonLink href={certification.credentialUrl} variant="outline" external>
                View Credential
                <ExternalLink className="h-4 w-4" />
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
