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
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const siteConfig = {
  name: "Shreevikas Jagadish",
  shortName: "Shreevikas",
  title: "Shreevikas Jagadish | Data Engineer & AI Data Engineer",
  description:
    "Portfolio of Shreevikas Jagadish, a Data Engineer and AI Data Engineer specializing in scalable data pipelines, cloud data platforms, RAG systems, AIOps research, and analytics engineering.",
  location: "Chicago, IL",
  availability: "Open to relocation",
  email: "shreevikasjagadish7@gmail.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=shreevikasjagadish7%40gmail.com&su=Portfolio%20Inquiry",
  notificationEmail: "shreevikasj@gmail.com",
  github: "https://github.com/Shreevikas-BJ",
  linkedin: "https://www.linkedin.com/in/shreevikasbj/",
  resumeUrl: "/Shreevikas_Jagadish_DataEngineer.pdf",
  researchUrl: "/research/aiops-research-paper.pdf",
  profileImage: "/images/profile-picture.jpg",
  roles: ["Data Engineer", "Analytics Engineer", "AI Data Engineer"]
};

export const heroStats = [
  { label: "Experience", value: "2+ yrs" },
  { label: "Cloud pipelines", value: "12+" },
  { label: "Daily events", value: "~5M" },
  { label: "Data migrated", value: "3TB+" }
];

export const aboutHighlights = [
  {
    icon: Database,
    title: "Cloud data platforms",
    description:
      "I build AWS, Snowflake, Databricks, Kafka, Airflow, Fivetran, and dbt Core pipelines that move raw data into governed analytics-ready layers."
  },
  {
    icon: BrainCircuit,
    title: "AI data infrastructure",
    description:
      "I design RAG pipelines, vector search workflows, FastAPI services, and document-grounded AI systems with reliability controls."
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description:
      "I focus on data quality, dbt tests, SLA monitoring, schema validation, reconciliation, lineage, and production maintainability."
  }
];

export const skills = [
  {
    category: "Data Engineering",
    icon: Workflow,
    items: [
      "PySpark",
      "Spark SQL",
      "Apache Spark",
      "Spark Structured Streaming",
      "Airflow",
      "dbt Core",
      "Kafka",
      "Fivetran",
      "Delta Lake",
      "ETL/ELT",
      "CDC",
      "SCD Type-2",
      "Medallion Architecture",
      "Star Schema",
      "Dimensional Modeling"
    ]
  },
  {
    category: "Cloud & Warehousing",
    icon: Cloud,
    items: [
      "AWS",
      "Amazon S3",
      "AWS Glue",
      "AWS EMR",
      "AWS Lambda",
      "Amazon Redshift",
      "Amazon SageMaker",
      "DynamoDB",
      "Amazon Athena",
      "CloudWatch",
      "Snowflake",
      "Azure Databricks",
      "Unity Catalog"
    ]
  },
  {
    category: "AI/ML & RAG",
    icon: Bot,
    items: [
      "LangChain",
      "LangGraph",
      "FAISS",
      "Vector Search",
      "Embeddings",
      "OpenAI Embeddings",
      "OpenAI API",
      "RAG",
      "RAG Pipelines",
      "Scikit-learn",
      "LightGBM",
      "MLflow",
      "PyTorch",
      "PyTorch GPU",
      "XGBoost",
      "DistilBERT",
      "Physics-Informed Neural Networks",
      "NVIDIA PhysicsNeMo",
      "CUDA Acceleration",
      "Codex"
    ]
  },
  {
    category: "DevOps & Backend",
    icon: BriefcaseBusiness,
    items: [
      "Python",
      "SQL",
      "Bash",
      "FastAPI",
      "Pydantic",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "pytest",
      "Logging",
      "Error Handling",
      "Grafana"
    ]
  },
  {
    category: "BI & Analytics",
    icon: BarChart3,
    items: [
      "Power BI",
      "Tableau",
      "Excel",
      "Great Expectations",
      "dbt Tests",
      "Schema Validation",
      "Reconciliation",
      "Data Lineage",
      "SLA Monitoring",
      "Quality Gates"
    ]
  }
];

