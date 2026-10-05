import {
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  Cpu,
  FlaskConical,
  Gauge,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const siteConfig = {
  name: "Shreevikas Jagadish",
  shortName: "Shreevikas",
  initials: "SJ",
  title: "Shreevikas Jagadish | AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Shreevikas Jagadish, an AI/ML Engineer building production ML, agentic AI, RAG, predictive models, and cloud data systems. Explore ArchPilot, AgentShield, and Accord Procurement AI.",
  summary:
    "I am an AI/ML Engineer building production ML, agentic AI, RAG, predictive modeling, and data systems. I take AI products from idea to deployment and iterate based on customer and user feedback, working with Python, PyTorch, LangGraph, FastAPI, Spark, AWS, and MLOps.",
  location: "United States",
  availability: "Open to AI Engineering, Machine Learning, Data Science, and Data Engineering roles",
  relocation: "Open to relocation",
  email: "shreevikasjagadish7@gmail.com",
  emailHref: "mailto:shreevikasjagadish7@gmail.com?subject=Portfolio%20Inquiry",
  phone: "+1 (312) 358-3056",
  phoneHref: "tel:+13123583056",
  github: "https://github.com/Shreevikas-BJ",
  linkedin: "https://www.linkedin.com/in/shreevikasbj/",
  portfolio: "https://shreevikas-portfolio.vercel.app/",
  profileImage: "/images/profile-picture.jpg",
  resumePath: "/Shreevikas_Jagadish_Resume.pdf",
  resumeFileName: "Shreevikas_Jagadish_Resume.pdf",
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Data Engineer"
  ]
};

type HeroStat = {
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
  context: string;
};

export const heroStats: HeroStat[] = [
  {
    value: 40,
    suffix: "%",
    label: "Faster support resolution",
    context: "Enterprise RAG at NeuralSeek"
  },
  {
    value: 35,
    suffix: "%",
    label: "Less compliance effort",
    context: "LLM fine-tuning at NeuralSeek"
  },
  {
    value: 22,
    suffix: "%",
    label: "Better defect detection",
    context: "Manufacturing ML at Whiterock"
  },
  {
    value: 98.8,
    suffix: "%",
    decimals: 1,
    label: "Pipeline uptime",
    context: "AWS ML workflows at Whiterock"
  },
  {
    value: 45,
    suffix: "%",
    label: "Faster data preparation",
    context: "12 ELT pipelines at Whiterock"
  }
];

export const aboutHighlights = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Defect detection, forecasting, predictive maintenance, NLP, feature engineering, and model optimization."
  },
  {
    icon: Bot,
    title: "Generative AI",
    description:
      "Enterprise RAG, multi-agent architecture design, LLM fine-tuning, evaluation, and guardrails."
  },
  {
    icon: Gauge,
    title: "MLOps",
    description:
      "Concurrent LLM serving, token optimization, local inference, model deployment, monitoring, and CI/CD."
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    description:
      "Feature stores, batch and streaming pipelines, lakehouse patterns, quality, and orchestration."
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description:
      "AWS, Databricks, Snowflake, Azure, and GCP systems built for governed scale."
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Decision intelligence, statistical analysis, experimentation, and executive reporting."
  },
  {
    icon: FlaskConical,
    title: "Scientific AI",
    description:
      "Physics-informed neural networks, power-system dynamics, simulation, and time-series modeling."
  }
];

