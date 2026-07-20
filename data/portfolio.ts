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
  title: "Shreevikas Jagadish | AI/ML Engineer, Data Scientist & Data Engineer",
  description:
    "Portfolio of Shreevikas Jagadish, an AI/ML Engineer, Data Scientist, and Data Engineer building production machine-learning systems, trustworthy RAG applications, scientific AI, MLOps workflows, and cloud data platforms.",
  location: "Chicago, Illinois",
  availability: "Open to AI/ML, Data Science, and Data Engineering roles",
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
    "AI/ML Engineer",
    "Data Scientist",
    "Data Engineer"
  ]
};

export const heroStats = [
  {
    value: 4,
    suffix: "+",
    label: "Years of experience",
    context: "Across production ML, AI engineering, and analytics"
  },
  {
    value: 24,
    suffix: "%",
    label: "Planning accuracy gain",
    context: "Regional demand forecasting"
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster model iteration",
    context: "Reusable Spark and MLflow workflows"
  },
  {
    value: 38,
    suffix: "%",
    label: "Lower processing latency",
    context: "Production inference services"
  },
  {
    value: 22,
    suffix: "%",
    label: "Better defect detection",
    context: "Manufacturing quality intelligence"
  }
];

export const aboutHighlights = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Forecasting, classification, anomaly detection, feature engineering, and model optimization."
  },
  {
    icon: Bot,
    title: "Generative AI",
    description:
      "Grounded RAG, agentic workflows, embeddings, evaluation, caching, and guardrails."
  },
  {
    icon: Gauge,
    title: "MLOps",
    description:
      "Experiment tracking, model serving, monitoring, validation, CI/CD, and drift detection."
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    description:
      "Reliable batch and streaming pipelines, lakehouse patterns, quality, and orchestration."
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
      "Physics-informed learning, neural operators, surrogate modeling, and GPU inference."
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
      "LangGraph",
      "Hugging Face",
      "Transformers",
      "Embeddings",
      "Reranking",
      "Prompt Engineering",
      "Agentic AI",
      "LLM Evaluation",
      "Guardrails",
      "OpenAI Agents SDK",
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
      "Classification",
      "Regression",
      "Clustering",
      "Forecasting",
      "Recommendation Systems",
      "Anomaly Detection",
      "Feature Engineering",
      "Model Optimization"
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
      "Scientific Computing"
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
      "ETL / ELT",
      "Batch Processing",
      "Streaming Pipelines",
      "Data Quality",
      "Data Modeling",
      "Medallion Architecture"
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
      "A/B Testing"
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
      "Redshift"
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
      "REST APIs"
    ]
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
    title: "Data Scientist / AI-ML",
    company: "Cloudera",
    location: "United States",
    dates: "Jan 2026 - Present",
    summary:
      "I build and operationalize demand forecasting, predictive inference, retrieval evaluation, and decision-intelligence systems across enterprise planning workflows.",
    tags: [
      "Python",
      "SQL",
      "PySpark",
      "XGBoost",
      "Apache Spark",
      "MLflow",
      "FastAPI",
      "Docker",
      "RAG",
      "Model Monitoring",
      "A/B Testing",
      "Power BI"
    ],
    metrics: [
      "24% better planning accuracy",
      "40% faster model iteration",
      "38% lower processing latency",
      "18% higher ML/RAG consistency",
      "60% less manual reporting"
    ],
    bullets: [
      "I designed regional demand forecasting models with Python, SQL, PySpark, and XGBoost, improving inventory planning accuracy by 24% across distributed supply operations.",
      "I built a reusable Apache Spark and MLflow experimentation framework that shortened model iteration cycles by 40% and standardized feature processing, experiment comparison, version tracking, and production releases.",
      "I integrated predictive inference services and LLM-powered workflows through FastAPI and Docker, cutting processing latency by 38% and delivering timely operational recommendations.",
      "I established statistical validation, retrieval evaluation, drift monitoring, and A/B testing practices that increased ML and RAG performance consistency by 18% across evolving data distributions.",
      "I partnered with analytics, product, supply chain, and operational stakeholders to translate planning and enterprise knowledge discovery requirements into deployable AI solutions.",
      "I developed Power BI dashboards for forecast performance, predictions, operational exceptions, and planning trends, eliminating 60% of recurring manual reporting effort."
    ]
  },
  {
    title: "AI Engineer Intern",
    company: "NeuralSeek",
    location: "United States - Remote",
    dates: "Jul 2025 - Nov 2025",
    summary:
      "I built production-oriented RAG and agentic AI workflows for document intelligence, retrieval quality, and reliable API delivery.",
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "OpenAI Agents SDK",
      "FastAPI",
      "Pydantic",
      "pytest",
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "MCP",
      "Vector Search"
    ],
    metrics: [
      "10K+ documents",
      "500+ daily queries",
      "30% reliability gain",
      "25% faster UI/API iteration"
    ],
    bullets: [
      "I led a 4-member team building LangChain RAG pipelines for 10K+ real estate documents, supporting 500+ daily queries.",
      "I improved document upload reliability by 30% using AWS Lambda, S3, DynamoDB, vector refresh workflows, and MCP error alerts.",
      "I reduced UI and API iteration time by 25% with FastAPI, Pydantic, pytest, structured logging, and error handling.",
      "I improved RAG answer quality through similarity threshold optimization, citation validation, response caching, fallback handling, and low-confidence query logging.",
      "I built an agentic AI workflow with the OpenAI Agents SDK to draft and evaluate reports and create Gmail drafts through MCP-based tool use."
    ]
  },
  {
    title: "Data Scientist",
    company: "Bosch",
    location: "India",
    dates: "Mar 2021 - Jul 2024",
    summary:
      "I developed manufacturing quality intelligence and predictive-maintenance workflows that improved defect detection, data readiness, and operational visibility.",
    tags: [
      "Python",
      "SQL",
      "Scikit-Learn",
      "Pandas",
      "ETL",
      "NLP",
      "Deep Learning",
      "Anomaly Detection",
      "Statistical Analysis"
    ],
    metrics: [
      "45% lower data prep time",
      "22% better defect detection",
      "17% higher prediction precision",
      "55% less manual processing"
    ],
    bullets: [
      "I engineered manufacturing quality prediction models with Python and Scikit-Learn, raising defect detection accuracy by 22% across high-volume production environments.",
      "I consolidated manufacturing datasets and unstructured maintenance records through automated ETL and NLP preprocessing workflows, cutting preparation time by 45% and improving analytical consistency.",
      "I improved prediction precision by 17% across quality and predictive maintenance use cases through feature selection, hyperparameter tuning, cross-validation, and optimization of classification and deep learning models.",
      "I built statistical analysis and anomaly detection dashboards that gave engineering teams earlier visibility into process instability, recurring production patterns, and equipment behavior.",
      "I automated recurring analytics and operational reporting with SQL, Pandas, and scheduled data pipelines, saving 55% of manual processing effort."
    ]
  }
];

