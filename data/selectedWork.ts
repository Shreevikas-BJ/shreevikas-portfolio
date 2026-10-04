import { projects, type Project, type ProjectFilter } from "@/data/portfolio";

type WorkDescription = {
  slug: string;
  discipline: string;
  description: string;
  flow: string[];
  outcome?: string;
};

const descriptions: WorkDescription[] = [
  {
    slug: "archpilot",
    discipline: "Agentic systems",
    description: "A multi-agent copilot that turns requirements into researched system architectures.",
    flow: ["Requirements", "Research", "JEV routing", "Local inference", "Architecture"],
    outcome: "I built a workflow that offers cost-effective, balanced, and high-performance architecture alternatives. Research, agent orchestration, persistence, and local inference are connected in one system. The project is not publicly deployed yet."
  },
  {
    slug: "agentshield",
    discipline: "AI safety / Evaluation",
    description: "Adversarial testing and regression reports for safer AI-agent launches.",
    flow: ["Agent", "Adversarial tests", "LLM judging", "Regression reports"],
    outcome: "I built a QA platform covering six agent failure modes and three scan levels. Interactive reports connect adversarial generation, Gemini-based judging, and regression testing so risks can be reviewed before launch."
  },
  {
    slug: "ai-ml-knowledge-rag-assistant",
    discipline: "Retrieval / Generative AI",
    description: "Citation-grounded retrieval with confidence gates and layered caching.",
    flow: ["Question", "Jina embeddings", "pgvector", "Similarity gate", "Cited answer"],
    outcome: "I evolved a local FAISS prototype into a lightweight serverless RAG system. Answers have clickable citations, low-similarity requests are refused, and exact, semantic, and embedding caches reduce repeated work. Latency observability makes the retrieval and generation path easier to evaluate."
  },
  {
    slug: "accord-procurement-ai",
    discipline: "Document AI / Decision systems",
    description: "Supplier-quote comparison with source evidence and human-controlled approvals.",
    flow: ["Documents", "Extraction", "Validation", "Comparison", "Human approval"],
    outcome: "I built a local prototype connecting document ingestion, editable quote review, deterministic supplier scoring, and audit snapshots. Independent extraction holdouts still show generalization limits. It is not ready for a buyer pilot; human review remains an explicit part of the workflow."
  },
  {
    slug: "ai-finops-copilot",
    discipline: "Cloud / Cost intelligence",
    description: "Read-only cloud-cost findings translated into owner-aware remediation plans.",
    flow: ["Cloud data", "Cost findings", "Prioritization", "Remediation plan"],
    outcome: "I connected deterministic cost findings to owner-aware savings plans, executive summaries, and ticket-ready recommendations. The workflow does not require AWS credentials and does not automatically modify cloud resources."
  },
  {
    slug: "databricks-lakeflow-medallion-pipeline",
    discipline: "Data engineering / Lakehouse",
    description: "A governed S3-to-Databricks pipeline from raw ingestion to analytical tables.",
    flow: ["AWS S3", "Bronze", "Silver", "Gold", "Analytics"],
    outcome: "I built Bronze, Silver, and Gold processing with full and incremental loads, Unity Catalog governance, and analytics-ready serving tables. The pipeline supports dashboards, parent-company reporting, and Databricks Genie exploration."
  }
];

export type SelectedWork = WorkDescription & { project: Project };

export const selectedWork: SelectedWork[] = descriptions.map((description) => {
  const project = projects.find((item) => item.slug === description.slug);
  if (!project) throw new Error(`Missing portfolio project: ${description.slug}`);
  return { ...description, project };
});

export const allWork: SelectedWork[] = projects.map((project) => {
  const selected = selectedWork.find((work) => work.slug === project.slug);
  return selected ?? {
    slug: project.slug,
    discipline: project.category,
    description: project.summary,
    flow: [],
    project
  };
});

const categories: { title: string; filters: ProjectFilter[] }[] = [
  { title: "Data Science / ML / MLOps", filters: ["Data Science & ML", "MLOps"] },
  { title: "GenAI / RAG / Agents", filters: ["RAG & GenAI", "AI Agents"] },
  { title: "Data Engineering", filters: ["Data Engineering"] },
  { title: "Analytics / Dashboards", filters: ["Analytics"] }
];

export const supportingWork = categories.map((category) => ({
  title: category.title,
  projects: allWork.filter((work) => (
    !selectedWork.some((selected) => selected.slug === work.slug)
    && category.filters.includes(work.project.filters[0])
  ))
}));

export function findWork(slug: string) {
  return allWork.find((work) => work.slug === slug);
}
