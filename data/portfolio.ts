import {
  Award,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Database,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const siteConfig = {
  name: "Shreevikas Jagadish",
  shortName: "Shreevikas",
  title: "Shreevikas Jagadish | AI Data Engineer & Data Engineer",
  description:
    "Portfolio of Shreevikas Jagadish, an AI Data Engineer and Data Engineer building production RAG systems, real-time data pipelines, cloud data platforms, analytics-ready datasets, and AI data infrastructure.",
  location: "Chicago, IL",
  availability: "Open to relocation",
  email: "shreevikasjagadish7@gmail.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=shreevikasjagadish7%40gmail.com&su=Portfolio%20Inquiry",
  phone: "312-358-3056",
  phoneHref: "tel:+13123583056",
  notificationEmail: "shreevikasj@gmail.com",
  github: "https://github.com/Shreevikas-BJ",
  linkedin: "https://www.linkedin.com/in/shreevikasbj/",
  profileImage: "/images/profile-picture.jpg",
  requestResumeMessage:
    "Thank you for your interest. For my latest resume, please reach out to me directly at shreevikasjagadish7@gmail.com.",
  roles: [
    "Data Engineer",
    "AI Data Engineer",
    "Data Infrastructure",
    "Analytics Engineering",
    "RAG / AI Infrastructure"
  ]
};

export const heroStats = [
  { label: "Experience", value: "2+ yrs" },
  { label: "Daily RAG queries", value: "500+" },
  { label: "Daily events", value: "5M+" },
  { label: "Cloud migration", value: "3TB+" }
];

export const aboutHighlights = [
  {
    icon: Database,
    title: "Cloud data platforms",
    description:
      "I build AWS, Databricks, Snowflake, Airflow, dbt, Kafka, Fivetran, and PySpark pipelines for batch, streaming, and analytics-ready workloads."
  },
  {
    icon: BrainCircuit,
    title: "RAG and AI infrastructure",
    description:
      "I build production RAG systems, vector search workflows, LLM evaluation patterns, agent guardrails, and agentic workflows for business users."
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description:
      "I focus on data modeling, CDC/SCD Type-2 validation, quality checks, observability, failure monitoring, and launch-readiness for AI systems."
  }
];

export const skills = [
  {
    category: "Data Engineering",
    icon: Workflow,
    items: ["PySpark", "Kafka", "Airflow", "dbt Core", "Fivetran", "ETL/ELT", "CDC", "SCD Type-2"]
  },
  {
    category: "Cloud & Warehouses",
    icon: Cloud,
    items: [
      "AWS S3",
      "AWS Glue",
      "AWS EMR",
      "AWS Lambda",
      "DynamoDB",
      "SageMaker",
      "Snowflake",
      "Redshift",
      "Databricks"
    ]
  },
  {
    category: "Lakehouse & Modeling",
    icon: Database,
    items: ["Delta Lake", "Unity Catalog", "Data Modeling", "Spark SQL", "Medallion Architecture"]
  },
  {
    category: "AI/ML Infrastructure",
    icon: BrainCircuit,
    items: [
      "RAG",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "AutoGen",
      "MCP",
      "FAISS",
      "pgvector",
      "Embeddings",
      "LLM Evaluation",
      "Agent Guardrails"
    ]
  },
  {
    category: "Data Quality & Reliability",
    icon: ShieldCheck,
    items: ["Great Expectations", "pytest", "Model Evaluation", "Feature Engineering", "CloudWatch"]
  },
  {
    category: "DevOps & BI",
    icon: BarChart3,
    items: ["Docker", "GitHub Actions", "REST APIs", "FastAPI", "Pydantic"]
  },
  {
    category: "Languages",
    icon: BriefcaseBusiness,
    items: ["Python", "SQL", "Spark SQL", "TypeScript", "Bash"]
  },
  {
    category: "LLM Providers",
    icon: Bot,
    items: [
      "OpenAI API",
      "Groq",
      "Gemini",
      "Jina",
      "Scikit-Learn",
      "XGBoost",
      "LightGBM"
    ]
  }
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  dates: string;
  tags: string[];
  metrics?: string[];
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    title: "AI Engineer Intern",
    company: "NeuralSeek",
    location: "Miami, FL (Remote)",
    dates: "Jul 2025 - Nov 2025",
    tags: ["LangChain", "RAG", "AWS Lambda", "S3", "DynamoDB", "MCP", "FastAPI"],
    metrics: ["4-member team", "10K+ docs", "500+ daily queries", "30% reliability gain"],
    bullets: [
      "I led a 4-member team to build LangChain RAG pipelines for 10K+ real estate documents, supporting 500+ daily queries for non-technical teams.",
      "I improved document upload reliability by 30% by building AWS Lambda, S3, DynamoDB, vector refresh, and MCP error-alert workflows.",
      "I reduced UI/API iteration time by 25% using Codex-assisted FastAPI, Pydantic, pytest, logging, and error handling.",
      "I improved RAG answer quality with retrieval thresholds, citation checks, fallback handling, and low-confidence response logs."
    ]
  },
  {
    title: "Data Engineer",
    company: "Whiterock Technologies",
    location: "Bengaluru, India",
    dates: "Aug 2022 - Apr 2024",
    tags: ["AWS", "Snowflake", "Airflow", "dbt", "Kafka", "PySpark", "SageMaker"],
    metrics: ["40% faster reporting", "200+ users", "5M daily events", "3TB+ migration"],
    bullets: [
      "I accelerated reporting by 40% for 200+ users by owning 12 AWS-to-Snowflake ELT pipelines with Airflow, dbt, and failure monitoring.",
      "I engineered near-real-time Kafka-to-Spark pipelines across 8 topics, processing about 5M daily events for active dashboards and analytics.",
      "I productionized 2 ML feature and batch inference pipelines with 98.8% uptime using PySpark, SageMaker, and CloudWatch.",
      "I spearheaded a 3TB+ Oracle-to-Snowflake migration across 50+ healthcare tables with CDC/SCD Type-2 validation and RBAC preservation."
    ]
  },
  {
    title: "Data Engineer Intern",
    company: "Whiterock Technologies",
    location: "Bengaluru, India",
    dates: "Feb 2022 - Jul 2022",
    tags: ["Python", "SQL", "Healthcare Data", "Reconciliation", "Deduplication"],
    metrics: ["Healthcare records", "Duplicate detection", "Migration accuracy"],
    bullets: [
      "I built SQL and Python reconciliation workflows to unify healthcare records, detect duplicates, and improve data quality for analysts.",
      "I improved migration accuracy through data matching, deduplication, and standardization checks before Snowflake loads."
    ]
  },
  {
    title: "Graduate Research Assistant",
    company: "Illinois Institute of Technology",
    location: "Chicago, IL",
    dates: "Dec 2025 - May 2026",
    tags: ["PINNs", "NVIDIA PhysicsNeMo", "CUDA", "GPU Inference", "Scientific Computing"],
    metrics: ["PhysicsNeMo", "CUDA inference", "Scientific modeling"],
    bullets: [
      "I explored Physics-Informed Neural Networks using NVIDIA PhysicsNeMo to model scientific systems with physics-based constraints.",
      "I integrated CUDA-accelerated GPU inference workflows for efficient large-scale scientific modeling and computation."
    ]
  }
];