export const researchExperience = {
  title: "Physics-Informed AI for Scientific Simulation",
  role: "Graduate Research Assistant",
  organization: "Illinois Institute of Technology",
  location: "Chicago, Illinois",
  dates: "Nov 2025 - May 2026",
  summary:
    "I research scientific machine-learning systems that replace slow simulation loops with fast, physics-informed surrogate models for engineering applications.",
  highlights: [
    "I researched and prototyped PyTorch neural networks using NVIDIA PhysicsNeMo, CUDA, and Fourier Neural Operators to build AI-powered surrogate models that replicate slow physics-based simulations with near-instant, physics-informed predictions.",
    "I optimized scientific simulation models using CUDA, ONNX, and TensorRT to accelerate GPU inference for engineering and industrial applications."
  ],
  capabilities: [
    { icon: FlaskConical, label: "Physics-informed AI" },
    { icon: BrainCircuit, label: "Neural operators" },
    { icon: Cpu, label: "GPU acceleration" },
    { icon: Gauge, label: "Surrogate modeling" }
  ],
  pipeline: [
    "Physics simulation",
    "Training data",
    "Neural operator",
    "GPU optimization",
    "Fast surrogate inference"
  ],
  technologies: [
    "PyTorch",
    "NVIDIA PhysicsNeMo",
    "CUDA",
    "Fourier Neural Operators",
    "ONNX",
    "TensorRT",
    "Scientific Computing"
  ]
};