export const skills = [
  {
    category: "AI & Generative AI",
    icon: Bot,
    summary: "Grounded systems that can retrieve, reason, evaluate, and refuse safely.",
    items: [
      "LLMs",
      "RAG",
      "Advanced RAG",
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "PydanticAI",
      "JEV",
      "OpenAI SDK",
      "CrewAI",
      "Hugging Face",
      "Transformers",
      "GPT-4o",
      "Gemini API",
      "Embeddings",
      "Reranking",
      "PEFT / LoRA / QLoRA",
      "PEFT",
      "LoRA",
      "QLoRA",
      "Prompt Engineering",
      "Agentic AI",
      "LLM Evaluation",
      "Guardrails",
      "OpenAI Agents SDK",
      "Function & Tool Calling",
      "Tool Calling",
      "Whisper ASR",
      "MCP"
    ]
  },
  {
    category: "Machine Learning",
    icon: BrainCircuit,
    summary: "Predictive and statistical learning from experimentation through evaluation.",
    items: [
      "Python",
      "Scikit-Learn",
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "LightGBM",
      "Logistic Regression",
      "Isolation Forest",
      "Classification",
      "Regression",
      "Clustering",
      "Forecasting",
      "Recommendation Systems",
      "Anomaly Detection",
      "Feature Engineering",
      "Model Optimization",
      "AUC-ROC",
      "F1 Score",
      "PCA",
      "Time-Series Forecasting",
      "Hyperparameter Tuning",
      "BERT",
      "spaCy"
    ]
  },
  {
    category: "Computer Vision & Document AI",
    icon: Cpu,
    summary: "Visual inspection and document understanding for high-throughput enterprise workflows.",
    items: [
      "OpenCV",
      "Convolutional Neural Networks",
      "PaddleOCR",
      "PyMuPDF",
      "Tesseract",
      "EasyOCR",
      "PDF Parsing",
      "Regex Field Extraction",
      "CUDA Acceleration"
    ]
  },
  {
    category: "Scientific AI",
    icon: FlaskConical,
    summary: "GPU-accelerated surrogate models for scientific and engineering simulation.",
    items: [
      "NVIDIA PhysicsNeMo",
      "Fourier Neural Operators",
      "Physics-Informed ML",
      "Surrogate Modeling",
      "CUDA",
      "ONNX",
      "TensorRT",
      "GPU Inference",
      "Scientific Computing",
      "Physics-Informed Neural Networks",
      "Power-System Dynamics",
      "Time-Series Modeling"
    ]
  },
  {
    category: "Data Engineering",
    icon: Workflow,
    summary: "Governed data products across batch, streaming, warehouse, and lakehouse systems.",
    items: [
      "SQL",
      "PySpark",
      "Apache Spark",
      "Kafka",
      "Flink",
      "Airflow",
      "dbt",
      "Databricks",
      "Snowflake",
      "Delta Lake",
      "Feature Stores",
      "ETL / ELT",
      "Batch Processing",
      "Streaming Pipelines",
      "Data Quality",
      "Data Modeling",
      "Medallion Architecture",
      "Pydantic",
      "Async Python"
    ]
  },
  {
    category: "MLOps & Deployment",
    icon: ServerCog,
    summary: "Observable, versioned ML services designed for repeatable production releases.",
    items: [
      "MLflow",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Model Serving",
      "Model Monitoring",
      "CI/CD",
      "GitHub Actions",
      "Drift Monitoring",
      "A/B Testing",
      "LangSmith",
      "Azure ML",
      "Terraform"
    ]
  },
  {
    category: "Cloud & Data Platforms",
    icon: Cloud,
    summary: "Cloud-native compute, storage, orchestration, warehousing, and observability.",
    items: [
      "AWS",
      "Databricks",
      "Snowflake",
      "GCP",
      "Azure",
      "PostgreSQL",
      "Supabase",
      "BigQuery",
      "S3",
      "Lambda",
      "Glue",
      "SageMaker",
      "CloudWatch",
      "Redshift",
      "SQL Server",
      "Oracle",
      "MySQL",
      "MongoDB",
      "EC2"
    ]
  },
  {
    category: "Analytics & Decision Intelligence",
    icon: BarChart3,
    summary: "Clear analytical narratives that turn model output into decisions.",
    items: [
      "Power BI",
      "Tableau",
      "Plotly",
      "Matplotlib",
      "Statistical Analysis",
      "A/B Testing",
      "Pandas",
      "NumPy",
      "R",
      "REST APIs",
      "Seaborn",
      "Alteryx",
      "ServiceNow",
      "Excel",
      "Jira",
      "Agile / Scrum"
    ]
  },
  {
    category: "Retrieval & LLM Infrastructure",
    icon: ServerCog,
    summary: "Efficient retrieval and inference with grounded context and controlled token usage.",
    items: [
      "PostgreSQL", "pgvector", "Embeddings", "Semantic Search", "Metadata Filtering",
      "vLLM", "llama.cpp", "Context / Token Optimization", "Local LLM Inference",
      "FAISS", "ChromaDB", "Jina Embeddings"
    ]
  },
  {
    category: "Programming",
    icon: Cpu,
    summary: "Languages I use to build AI services, data workflows, and product interfaces.",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "Bash", "PowerShell"]
  },
  {
    category: "Frontend & Testing",
    icon: ShieldCheck,
    summary: "Product interfaces and automated checks across APIs and user workflows.",
    items: ["React", "Next.js", "Tailwind CSS", "Zod", "Pytest", "Vitest", "Playwright"]
  }
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
  tags: string[];
  metrics?: string[];
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    title: "AI Engineer Intern",
    company: "NeuralSeek",
    location: "United States",
    dates: "Jul 2025 - Nov 2025",
    summary:
      "I translated HR and IT stakeholder requirements into enterprise RAG, tuned concurrent LLM serving, and fine-tuned open-source models for grounded compliance analysis.",
    tags: ["RAG", "Open-Source Embeddings", "PostgreSQL", "pgvector", "Metadata Filtering", "vLLM", "AWS", "PEFT", "QLoRA"],
    metrics: [
      "40% faster support resolution",
      "35% less compliance-analysis effort"
    ],
    bullets: [
      "I reduced IT and HR support resolution time by 40% by interviewing non-technical stakeholders and building enterprise RAG with open-source embeddings, PostgreSQL, pgvector, and metadata-filtered retrieval.",
      "I improved concurrent LLM serving with vLLM, tuning retrieval thresholds, context windows, token budgets, and generation parameters to increase throughput and reduce unnecessary token usage.",
      "I reduced manual compliance-analysis effort by 35% by fine-tuning an open-source LLM on AWS with PEFT and QLoRA for structured, grounded responses with retrieval context, citations, and validation."
    ]
  },
  {
    title: "Data Scientist (AI/ML)",
    company: "Whiterock",
    location: "India",
    dates: "Feb 2022 - Jul 2024",
    summary:
      "I built manufacturing ML, forecasting, predictive maintenance, NLP, and reliable cloud data pipelines in partnership with operations stakeholders.",
    tags: ["Scikit-Learn", "PySpark", "AWS SageMaker", "CloudWatch", "LightGBM", "PCA", "Anomaly Detection", "BERT", "spaCy", "Snowflake", "Airflow", "dbt"],
    metrics: [
      "22% better defect-detection accuracy",
      "98.8% pipeline uptime",
      "20K+ reviews / ~89% F1",
      "45% faster data preparation",
      "40% better reporting performance"
    ],
    bullets: [
      "I improved manufacturing defect-detection accuracy by 22% while maintaining 98.8% pipeline uptime by deploying Scikit-Learn and PySpark ML workflows on AWS SageMaker with CloudWatch monitoring.",
      "I gathered requirements with manufacturing and operations teams, then developed time-series forecasting and predictive-maintenance models using LightGBM, PCA, and anomaly detection for demand and equipment telemetry.",
      "I built a BERT and spaCy sentiment pipeline processing 20K+ customer reviews, achieving approximately 89% F1 across positive, neutral, and negative classes and extracting recurring product themes.",
      "I reduced data-preparation time by 45% and improved reporting performance by 40% for 200+ users by operating 12 AWS-to-Snowflake ELT pipelines with Airflow and dbt."
    ]
  }
];

