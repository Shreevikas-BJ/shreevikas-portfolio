import { aboutHighlights, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="AI data engineer with a builder's view of cloud platforms, RAG systems, and agentic workflows."
        description="I combine production data engineering experience with applied AI infrastructure work: ingestion, transformation, retrieval, evaluation, observability, and launch readiness."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface rounded-xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-muted-foreground">
            I am {siteConfig.name}, an AI Data Engineer and AWS Certified Data Engineer
            with 2+ years of experience building production RAG systems, real-time data
            pipelines, cloud migrations, and analytics-ready datasets for business users.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            My work spans LangChain, LangGraph, LLM evaluation, data modeling, AWS,
            Databricks, Snowflake, Kafka, PySpark, Airflow, dbt Core, and agent guardrails
            for AI-ready data infrastructure.
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