export const certifications = [
  {
    name: "AWS Certified Data Engineer - Associate",
    issuer: "Amazon Web Services",
    credentialUrl:
      "https://www.credly.com/badges/017bc7a0-a378-4cfa-abb0-bc968c20d7da/public_url",
    icon: ShieldCheck
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
  visual?: "forecast" | "shield" | "finops" | "rag" | "medallion" | "lineage";
  summary: string;
  architecture: string;
  tech: string[];
  bullets: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Intelligent Inventory Demand Forecasting Platform",
    slug: "intelligent-inventory-demand-forecasting",
    category: "Data Science / Forecasting / MLOps",
    filters: ["Data Science & ML", "MLOps", "Analytics"],
    featured: true,
    featuredOrder: 6,
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
    category: "Data Science / Manufacturing Intelligence",
    filters: ["Data Science & ML", "Analytics"],
    featured: false,
    highlightLabel: "Quality Intelligence",
    summary:
      "Predictive quality intelligence system for detecting abnormal manufacturing behavior and improving production visibility.",
    architecture:
      "The system combines automated data preparation, Scikit-Learn and deep learning models, anomaly detection, statistical validation, PostgreSQL, and Tableau reporting for production quality workflows.",
    tech: ["Python", "Scikit-Learn", "SQL", "Pandas", "PostgreSQL", "Tableau"],
    bullets: [
      "I improved early defect identification by 19% across production quality workflows.",
      "I combined machine learning, deep learning, anomaly detection, and statistical validation.",
      "I reduced manual analysis time by 42% while improving visibility into recurring production issues."
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
    featuredOrder: 1,
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
      "I automated prompt injection testing and privacy leakage checks.",
      "I tested unsafe tool use, hallucination, and policy risks.",
      "I generated regression reports for AI agents."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/agentshield"
  },
  {
    title: "AI FinOps Copilot",
    slug: "ai-finops-copilot",
    category: "AI / Cloud Analytics / FinOps",
    filters: ["AI Agents", "Analytics", "Data Engineering"],
    featured: true,
    featuredOrder: 2,
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
    title: "AI/ML Knowledge RAG Assistant",
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
    tech: ["Next.js", "Supabase pgvector", "Jina Embeddings", "Groq", "RAG", "Vector Search"],
    bullets: [
      "I implemented Top-3 vector retrieval with a 0.6 similarity threshold.",
      "I added citation-grounded responses and refusal handling for low-confidence answers.",
      "I used exact, semantic, and embedding caches for faster repeated queries."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/ml-course-document-rag"
  },
  {
    title: "Databricks Lakeflow Medallion Pipeline",
    slug: "databricks-lakeflow-medallion-pipeline",
    category: "Data Engineering / Databricks / AWS",
    filters: ["Data Engineering"],
    featured: true,
    featuredOrder: 4,
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
    featured: true,
    featuredOrder: 5,
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
    title: "Real-Time Pothole Detection",
    slug: "real-time-pothole-detection",
    category: "Computer Vision / Deep Learning",
    filters: ["Data Science & ML"],
    summary:
      "Real-time computer vision app for detecting road potholes from video streams using YOLOv8, TensorRT, CUDA, and Flask.",
    architecture:
      "The app combines YOLOv8 object detection, GPU acceleration tools, and a Flask serving layer for real-time pothole detection from video streams.",
    tech: ["Python", "YOLOv8", "TensorRT", "CUDA", "Flask", "Computer Vision"],
    bullets: [
      "I built a real-time object detection system for road safety.",
      "I used YOLOv8 with GPU acceleration tools.",
      "I demonstrated applied deep learning, computer vision, and deployment skills."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/real-time-pothole-detection"
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
    degree: "Master of Science in Information Technology & Management",
    school: "Illinois Institute of Technology",
    location: "United States",
    dates: "Graduation: May 2026",
    details: ["Master of Science program completed in May 2026."]
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    school: "Visvesvaraya Technological University",
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
  "What AI systems have you built?",
  "Tell me about AgentShield.",
  "What is your experience with RAG?",
  "What research have you done in scientific AI?",
  "Which data-engineering platforms have you used?",
  "What MLOps experience do you have?"
];

export const achievementCards = [
  {
    icon: LineChart,
    label: "Forecasting",
    value: "+24% accuracy",
    text: "I build demand forecasting systems that improve inventory planning across distributed operations."
  },
  {
    icon: BrainCircuit,
    label: "Machine Learning",
    value: "+22% detection",
    text: "I develop quality prediction and anomaly detection models for high-volume manufacturing environments."
  },
  {
    icon: Workflow,
    label: "MLOps",
    value: "-40% iteration",
    text: "I standardize feature processing, experiment tracking, validation, versioning, and production releases."
  }
];
