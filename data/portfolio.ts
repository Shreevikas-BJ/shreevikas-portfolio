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
  name: "Shreevikas Bangalore Jagadish",
  shortName: "Shreevikas",
  title: "Shreevikas Bangalore Jagadish | Data Engineer & AI Data Engineer",
  description:
    "Portfolio of Shreevikas Bangalore Jagadish, a Data Engineer and AI Data Engineer specializing in scalable data pipelines, cloud data platforms, RAG systems, AIOps research, and analytics engineering.",
  location: "Chicago, IL",
  availability: "Open to relocation",
  email: "shreevikasjagadish7@gmail.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=shreevikasjagadish7%40gmail.com&su=Portfolio%20Inquiry",
  notificationEmail: "shreevikasj@gmail.com",
  github: "https://github.com/Shreevikas-BJ",
  linkedin: "https://www.linkedin.com/in/shreevikasbj/",
  resumeUrl: "/Shreevikas_Bangalore_Jagadish_Resume.pdf",
  researchUrl: "/research/aiops-research-paper.pdf",
  profileImage: "/images/profile-picture.jpg",
  roles: ["Data Engineer", "Analytics Engineer", "AI Data Engineer"]
};

export const heroStats = [
  { label: "Experience", value: "2+ yrs" },
  { label: "Cloud pipelines", value: "12+" },
  { label: "Daily events", value: "5M+" },
  { label: "Data migrated", value: "3TB+" }
];