export const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "Illinois Institute of Technology",
    location: "Chicago, Illinois, United States",
    dates: "Nov 2025 - May 2026",
    tags: [
      "PINNs",
      "PyTorch GPU",
      "CUDA",
      "NVIDIA PhysicsNeMo",
      "Time-Series Data",
      "Scientific Computing"
    ],
    bullets: [
      "I work on Physics-Informed Neural Networks for power-system dynamics, combining data engineering, machine learning, and scientific computing.",
      "I prepare, validate, and transform simulation and time-series datasets into model-ready inputs for PyTorch-based training pipelines.",
      "I use CUDA acceleration and NVIDIA PhysicsNeMo to support GPU-based deep learning experiments.",
      "I improve training efficiency, prediction accuracy, and scalability for large-scale power-system simulation workflows.",
      "I build structured data workflows that support reproducible deep learning experiments and scientific modeling."
    ]
  },
  {
    title: "AI Data Engineer Intern",
    company: "NeuralSeek",
    location: "Miami, FL (Remote)",
    dates: "Jul 2025 - Nov 2025",
    tags: ["LangChain", "RAG", "FAISS", "AWS Lambda", "DynamoDB", "Codex", "FastAPI"],
    bullets: [
      "I led a 4-member intern team to design a LangChain-based RAG architecture and build ingestion, chunking, embedding, and FAISS indexing pipelines for 10K+ real estate documents, supporting 500+ daily RAG queries.",
      "I improved document upload reliability by 30% by building Lambda, S3, and DynamoDB workflows for metadata tracking, embedding refreshes, vector index updates, and MCP-based system-error notifications.",
      "I reduced UI/API iteration time by 25% using Codex-assisted development to accelerate FastAPI updates, Pydantic schema validation, structured logging, automated test runs, pytest coverage, and error handling."
    ]
  },
  {
    title: "Data Engineer",
    company: "Whiterock Technologies",
    location: "Bengaluru, India",
    dates: "Aug 2022 - Apr 2024",
    tags: ["AWS", "Snowflake", "Airflow", "dbt", "Kafka", "PySpark", "SageMaker"],
    bullets: [
      "I reduced reporting latency by 40% for 200+ users by owning 12+ AWS-to-Snowflake ELT pipelines with Fivetran ingestion, Airflow scheduling, dbt tests, 40+ dbt Core models, and failure monitoring.",
      "I improved active dashboarding from hourly batch updates to near-real-time views by implementing Kafka-to-Spark streaming workflows across 8 Kafka topics, processing about 5M daily transaction and engagement events.",
      "I operationalized 2 ML pipelines using XGBoost and LightGBM with PySpark feature engineering, SageMaker batch inference, Great Expectations quality gates, Grafana monitoring, and 98.8% uptime via Airflow and CloudWatch.",
      "I led a 3TB+ Oracle-to-Snowflake migration across 50+ healthcare tables by rewriting procedural logic, validating CDC/SCD Type-2 loads, and preserving role-based access controls."
    ]
  },
  {
    title: "Data Engineer Intern",
    company: "Whiterock Technologies",
    location: "Bengaluru, India",
    dates: "Feb 2022 - Jul 2022",
    tags: ["Python", "SQL", "Excel", "Airflow", "Schema Validation", "Reconciliation"],
    bullets: [
      "I reduced manual reporting effort by automating extraction and validation tasks with Python, SQL, and Excel while supporting Airflow retries and failure alerts.",
      "I improved reporting accuracy and query performance by writing optimized SQL with CTEs, window functions, joins, and aggregations for analyst-facing datasets.",
      "I supported healthcare migration readiness through schema validation, row-count reconciliation, checksum checks, mismatch investigation, and post-load documentation."
    ]
  }
];