export const researchExperience = {
  title: "Physics-Informed AI for Power-System Dynamics",
  role: "Graduate Research Assistant",
  organization: "Illinois Institute of Technology",
  location: "United States",
  summary:
    "I researched Physics-Informed Neural Networks for power-system dynamics, combining scientific machine learning with simulation and time-series modeling.",
  highlights: [
    "I used PyTorch and NVIDIA PhysicsNeMo to research Physics-Informed Neural Networks for power-system dynamics.",
    "I worked with CUDA-accelerated simulation and time-series workflows."
  ],
  capabilities: [
    { icon: FlaskConical, label: "Physics-informed AI" },
    { icon: BrainCircuit, label: "Power-system dynamics" },
    { icon: Cpu, label: "GPU acceleration" },
    { icon: Gauge, label: "Time-series modeling" }
  ],
  pipeline: [
    "Physics simulation",
    "Training data",
    "PINN training",
    "CUDA workflows",
    "Power-system modeling"
  ],
  technologies: [
    "PyTorch",
    "NVIDIA PhysicsNeMo",
    "CUDA",
    "Physics-Informed Neural Networks",
    "Power-System Dynamics",
    "Time-Series Modeling",
    "Scientific Computing"
  ]
};

export const certifications = [
  {
    name: "AWS Certified Data Engineer - Associate",
    issuer: "Amazon Web Services",
    logo: { src: "/images/certifications/aws.png", width: 59, height: 35 },
    credentialUrl:
      "https://www.credly.com/badges/017bc7a0-a378-4cfa-abb0-bc968c20d7da/public_url",
    icon: ShieldCheck
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    logo: { src: "/images/certifications/anthropic.svg", width: 92, height: 64 },
    credentialUrl: undefined,
    icon: BrainCircuit
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    logo: { src: "/images/certifications/google.svg", width: 74, height: 24 },
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/TIT1TAQNFGPT",
    icon: BarChart3
  }
];

export type ProjectFilter =
  | "All"
  | "AI Agents"
  | "RAG & GenAI"
  | "Data Science & ML"
  | "Data Engineering"
  | "MLOps"
  | "Analytics";

export const projectFilters: ProjectFilter[] = [
  "All",
  "AI Agents",
  "RAG & GenAI",
  "Data Science & ML",
  "Data Engineering",
  "MLOps",
  "Analytics"
];

