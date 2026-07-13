import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A practical stack for predictive modeling, statistical learning, RAG, MLOps, and cloud analytics."
        description="Here are the technologies I use to prepare data, train and validate models, deploy predictive services, monitor performance, and communicate analytical results."
        align="center"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.category} className="premium-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Skill Cluster
                  </p>
                  <h3 className="mt-1 text-lg font-black">{group.category}</h3>
                </div>
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