export const aboutHighlights = [
  {
    icon: Database,
    title: "Cloud data platforms",
    description:
      "Builds AWS, Snowflake, Databricks, Kafka, Airflow, and dbt pipelines that move raw data into governed analytics-ready layers."
  },
  {
    icon: BrainCircuit,
    title: "AI data infrastructure",
    description:
      "Designs RAG pipelines, vector search workflows, FastAPI services, and document-grounded AI systems with reliability controls."
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description:
      "Focuses on data quality, CI/CD gates, observability, schema validation, reconciliation, and production maintainability."
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
      "dbt",
      "Kafka",
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
      "DynamoDB",
      "Amazon Athena",
      "SNS/SQS",
      "CloudWatch",
      "IAM",
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
      "OpenAI Embeddings",
      "RAG",
      "Scikit-learn",
      "PyTorch",
      "PyTorch GPU",
      "XGBoost",
      "DistilBERT",
      "Physics-Informed Neural Networks",
      "NVIDIA PhysicsNeMo",
      "CUDA Acceleration"
    ]
  },
  {
    category: "DevOps & Backend",
    icon: BriefcaseBusiness,
    items: [
      "Python",
      "SQL",
      "FastAPI",
      "Pydantic",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "pytest",
      "REST APIs",
      "Structured Logging",
      "Grafana"
    ]
  },
  {
    category: "BI & Analytics",
    icon: BarChart3,
    items: [
      "Power BI",
      "Tableau",
      "PostgreSQL",
      "MongoDB",
      "DuckDB",
      "Great Expectations",
      "Data Contracts",
      "Schema Validation",
      "Reconciliation",
      "Data Lineage",
      "Data Observability",
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
      "Work on Physics-Informed Neural Networks for power-system dynamics, combining data engineering, machine learning, and scientific computing.",
      "Prepare, validate, and transform simulation and time-series datasets into model-ready inputs for PyTorch-based training pipelines.",
      "Use CUDA acceleration and NVIDIA PhysicsNeMo to support GPU-based deep learning experiments.",
      "Improve training efficiency, prediction accuracy, and scalability for large-scale power-system simulation workflows.",
      "Build structured data workflows that support reproducible deep learning experiments and scientific modeling."
    ]
  },
  {
    title: "AI Data Engineer Intern",
    company: "NeuralSeek",
    location: "Miami, FL (Remote)",
    dates: "Jul 2025 - Oct 2025",
    tags: ["RAG", "LangChain", "FAISS", "AWS Lambda", "FastAPI", "Pydantic"],
    bullets: [
      "Built RAG data pipelines using LangChain, OpenAI embeddings, and FAISS to ingest, chunk, validate, and index 10K+ real estate documents.",
      "Supported 500+ daily queries at sub-second latency and reduced manual knowledge lookup time by 35%.",
      "Developed serverless ingestion workflows on AWS Lambda, S3, and DynamoDB for document processing, metadata persistence, embedding refreshes, and FAISS index updates.",
      "Productionized FastAPI services with Pydantic schema contracts, structured JSON logging, and pytest coverage for downstream AI application teams."
    ]
  },
  {
    title: "Data Engineer",
    company: "Whiterock Technologies",
    location: "Bengaluru, India",
    dates: "Aug 2022 - Apr 2024",
    tags: ["AWS", "Snowflake", "Airflow", "dbt", "Kafka", "PySpark"],
    bullets: [
      "Built 12+ cloud ELT pipelines using AWS S3, Glue, PySpark, Snowflake, and Airflow, reducing reporting latency by 40% for 200+ business stakeholders.",
      "Re-engineered batch ingestion into event-driven streaming workflows using SNS/SQS, Lambda, Kafka, and PySpark Structured Streaming, processing 5M+ daily events.",
      "Supported 3TB+ healthcare Oracle-to-Snowflake migration with CDC loads, SCD Type-2 history, table reconciliation, checksum validation, and rollback-ready cutover checks across 50+ tables.",
      "Architected 40+ dbt transformations with CTEs, window functions, dimensional models, and automated tests integrated with Jenkins/GitHub Actions quality gates.",
      "Optimized PySpark and Snowflake workloads on 100M+ row datasets using partition pruning, broadcast joins, query tuning, and incremental processing."
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
      "Processes customer, product, and fact datasets through full and incremental loading workflows.",
      "Creates denormalized FMCG-style analytics tables for parent-company reporting.",
      "Demonstrates governed gold-layer serving for dashboards and AI-assisted analytics."
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
      "Simulates streaming market records through Kafka producer and consumer workflows.",
      "Uses S3 as a data lake layer and Glue Data Catalog for schema discovery.",
      "Enables serverless SQL analysis of streamed stock market data with Athena."
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
      "Models marketplace data through bronze, silver, and gold layers.",
      "Uses incremental dbt models, snapshots, tests, macros, and lineage documentation.",
      "Builds analytics-ready fact and one-big-table models for reporting."
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
      "Uses similarity thresholds to refuse unsupported questions instead of guessing.",
      "Provides citation-based responses for traceability in learning environments.",
      "Designed for reliable academic document Q&A and internal knowledge assistants."
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
      "Builds a domain-specific RAG pipeline for health-related question answering.",
      "Grounds responses in local trusted medical documents.",
      "Includes a clear educational-purpose medical disclaimer."
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
      "Classifies VPN, Wi-Fi, printer, password reset, and related support tickets.",
      "Uses cross-encoder reranking to improve retrieved support context.",
      "Blocks unsafe commands and allows only controlled diagnostic actions."
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
      "Ranks customers by expected retained value using churn risk, CLV, and positive uplift.",
      "Segments customers into business-friendly groups such as persuadable, sure thing, lost cause, and do-not-disturb.",
      "Includes budget-based campaign simulation and downloadable target customer lists."
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
      "Builds lag features, rolling statistics, and time-series forecasting features.",
      "Compares baseline and XGBoost models using rolling backtests.",
      "Writes forecasts and monitoring metrics back to Snowflake for dashboarding."
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
      "Supports GPU-accelerated inference concepts with CUDA and TensorRT FP16 optimization.",
      "Provides bounding boxes, confidence scores, and FPS monitoring.",
      "Includes annotation utility support for converting masks to YOLO bounding boxes."
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
      "Covers regression, classification, clustering, ensemble learning, and boosting examples.",
      "Includes notebooks for KNN, SVM, Naive Bayes, Random Forest, K-Means, Linear Regression, Logistic Regression, and XGBoost.",
      "Designed as a practical bridge from ML concepts to implementation."
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
    "A process-engineering analysis of AIOps as an operating model for IT operations, showing how observability, machine learning, LLM-based reasoning, workflow orchestration, governance, and feedback loops can reduce alert noise, shorten incident cycles, remove toil, and improve reliability.",
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
  },
  {
    name: "Databricks Certified Associate Developer for Apache Spark",
    issuer: "Databricks",
    status: "In Progress - Expected May 2026",
    credentialUrl: ""
  }
];

export const education = [
  {
    degree: "Master of Information Technology",
    school: "Illinois Institute of Technology",
    location: "Chicago, IL",
    dates: "Aug 2024 - May 2026",
    details: ["GPA: 3.88", "Focus: cloud data engineering, analytics engineering, and AI data infrastructure"]
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
  "What are Shreevikas's strongest data engineering projects?",
  "What experience does Shreevikas have with AWS?",
  "Tell me about Shreevikas's RAG experience.",
  "What is Shreevikas's AIOps research about?",
  "Is Shreevikas open to full-time roles?",
  "What technologies has Shreevikas used?"
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
    text: "Builds medallion, dimensional, streaming, and analytics-ready data models."
  },
  {
    icon: GraduationCap,
    label: "Research",
    value: "AIOps + PINNs",
    text: "Connects AI systems, process engineering, and scientific deep learning workflows."
  }
];