export type ProjectCategory =
  | "Agentic AI / System Architecture"
  | "Document AI / Procurement / Decision Intelligence"
  | "AI / Computer Vision / Quality Intelligence"
  | "Document AI / Enterprise Search"
  | "Data Science / Forecasting / MLOps"
  | "Data Science / Manufacturing Intelligence"
  | "GenAI / RAG / Enterprise Search"
  | "AI Agents / AI Safety / LLM Evaluation"
  | "AI / Cloud Analytics / FinOps"
  | "RAG / Generative AI / Vector Search"
  | "Data Engineering / Databricks / AWS"
  | "Data Engineering / Snowflake / dbt"
  | "Data Science / MLOps"
  | "Data Science / Customer Analytics"
  | "Data Engineering / Streaming"
  | "AI Agents / RAG"
  | "GenAI / RAG"
  | "Computer Vision / Deep Learning"
  | "NLP / Deep Learning"
  | "Data Science / Classification"
  | "Data Science / Time Series"
  | "Business Intelligence / Dashboarding"
  | "SQL / Analytics";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  filters: ProjectFilter[];
  featured?: boolean;
  featuredOrder?: number;
  highlightLabel?: string;
  problem?: string;
  solution?: string;
  visual?: "forecast" | "shield" | "finops" | "rag" | "medallion" | "lineage" | "vision" | "document" | "architecture" | "procurement";
  summary: string;
  architecture: string;
  tech: string[];
  bullets: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "ArchPilot",
    slug: "archpilot",
    category: "Agentic AI / System Architecture",
    filters: ["AI Agents", "RAG & GenAI"],
    featured: true,
    featuredOrder: 1,
    highlightLabel: "Agentic Architecture Copilot",
    problem: "Application requirements need to be translated into architecture choices with clear cost and performance trade-offs.",
    solution: "A multi-agent system-design copilot that researches current tools and recommends cost-effective, balanced, and high-performance architectures.",
    visual: "architecture",
    summary: "Multi-agent architecture copilot turning application requirements and current technology research into practical system designs.",
    architecture: "Next.js and TypeScript capture requirements. FastAPI and PydanticAI orchestrate research and agents through the JEV System One decision model, persist results in PostgreSQL, and use GPU-accelerated local inference with a 27B quantized LLM through llama.cpp.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PydanticAI", "JEV System One", "PostgreSQL", "llama.cpp", "Local LLMs"],
    bullets: [
      "I built a multi-agent copilot that converts application requirements into cost-effective, balanced, and high-performance designs.",
      "I used deep web research on current tools and technologies to inform architecture recommendations.",
      "I engineered FastAPI and PydanticAI orchestration with JEV routing, PostgreSQL persistence, and a GPU-accelerated 27B quantized local LLM."
    ]
  },
  {
    title: "Accord Procurement AI",
    slug: "accord-procurement-ai",
    category: "Document AI / Procurement / Decision Intelligence",
    filters: ["AI Agents", "RAG & GenAI", "Analytics"],
    featured: true,
    featuredOrder: 4,
    highlightLabel: "Human-in-the-Loop Procurement",
    problem: "Supplier quotes arrive in different formats, making price, delivery, and evidence comparisons difficult to audit.",
    solution: "A local procurement workspace that extracts quotations, compares suppliers with deterministic rules, and records human review and approval.",
    visual: "procurement",
    summary: "Local AI procurement prototype for supplier quote comparison, source-evidence review, price and delivery risks, and auditable buyer decisions.",
    architecture: "A Next.js interface connects to FastAPI, PostgreSQL, and Redis/RQ document workers. PDF, spreadsheet, CSV, and OCR parsers feed Pydantic-validated extraction; optional local Qwen inference uses Ollama. Python Decimal calculations drive comparison and scoring, with human review, tenant isolation, and audit snapshots. Extraction generalization remains under evaluation; the prototype is not ready for a buyer pilot.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Pydantic", "PostgreSQL", "Redis / RQ", "Ollama", "Tesseract", "Docker"],
    bullets: [
      "I built document ingestion, editable quote review with source evidence, supplier comparisons, and price and delivery alerts.",
      "I kept monetary calculations, eligibility, scoring, and approvals in a deterministic Python engine with human decision controls.",
      "I added local inference, tenant-scoped access, audit trails, and document-reliability evaluation; independent holdouts still show generalization limits."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/accord-procurement-ai"
  },
  {
    title: "Autonomous Industrial Quality Assurance & Defect Intelligence System",
    slug: "autonomous-industrial-quality-assurance",
    category: "AI / Computer Vision / Quality Intelligence",
    filters: ["Data Science & ML", "MLOps"],
    featured: false,
    highlightLabel: "Industrial Computer Vision",
    problem:
      "High-speed manufacturing lines make manual inspection expensive and delay the discovery of packaging defects.",
    solution:
      "A CUDA-accelerated computer vision system that performs real-time defect detection and production quality intelligence at industrial throughput.",
    visual: "vision",
    summary:
      "Production computer vision platform for high-throughput packaging inspection, rapid defect detection, and quality decision support.",
    architecture:
      "The system uses Python, OpenCV, PyTorch, Docker, and AWS SageMaker to process visual inspection streams at more than 500 frames per second and deliver production-ready defect intelligence.",
    tech: ["Python", "OpenCV", "PyTorch", "CUDA", "Docker", "AWS SageMaker"],
    bullets: [
      "I built a real-time inspection workflow operating at more than 500 frames per second.",
      "I reduced packaging defect leakage by 32% through automated visual quality checks.",
      "I delivered $850K in scrap savings through earlier, more reliable defect detection."
    ]
  },
  {
    title: "Intelligent Inventory Demand Forecasting Platform",
    slug: "intelligent-inventory-demand-forecasting",
    category: "Data Science / Forecasting / MLOps",
    filters: ["Data Science & ML", "MLOps", "Analytics"],
    featured: false,
    highlightLabel: "Production Forecasting",
    problem:
      "Regional inventory planning becomes unreliable when demand signals are fragmented and model releases are slow.",
    solution:
      "A scalable forecasting platform that combines distributed feature processing, tracked experiments, validation, and API-based delivery.",
    visual: "forecast",
    summary:
      "Production demand forecasting platform for multi-regional inventory planning, model tracking, validation, and API-based forecast delivery.",
    architecture:
      "The platform uses PySpark and XGBoost for scalable forecasting, MLflow for experiment tracking and validation, FastAPI for model serving, and AWS pipelines for automated training and release workflows.",
    tech: ["Python", "PySpark", "XGBoost", "MLflow", "FastAPI", "AWS"],
    bullets: [
      "I improved forecast accuracy by 21% across multi-regional inventory patterns.",
      "I supported product-level replenishment planning with scalable forecasting workflows.",
      "I reduced model release cycles by 35% through automated training, tracking, validation, and deployment."
    ]
  },
  {
    title: "Manufacturing Process Quality Intelligence System",
    slug: "manufacturing-process-quality-intelligence",
    category: "Document AI / Enterprise Search",
    filters: ["RAG & GenAI", "Data Science & ML", "Analytics"],
    featured: false,
    highlightLabel: "Document Intelligence",
    problem:
      "Layout-heavy legal and vendor contracts slow review teams when critical fields must be found and validated manually.",
    solution:
      "An OCR and semantic retrieval workflow that extracts document structure, discovers fields, and supports grounded question answering.",
    visual: "document",
    summary:
      "Enterprise Document AI workflow for OCR extraction, semantic question answering, field parsing, and faster contract auditing.",
    architecture:
      "The system combines PaddleOCR and PyMuPDF for document extraction, LangChain for orchestration, and ChromaDB for semantic retrieval and field discovery, supported by Python, SQL, Pandas, PostgreSQL, and Tableau.",
    tech: ["Python", "PaddleOCR", "PyMuPDF", "LangChain", "ChromaDB", "SQL", "PostgreSQL", "Tableau"],
    bullets: [
      "I automated field-level extraction from complex enterprise documents.",
      "I enabled semantic document Q&A and field parsing with vector retrieval.",
      "I accelerated contract auditing workflows by 40%."
    ]
  },
  {
    title: "Enterprise Knowledge Search Platform",
    slug: "enterprise-knowledge-search-platform",
    category: "GenAI / RAG / Enterprise Search",
    filters: ["RAG & GenAI", "Data Science & ML"],
    featured: false,
    highlightLabel: "Enterprise RAG",
    summary:
      "RAG-based enterprise knowledge platform for grounded, context-aware access to technical documentation and operational resources.",
    architecture:
      "The platform uses transformer embeddings, semantic chunking, vector retrieval, LangChain prompt orchestration, retrieval evaluation, PostgreSQL, and FastAPI inference services.",
    tech: ["Python", "LangChain", "Hugging Face", "Vector Search", "FastAPI", "PostgreSQL"],
    bullets: [
      "I improved relevant document discovery by 31% across internal technical repositories.",
      "I implemented retrieval evaluation and grounded response generation for reliable enterprise search.",
      "I reduced information search time by 46% through semantic retrieval and API-driven access."
    ]
  },
  {
    title: "AgentShield",
    slug: "agentshield",
    category: "AI Agents / AI Safety / LLM Evaluation",
    filters: ["AI Agents", "RAG & GenAI"],
    featured: true,
    featuredOrder: 2,
    highlightLabel: "AI Safety & Evaluation",
    problem:
      "AI agents can pass happy-path demos while still leaking data, misusing tools, or failing under adversarial prompts.",
    solution:
      "An auditable multi-LLM QA and red-team workbench that evaluates launch risk before an agent reaches production.",
    visual: "shield",
    summary:
      "Multi-LLM agent QA platform with 6 failure modes and 3 red-team scan levels for pre-launch AI agent testing.",
    architecture:
      "AgentShield uses Next.js and TypeScript with Groq, Gemini, Supabase, Prisma, Zod, Vitest, and Playwright to evaluate prompt injection, privacy leakage, unsafe tool use, hallucination, and policy risk before AI agents launch.",
    tech: ["Next.js", "TypeScript", "Groq", "Gemini", "Supabase", "Prisma", "Zod", "Vitest", "Playwright"],
    bullets: [
      "I built a deployed QA platform with six failure modes, three scan levels, PostgreSQL persistence, and interactive evaluation dashboards.",
      "I tested prompt injection, privacy leakage, unsafe tool use, hallucinations, policy violations, and excessive agency.",
      "I automated adversarial generation, Gemini-based judging, and regression testing."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/agentshield"
  },
  {
    title: "AI FinOps Copilot",
    slug: "ai-finops-copilot",
    category: "AI / Cloud Analytics / FinOps",
    filters: ["AI Agents", "Analytics", "Data Engineering"],
    featured: true,
    featuredOrder: 5,
    highlightLabel: "AI for FinOps",
    problem:
      "Cloud cost signals are fragmented across billing, utilization, inventory, and ownership systems.",
    solution:
      "A read-only decision layer that turns deterministic cost findings into prioritized, owner-aware remediation plans.",
    visual: "finops",
    summary:
      "Read-only AI FinOps copilot analyzing 24 cloud resources across 5 teams and surfacing 15 savings findings and cost spikes.",
    architecture:
      "The copilot uses Next.js, TypeScript, Groq, serverless APIs, cloud cost analytics, and Vercel to generate owner-aware savings plans, executive summaries, and ticket-ready recommendations without requiring AWS credentials.",
    tech: ["Next.js", "TypeScript", "Groq", "Serverless APIs", "Cloud Cost Analytics", "Vercel"],
    bullets: [
      "I created owner-aware savings plans and executive summaries.",
      "I generated ticket-ready recommendations for cost spikes and savings findings.",
      "I designed the workflow to avoid requiring AWS credentials."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/ai-finops-copilot"
  },
  {
    title: "AI/ML Knowledge Assistant",
    slug: "ai-ml-knowledge-rag-assistant",
    category: "RAG / Generative AI / Vector Search",
    filters: ["RAG & GenAI", "AI Agents"],
    featured: true,
    featuredOrder: 3,
    highlightLabel: "Trustworthy RAG",
    problem:
      "Knowledge assistants lose trust when they answer without sufficient evidence or repeatedly pay the same retrieval cost.",
    solution:
      "A citation-first RAG system with confidence gating, refusal behavior, retrieval evaluation, and layered caching.",
    visual: "rag",
    summary:
      "Cloud-native RAG assistant with Top-3 retrieval, 0.6 similarity gating, clickable citations, refusal handling, and cache layers.",
    architecture:
      "The assistant uses Next.js, Supabase pgvector, Jina Embeddings, Groq, RAG, and vector search to ground AI/ML knowledge answers with citation-first retrieval, confidence gates, exact cache, semantic cache, and embedding cache.",
    tech: ["Next.js", "TypeScript", "PostgreSQL / pgvector", "Jina Embeddings", "Groq", "Vercel"],
    bullets: [
      "I built cloud-native pgvector retrieval with Jina embeddings, Groq generation, clickable citations, and similarity-based refusal handling.",
      "I implemented exact, semantic, and embedding caching with latency observability.",
      "I evolved the system from local FAISS to a lightweight serverless production architecture."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/ml-course-document-rag"
  },
  {
    title: "Databricks Lakeflow Medallion Pipeline",
    slug: "databricks-lakeflow-medallion-pipeline",
    category: "Data Engineering / Databricks / AWS",
    filters: ["Data Engineering"],
    featured: true,
    featuredOrder: 6,
    highlightLabel: "Lakehouse Engineering",
    problem:
      "Raw operational data from multiple business units needs governed, incremental processing before analytics teams can use it.",
    solution:
      "A Databricks lakehouse pipeline that moves S3 data through orchestrated Bronze, Silver, and Gold layers into governed serving tables.",
    visual: "medallion",
    summary:
      "S3-to-Databricks pipeline processing FMCG data through Bronze, Silver, and Gold layers with full and incremental loads.",
    architecture:
      "The project uses AWS S3, Databricks, Lakeflow Jobs, Unity Catalog, PySpark, and Spark SQL to build a governed medallion architecture that supports dashboards, parent-company reporting, and Databricks Genie exploration.",
    tech: ["AWS S3", "Databricks", "Lakeflow Jobs", "Unity Catalog", "PySpark", "Spark SQL"],
    bullets: [
      "I built Bronze, Silver, and Gold medallion architecture with full and incremental data loads.",
      "I governed data using Unity Catalog and produced analytics-ready Gold tables.",
      "I designed the pipeline for dashboard support, parent-company reporting, and Databricks Genie exploration."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline"
  },
  {
    title: "Airbnb Snowflake dbt Pipeline",
    slug: "airbnb-snowflake-dbt-pipeline",
    category: "Data Engineering / Snowflake / dbt",
    filters: ["Data Engineering", "Analytics"],
    featured: false,
    highlightLabel: "Analytics Engineering",
    problem:
      "Bookings, listings, and host data arrive in inconsistent source structures that are not ready for trusted reporting.",
    solution:
      "A tested Snowflake and dbt transformation system with incremental models, historical snapshots, lineage, and analytical marts.",
    visual: "lineage",
    summary:
      "End-to-end Airbnb analytics pipeline transforming bookings, hosts, and listings data into BI-ready analytical models.",
    architecture:
      "The pipeline uses AWS S3, Snowflake, dbt, SQL, and Jinja to create incremental dbt models, SCD Type 2 snapshots, dbt tests, custom macros, lineage documentation, fact tables, and one-big-table analytical models.",
    tech: ["AWS S3", "Snowflake", "dbt", "SQL", "Jinja"],
    bullets: [
      "I built incremental dbt models, SCD Type 2 snapshots, dbt tests, and custom macros.",
      "I created lineage documentation, fact tables, and one-big-table analytical models.",
      "I transformed bookings, hosts, and listings data into BI-ready models."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/airbnb-snowflake-dbt-pipeline"
  },
  {
    title: "Sales Forecasting MLOps Pipeline",
    slug: "sales-forecasting-mlops-pipeline",
    category: "Data Science / MLOps",
    filters: ["Data Science & ML", "MLOps", "Analytics"],
    highlightLabel: "MLOps",
    summary:
      "Production-style sales forecasting system using PySpark, Snowflake, XGBoost, backtesting, monitoring, and a Streamlit dashboard.",
    architecture:
      "The pipeline combines scalable PySpark processing, Snowflake warehousing, XGBoost model training, backtesting, monitoring, and a Streamlit dashboard for business-facing forecast exploration.",
    tech: ["Python", "PySpark", "Snowflake", "XGBoost", "MLOps", "Streamlit"],
    bullets: [
      "I built an end-to-end forecasting pipeline with model training, backtesting, and monitoring.",
      "I used PySpark and Snowflake for scalable data processing.",
      "I created a dashboard to make forecasting outputs usable for business users."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/sales-forecasting-mlops-pipeline"
  },
  {
    title: "Subscription Value Brain",
    slug: "subscription-value-brain",
    category: "Data Science / Customer Analytics",
    filters: ["Data Science & ML", "Analytics"],
    highlightLabel: "Decision Intelligence",
    summary:
      "Customer value engine combining churn prediction, CLV estimation, and uplift modeling to identify retention offers.",
    architecture:
      "The project combines churn modeling, customer lifetime value estimation, and uplift modeling into a decision intelligence workflow for customer retention strategy.",
    tech: ["Python", "Churn Prediction", "CLV", "Uplift Modeling", "Customer Analytics"],
    bullets: [
      "I built a customer decision intelligence system for retention strategy.",
      "I combined churn, customer lifetime value, and uplift modeling.",
      "I focused on business actionability, not just model accuracy."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/subscription-value-brain"
  },
  {
    title: "Stock Market Kafka Data Pipeline",
    slug: "stock-market-kafka-data-pipeline",
    category: "Data Engineering / Streaming",
    filters: ["Data Engineering"],
    summary:
      "Real-time stock market data engineering pipeline using Kafka, Python, AWS S3, Glue, Athena, and EC2 for streaming analytics.",
    architecture:
      "The pipeline uses Kafka for real-time ingestion, Python for processing, and AWS services for storage, cataloging, and querying streaming stock market data.",
    tech: ["Kafka", "Python", "AWS S3", "Glue", "Athena", "EC2"],
    bullets: [
      "I built an end-to-end real-time streaming pipeline for stock market data.",
      "I used Kafka for ingestion and AWS services for storage, cataloging, and querying.",
      "I demonstrated practical streaming analytics and cloud data engineering skills."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/stock-market-kafka-data-pipeline"
  },
  {
    title: "IT Helpdesk AI Agent",
    slug: "it-helpdesk-ai-agent",
    category: "AI Agents / RAG",
    filters: ["AI Agents", "RAG & GenAI"],
    summary:
      "Agentic IT helpdesk system using LangChain, LangGraph, RAG, ticket classification, safe command planning, and judge-based verification.",
    architecture:
      "The system uses LangChain and LangGraph for agentic workflow design, combining RAG, ticket classification, safe command planning, and judge-based verification.",
    tech: ["Python", "LangChain", "LangGraph", "RAG", "AI Agents", "Ticket Classification"],
    bullets: [
      "I built an AI helpdesk agent for ticket understanding and response planning.",
      "I used LangGraph and LangChain for agentic workflow design.",
      "I included safe command planning and judge-based verification."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/it-helpdesk-ai-agent"
  },
  {
    title: "Medical RAG Chatbot",
    slug: "medical-rag-chatbot",
    category: "GenAI / RAG",
    filters: ["RAG & GenAI"],
    summary:
      "RAG-based medical chatbot using FAISS and GPT to retrieve health-related answers from trusted medical documents with fallback LLM reasoning.",
    architecture:
      "The chatbot uses FAISS vector retrieval as the primary answer source and fallback LLM reasoning for document-grounded health-related question answering.",
    tech: ["Python", "FAISS", "GPT", "RAG", "Vector Search"],
    bullets: [
      "I built a document-grounded medical question-answering chatbot.",
      "I used FAISS for vector retrieval.",
      "I added fallback reasoning while keeping retrieval as the main answer source."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/medical-rag-chatbot"
  },
  {
    title: "Real-Time CCTV Anomaly Detection",
    slug: "real-time-cctv-anomaly-detection",
    category: "Computer Vision / Deep Learning",
    filters: ["Data Science & ML"],
    summary:
      "Unsupervised video-anomaly detection using a PyTorch autoencoder, reconstruction-error thresholds, and live webcam monitoring.",
    architecture:
      "Normal UCSD Ped2 frames train a convolutional autoencoder. Test or webcam frames are scored by reconstruction error; ten consecutive anomalous frames trigger a timestamped image alert. CUDA is used when available, with CPU fallback.",
    tech: ["Python", "PyTorch", "OpenCV", "CUDA", "Autoencoders", "Computer Vision"],
    bullets: [
      "I trained a convolutional autoencoder on normal surveillance frames to identify unusual reconstruction errors.",
      "I added consecutive-frame alert gating and timestamped image capture for continuous anomaly events.",
      "I supported test-video and webcam inference with GPU acceleration when available. Detection is frame-level, not object localization."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/real-time-cctv-anomaly-detection"
  },
  {
    title: "BERT Sentiment Analysis App",
    slug: "bert-sentiment-analysis-app",
    category: "NLP / Deep Learning",
    filters: ["Data Science & ML", "RAG & GenAI"],
    summary:
      "Streamlit app that classifies movie reviews into positive, negative, or neutral sentiment using BERT, PyTorch, and Hugging Face Transformers.",
    architecture:
      "The app packages a transformer-based sentiment classifier with Hugging Face, PyTorch, and Streamlit for interactive NLP analysis.",
    tech: ["Python", "BERT", "PyTorch", "Hugging Face", "Streamlit", "NLP"],
    bullets: [
      "I built a transformer-based sentiment classification app.",
      "I used Hugging Face and PyTorch for NLP modeling.",
      "I packaged the model into an interactive Streamlit application."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/bert-sentiment-analysis-app"
  },
  {
    title: "Customer Churn Prediction ML",
    slug: "customer-churn-prediction-ml",
    category: "Data Science / Classification",
    filters: ["Data Science & ML", "Analytics"],
    summary:
      "Machine learning project to predict telecom customer churn using behavior, demographics, preprocessing, and classification models.",
    architecture:
      "The project follows a supervised machine learning workflow with exploratory analysis, preprocessing, feature engineering, model training, and evaluation for churn classification.",
    tech: ["Python", "Scikit-Learn", "Classification", "Churn Prediction", "EDA"],
    bullets: [
      "I built a supervised ML pipeline for churn prediction.",
      "I used customer behavior and demographic features for classification.",
      "I demonstrated preprocessing, feature engineering, model training, and evaluation."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/customer-churn-prediction-ml"
  },
  {
    title: "NVIDIA Stock Forecasting",
    slug: "nvidia-stock-forecasting",
    category: "Data Science / Time Series",
    filters: ["Data Science & ML", "Analytics"],
    summary:
      "Time-series analysis project for NVIDIA stock using ARIMA, LSTM, and GARCH to forecast trends, returns, and volatility.",
    architecture:
      "The project compares statistical and deep learning approaches for financial time-series forecasting, including trend, returns, and volatility modeling.",
    tech: ["Python", "ARIMA", "LSTM", "GARCH", "Time Series", "Forecasting"],
    bullets: [
      "I compared statistical and deep learning approaches for stock forecasting.",
      "I modeled trends, returns, and volatility.",
      "I demonstrated time-series analysis and financial ML skills."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/nvidia-stock-forecasting"
  },
  {
    title: "Plant Co Performance Dashboard",
    slug: "plant-co-performance-dashboard",
    category: "Business Intelligence / Dashboarding",
    filters: ["Analytics"],
    summary:
      "Power BI dashboard project analyzing plant company performance using sales, product, and regional metrics from Excel-based business data.",
    architecture:
      "The dashboard uses Power BI and Excel-based business data to visualize sales, product, and regional performance for executive-friendly analysis.",
    tech: ["Power BI", "Excel", "Dashboarding", "Business Analytics"],
    bullets: [
      "I built a business performance dashboard using sales and regional metrics.",
      "I focused on executive-friendly visual analysis.",
      "I demonstrated BI storytelling and dashboard design."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/plant-co-performance-dashboard"
  },
  {
    title: "COVID-19 Vaccination SQL Analysis",
    slug: "covid19-vaccination-sql-analysis",
    category: "SQL / Analytics",
    filters: ["Analytics"],
    summary:
      "SQL portfolio project analyzing global COVID-19 vaccination and death datasets to uncover trends, vaccination progress, and country-level insights.",
    architecture:
      "The project uses SQL analysis over public-health datasets to extract country-level, trend-based, and vaccination progress insights for reporting.",
    tech: ["SQL", "Data Analysis", "Public Health Analytics", "Reporting"],
    bullets: [
      "I used SQL to analyze large public-health datasets.",
      "I created country-level and trend-based insights.",
      "I demonstrated strong SQL querying and analytical thinking."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/covid19-vaccination-sql-analysis"
  }
];

export const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "Illinois Institute of Technology",
    logo: { src: "/images/education/illinois-tech.svg", width: 682, height: 85 },
    location: "United States",
    dates: "Graduation: May 2026",
    details: ["Master of Science program completed in May 2026."]
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Visvesvaraya Technological University",
    logo: { src: "/images/education/vtu.webp", width: 153, height: 160 },
    location: "India",
    dates: "Graduation: August 2023",
    details: ["Foundation in computer science, software systems, and applied computing."]
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
    value: siteConfig.location,
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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const suggestedQuestions = [
  "What did Shreevikas build at NeuralSeek?",
  "What is ArchPilot?",
  "Tell me about Accord Procurement AI.",
  "What was his role at Whiterock?",
  "What is his experience with RAG?",
  "Tell me about AgentShield."
];

export const achievementCards = [
  {
    icon: BrainCircuit,
    label: "Manufacturing ML",
    value: "+22% accuracy",
    text: "I deployed defect-detection workflows on AWS SageMaker with 98.8% pipeline uptime at Whiterock."
  },
  {
    icon: BrainCircuit,
    label: "Machine Learning",
    value: "20K+ reviews",
    text: "I built a BERT and spaCy sentiment pipeline achieving approximately 89% F1 at Whiterock."
  },
  {
    icon: Workflow,
    label: "Enterprise RAG",
    value: "-40% resolution time",
    text: "I build grounded retrieval systems that make enterprise knowledge easier to use."
  }
];
