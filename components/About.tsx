import { aboutHighlights, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Data engineer with a builder's view of cloud platforms and AI systems."
        description="Shreevikas combines production data engineering experience with applied AI infrastructure work: ingestion, transformation, quality, retrieval, serving, and observability."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface rounded-xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-muted-foreground">
            {siteConfig.name} is an AWS Certified Data Engineer and Master of Information
            Technology graduate from Illinois Institute of Technology. His work spans AWS,
            Snowflake, Databricks, Airflow, dbt Core, Kafka, Fivetran, PySpark, and RAG
            systems built with FAISS, FastAPI, embeddings, and structured validation patterns.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            He is focused on reliable cloud data platforms, analytics-ready datasets, and
            practical AI infrastructure that helps teams answer business and operational
            questions with grounded, governed data.
          </p>
        </div>

        <div className="grid gap-4">
          {aboutHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="surface rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{item.description}</p>
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
