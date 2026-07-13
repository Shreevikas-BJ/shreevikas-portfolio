import { aboutHighlights, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Data Scientist translating complex business challenges into scalable analytical solutions."
        description="I work across statistical modeling, predictive systems, machine learning, RAG, experimentation, model deployment, monitoring, and cloud-based analytics."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="data-panel p-7 sm:p-9">
          <div className="relative z-10">
            <p className="text-lg leading-9 text-muted-foreground">
              I am {siteConfig.name}, a Data Scientist with 4 years of experience
              translating complex business challenges into scalable analytical
              solutions using machine learning, statistical modeling, and cloud-based
              data platforms.
            </p>
            <p className="mt-7 text-lg leading-9 text-muted-foreground">
              I develop production-ready predictive systems, optimize large-scale
              data workflows, and deliver measurable operational improvements through
              robust model deployment, experimentation, and cross-functional
              collaboration in enterprise technology environments.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {aboutHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="premium-card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-base leading-8 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
