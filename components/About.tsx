import { aboutHighlights, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="AI/Data professional building across the full lifecycle from pipelines to intelligent applications."
        description="I work across data ingestion, transformation, machine learning, RAG systems, AI agents, model deployment, evaluation, monitoring, production APIs, and cloud infrastructure."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="data-panel p-6 sm:p-8">
          <div className="relative z-10">
            <p className="text-lg leading-8 text-muted-foreground">
              I am {siteConfig.name}, an AWS Certified Data Engineer and AI/Data
              professional with 3+ years of experience building production ML models,
              RAG systems, agentic AI workflows, and scalable cloud data pipelines.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I use Python, AWS, Snowflake, Databricks, PySpark, dbt, LangChain,
              and OpenAI Agents SDK to connect intelligent models with reliable
              cloud data infrastructure, measurable model quality, and production-ready
              APIs.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {aboutHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="premium-card p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
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