export type ProjectCategory = "All" | "AI Infrastructure" | "AI/RAG" | "Data Engineering";

export const projectFilters: ProjectCategory[] = [
  "All",
  "AI Infrastructure",
  "AI/RAG",
  "Data Engineering"
];

export type Project = {
  title: string;
  slug: string;
  category: Exclude<ProjectCategory, "All">;
  featured?: boolean;
  highlightLabel?: string;
  summary: string;
  architecture: string;
  tech: string[];
  bullets: string[];
  repoUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "AgentShield",
    slug: "agentshield",
    category: "AI Infrastructure",
    featured: true,
    highlightLabel: "Featured AI Infrastructure",
    summary:
      "Multi-LLM QA and red-team platform for testing AI agents before launch across security, safety, compliance, and policy risks.",
    architecture:
      "Users define an agent, tools, system prompt, policy boundaries, and sample tasks. AgentShield generates normal and adversarial tests with Groq, simulates target-agent responses, evaluates failures, optionally reviews policy context with Gemini, optionally final-judges high-risk failures with OpenAI, persists traces in Supabase Postgres through Prisma, and surfaces launch-readiness metrics in dashboards.",
    tech: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel AI SDK",
      "Groq",
      "Gemini",
      "OpenAI",
      "Supabase Postgres",
      "Prisma",
      "Zod",
      "Recharts"
    ],
    bullets: [
      "I built a multi-LLM evaluation workflow for normal, edge, adversarial, tool-safety, privacy, and policy test cases.",
      "I added deterministic mock fallbacks, JSON validation and repair, model-call tracing, and auditable persistence for tests, runs, failures, and reports.",
      "I created observability dashboards for pass/fail rates, risk categories, provider usage, API latency, token estimates, and launch readiness."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/agentshield"
  },
  {
    title: "AI/ML Knowledge RAG Assistant",
    slug: "ml-course-document-rag",
    category: "AI/RAG",
    featured: true,
    highlightLabel: "Featured RAG System",
    summary:
      "Production-ready RAG assistant for AI/ML document Q&A using Next.js, Supabase pgvector, Jina embeddings, and Groq.",
    architecture:
      "AI/ML documents are embedded with Jina, stored in Supabase pgvector, retrieved with similarity validation, trimmed into concise context, and answered with Groq using citations, refusal handling, performance telemetry, caching, and response controls.",
    tech: [
      "Next.js",
      "Supabase pgvector",
      "Jina Embeddings",
      "Groq",
      "RAG",
      "Citations",
      "Telemetry",
      "Query Caching"
    ],
    bullets: [
      "I optimized retrieval with query caching, context trimming, and response controls to reduce latency and token usage.",
      "I added citations, similarity validation, refusal handling, and performance telemetry to improve trust and observability.",
      "I built the system for document-grounded AI/ML learning workflows instead of unsupported general answers."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/ml-course-document-rag"
  },
  {
    title: "Databricks Lakeflow Medallion Pipeline",
    slug: "databricks-lakeflow-medallion-pipeline",
    category: "Data Engineering",
    featured: true,
    highlightLabel: "Featured Data Platform",
    summary:
      "End-to-end Databricks Medallion pipeline using S3, Lakeflow Jobs, PySpark, Unity Catalog, and Delta tables.",
    architecture:
      "Raw data lands in S3 and moves through Databricks Lakeflow Jobs into Bronze, Silver, and Gold layers with Delta versioning and Unity Catalog governance, producing Gold-layer datasets for dashboards, SQL Analytics, and Databricks Genie-powered insights.",
    tech: [
      "Databricks",
      "Lakeflow Jobs",
      "Amazon S3",
      "PySpark",
      "Unity Catalog",
      "Delta Lake",
      "Medallion Architecture"
    ],
    bullets: [
      "I built full-load and incremental ETL workflows across Bronze, Silver, and Gold lakehouse layers.",
      "I modeled governed Gold-layer datasets for dashboards, SQL Analytics, and Databricks Genie-powered insights.",
      "I used S3, Delta tables, PySpark, Lakeflow Jobs, and Unity Catalog for end-to-end cloud data platform delivery."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline"
  }
];

export const certifications = [
  {
    name: "AWS Certified Data Engineer",
    issuer: "Amazon Web Services",
    status: "Certified",
    credentialUrl: "https://www.credly.com/badges/017bc7a0-a378-4cfa-abb0-bc968c20d7da/public_url"
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    status: "Certified",
    credentialUrl: "https://verify.skilljar.com/c/trqe8ntip7c5"
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    status: "Certified",
    credentialUrl: "https://verify.skilljar.com/c/4j4imquzxb8p"
  },
  {
    name: "Google Data Analytics Certificate",
    issuer: "Google / Coursera",
    status: "Certified",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/TIT1TAQNFGPT"
  }
];

export const education = [
  {
    degree: "Master of Information Technology",
    school: "Illinois Institute of Technology",
    location: "Chicago, IL",
    dates: "Aug 2024 - May 2026",
    details: [
      "Graduate foundation across information technology, cloud data engineering, analytics engineering, and AI data infrastructure."
    ]
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Visvesvaraya Technological University",
    location: "Bengaluru, India",
    dates: "Jul 2019 - Aug 2023",
    details: [
      "Computer science foundation for software engineering, data systems, machine learning, and applied analytics."
    ]
  }
];

export const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    icon: Mail
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone
  },
  {
    label: "Location",
    value: `${siteConfig.location} - ${siteConfig.availability}`,
    href: "",
    icon: MapPin
  },
  {
    label: "GitHub",
    value: "Shreevikas-BJ",
    href: siteConfig.github,
    icon: Sparkles
  },
  {
    label: "LinkedIn",
    value: "shreevikasbj",
    href: siteConfig.linkedin,
    icon: LineChart
  }
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const suggestedQuestions = [
  "What is Shreevikas's data engineering experience?",
  "Tell me about his AI/RAG projects.",
  "What cloud and pipeline tools has he used?",
  "How can I request his resume?"
];

export const achievementCards = [
  {
    icon: Award,
    label: "Certified",
    value: "AWS Data Engineer",
    text: "Cloud data engineering credential aligned with hands-on AWS pipeline work."
  },
  {
    icon: Database,
    label: "Pipelines",
    value: "Kafka + Spark",
    text: "I build real-time and batch pipelines for dashboards, analytics, and AI-ready datasets."
  },
  {
    icon: GraduationCap,
    label: "AI Systems",
    value: "RAG + Agent Evals",
    text: "I build retrieval systems, LLM evaluation workflows, and guardrails for AI infrastructure."
  }
];
