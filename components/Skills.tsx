import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A modern stack across cloud data platforms, RAG systems, LLM evaluation, and backend workflows."
        description="Here are the technologies I use to build reliable pipelines, analytics-ready datasets, production RAG systems, and AI agent evaluation workflows."
        align="center"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.category} className="surface rounded-xl p-5 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{group.category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