export type ProjectCategory =
  | "All"
  | "Data Engineering"
  | "AI/RAG"
  | "Machine Learning"
  | "Analytics"
  | "Cloud";

export const projectFilters: ProjectCategory[] = [
  "All",
  "Data Engineering",
  "AI/RAG",
  "Machine Learning",
  "Analytics",
  "Cloud"
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
    title: "Databricks Lakeflow Medallion Pipeline",
    slug: "databricks-lakeflow-medallion-pipeline",
    category: "Data Engineering",
    featured: true,
    highlightLabel: "Featured Data Engineering",
    summary:
      "End-to-end Databricks lakehouse pipeline from S3 raw data into bronze, silver, and gold analytics layers.",
    architecture:
      "Amazon S3 raw data flows through Databricks Lakeflow Jobs into governed bronze, silver, and gold layers with Unity Catalog, then serves dashboards, SQL analytics, and Databricks Genie.",
    tech: [
      "Databricks",
      "Lakeflow Jobs",
      "Amazon S3",
      "Unity Catalog",
      "PySpark",
      "Spark SQL",
      "Medallion Architecture"
    ],
    bullets: [
      "I process customer, product, and fact datasets through full and incremental loading workflows.",
      "I create governed gold-layer tables for dashboards, business queries, and Databricks Genie.",
      "I use S3, Delta tables, PySpark, Lakeflow Jobs, and Unity Catalog across bronze, silver, and gold layers."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline"
  },
  {
    title: "Stock Market Kafka Data Pipeline",
    slug: "stock-market-kafka-data-pipeline",
    category: "Cloud",
    summary:
      "Real-time stock market streaming pipeline using Kafka, Python, AWS S3, Glue, and Athena.",
    architecture:
      "Stock market CSV records are produced into Kafka topics, consumed with Python, landed in S3, cataloged by AWS Glue, and queried through Athena.",
    tech: ["Apache Kafka", "Python", "AWS EC2", "Amazon S3", "AWS Glue", "Athena", "SQL"],
    bullets: [
      "I simulate streaming market records through Kafka producer and consumer workflows.",
      "I use S3 as a data lake layer and Glue Data Catalog for schema discovery.",
      "I enable serverless SQL analysis of streamed stock market data with Athena."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/stock-market-kafka-data-pipeline"
  },
  {
    title: "Airbnb Snowflake dbt Data Pipeline",
    slug: "airbnb-snowflake-dbt-pipeline",
    category: "Analytics",
    summary:
      "Modern analytics engineering pipeline for Airbnb data using Snowflake, dbt, AWS S3, SQL, and Python.",
    architecture:
      "Airbnb listings, bookings, and host CSV data move from AWS S3 to Snowflake staging, then through dbt bronze, silver, and gold models for analytics and BI.",
    tech: ["Snowflake", "dbt", "AWS S3", "SQL", "Python", "Jinja", "SCD Type-2"],
    bullets: [
      "I model marketplace data through bronze, silver, and gold layers.",
      "I use incremental dbt models, snapshots, tests, macros, and lineage documentation.",
      "I build analytics-ready fact and one-big-table models for reporting."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/airbnb-snowflake-dbt-pipeline"
  },
  {
    title: "ML Course Document RAG",
    slug: "ml-course-document-rag",
    category: "AI/RAG",
    featured: true,
    highlightLabel: "Featured AI/RAG",
    summary:
      "Trust-first RAG system that answers questions strictly from uploaded machine learning course documents.",
    architecture:
      "Uploaded PDFs are extracted, chunked, embedded, indexed in FAISS, retrieved with similarity gating, and answered only when source evidence is strong enough.",
    tech: ["Python", "Streamlit", "FAISS", "OpenAI Embeddings", "RAG", "PDF Processing"],
    bullets: [
      "I use similarity thresholds to refuse unsupported questions instead of guessing.",
      "I provide citation-based responses for traceability in learning environments.",
      "I add a Multi-LLM Council review layer to cross-check retrieved context quality before final response generation."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/ml-course-document-rag"
  },
  {
    title: "Medical RAG Chatbot",
    slug: "medical-rag-chatbot",
    category: "AI/RAG",
    summary:
      "Medical document-grounded chatbot that retrieves trusted healthcare context with FAISS before generating answers.",
    architecture:
      "Local medical documents are loaded, chunked, embedded, stored in FAISS, retrieved by semantic similarity, and passed to a GPT-style response generator.",
    tech: ["Python", "FAISS", "RAG", "OpenAI API", "Embeddings", "Document Processing"],
    bullets: [
      "I build a domain-specific RAG pipeline for health-related question answering.",
      "I ground responses in local trusted medical documents.",
      "I include a clear educational-purpose medical disclaimer."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/medical-rag-chatbot"
  },
  {
    title: "IT Helpdesk AI Agent",
    slug: "it-helpdesk-ai-agent",
    category: "AI/RAG",
    summary:
      "Agentic IT helpdesk assistant for ticket classification, knowledge retrieval, troubleshooting, and command safety validation.",
    architecture:
      "User tickets are classified, matched to knowledge base articles through FAISS retrieval, reranked, routed through LangGraph, and checked by a safety judge before approved diagnostics are suggested.",
    tech: ["Python", "PyTorch", "DistilBERT", "LangChain", "LangGraph", "FAISS", "Streamlit"],
    bullets: [
      "I classify VPN, Wi-Fi, printer, password reset, and related support tickets.",
      "I use cross-encoder reranking to improve retrieved support context.",
      "I block unsafe commands and allow only controlled diagnostic actions."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/it-helpdesk-ai-agent"
  },
  {
    title: "Subscription Value Brain",
    slug: "subscription-value-brain",
    category: "Machine Learning",
    featured: true,
    highlightLabel: "Featured ML/Analytics",
    summary:
      "Customer value intelligence system combining churn prediction, CLV estimation, uplift modeling, and campaign targeting.",
    architecture:
      "Customer data is cleaned and engineered into churn, CLV, and uplift models, then combined into a targeting score and surfaced through a Streamlit decision dashboard.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Random Forest", "Streamlit", "Joblib"],
    bullets: [
      "I rank customers by expected retained value using churn risk, CLV, and positive uplift.",
      "I segment customers into business-friendly groups such as persuadable, sure thing, lost cause, and do-not-disturb.",
      "I include budget-based campaign simulation and downloadable target customer lists."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/subscription-value-brain"
  },
  {
    title: "Sales Forecasting MLOps Pipeline",
    slug: "sales-forecasting-mlops-pipeline",
    category: "Machine Learning",
    summary:
      "Production-style sales forecasting pipeline with PySpark ETL, Snowflake storage, XGBoost modeling, monitoring, and Streamlit.",
    architecture:
      "Raw sales data is processed with PySpark, stored in Snowflake feature and forecast tables, modeled with baseline and XGBoost approaches, backtested, monitored, and visualized in Streamlit.",
    tech: ["PySpark", "Snowflake", "XGBoost", "Scikit-learn", "Streamlit", "Pandas", "MLOps"],
    bullets: [
      "I build lag features, rolling statistics, and time-series forecasting features.",
      "I compare baseline and XGBoost models using rolling backtests.",
      "I write forecasts and monitoring metrics back to Snowflake for dashboarding."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/sales-forecasting-mlops-pipeline",
    liveUrl: "https://sales-forecasting-mlops.streamlit.app/"
  },
  {
    title: "Real-Time Pothole Detection",
    slug: "real-time-pothole-detection",
    category: "Machine Learning",
    summary:
      "Computer vision app for detecting road potholes from uploaded or live videos using YOLOv8 and OpenCV.",
    architecture:
      "Road video is uploaded through Flask, processed frame by frame with OpenCV, passed to YOLOv8 for detection, and visualized with bounding boxes, confidence, and FPS monitoring.",
    tech: ["Python", "Flask", "OpenCV", "YOLOv8", "PyTorch", "CUDA", "TensorRT"],
    bullets: [
      "I support GPU-accelerated inference concepts with CUDA and TensorRT FP16 optimization.",
      "I provide bounding boxes, confidence scores, and FPS monitoring.",
      "I include annotation utility support for converting masks to YOLO bounding boxes."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/real-time-pothole-detection"
  },
  {
    title: "Scikit-Learn Hands-On Guide",
    slug: "scikitlearn-handson-guide",
    category: "Machine Learning",
    summary:
      "Beginner-friendly machine learning guide turning ML theory into practical notebooks with Scikit-Learn and XGBoost.",
    architecture:
      "Algorithm-specific notebooks walk through data loading, preprocessing, training, prediction, evaluation, visualization, and key takeaways.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    bullets: [
      "I cover regression, classification, clustering, ensemble learning, and boosting examples.",
      "I include notebooks for KNN, SVM, Naive Bayes, Random Forest, K-Means, Linear Regression, Logistic Regression, and XGBoost.",
      "I designed it as a practical bridge from ML concepts to implementation."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/scikitlearn-handson-guide"
  }
];

export const research = {
  title:
    "An Analytical Study of AI-Driven Process Engineering for Automation and Optimization of IT Operations (AIOps)",
  course: "ITMM 572: Process Engineering for IT Managers",
  institution: "Illinois Institute of Technology",
  date: "March 26, 2026",
  summary:
    "My process-engineering analysis of AIOps explores how observability, machine learning, LLM-based reasoning, workflow orchestration, governance, and feedback loops can reduce alert noise, shorten incident cycles, remove toil, and improve reliability.",
  topics: [
    "AIOps",
    "Process Engineering",
    "Incident Management",
    "Root Cause Analysis",
    "LLM-based Operations",
    "Observability",
    "Governance",
    "SRE",
    "Automation Boundaries"
  ],
  concepts: [
    "Telemetry normalization",
    "Event correlation",
    "Decision orchestration",
    "Feedback learning loops",
    "Human-centered operational integration",
    "Risk controls for agentic systems"
  ],
  url: siteConfig.researchUrl
};

export const certifications = [
  {
    name: "AWS Certified Data Engineer - Associate",
    issuer: "Amazon Web Services",
    status: "Certified",
    credentialUrl: "https://www.credly.com/badges/017bc7a0-a378-4cfa-abb0-bc968c20d7da/public_url"
  },
  {
    name: "Google Data Analytics Professional Certificate",
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
    details: ["Focus: cloud data engineering, analytics engineering, and AI data infrastructure"]
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Visvesvaraya Technological University",
    location: "Bengaluru, India",
    dates: "Jul 2019 - Aug 2023",
    details: ["Computer science foundation for software engineering, data systems, and applied machine learning"]
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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export const suggestedQuestions = [
  "What are your strongest data engineering projects?",
  "What experience do you have with AWS?",
  "Tell me about your RAG experience.",
  "What is your AIOps research about?",
  "Are you open to full-time roles?",
  "What technologies have you used?"
];

export const achievementCards = [
  {
    icon: Award,
    label: "Certified",
    value: "AWS Data Engineer",
    text: "Cloud-native data engineering credential backed by hands-on AWS pipeline work."
  },
  {
    icon: Database,
    label: "Lakehouse",
    value: "Databricks + Snowflake",
    text: "I build medallion, dimensional, streaming, and analytics-ready data models."
  },
  {
    icon: GraduationCap,
    label: "Research",
    value: "AIOps + PINNs",
    text: "I connect AI systems, process engineering, and scientific deep learning workflows."
  }
];
