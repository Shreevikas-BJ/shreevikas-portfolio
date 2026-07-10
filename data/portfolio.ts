import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Database,
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
  title: "Shreevikas Jagadish | AI Engineer, Data Scientist & Data Engineer",
  description:
    "Portfolio of Shreevikas Jagadish, an AWS Certified Data Engineer and AI/Data professional building production machine learning models, RAG systems, agentic AI workflows, MLOps platforms, and scalable cloud data pipelines using Python, AWS, Snowflake, Databricks, PySpark, and modern AI frameworks.",
  location: "United States",
  availability: "Open to AI Engineer, Data Scientist, Data Engineer, AI/ML Engineer, and Agent Engineer roles",
  email: "shreevikasjagadish7@gmail.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=shreevikasjagadish7%40gmail.com&su=Portfolio%20Inquiry",
  phone: "+1 (312) 358-3056",
  phoneHref: "tel:+13123583056",
  notificationEmail: "shreevikasj@gmail.com",
  github: "https://github.com/Shreevikas-BJ",
  linkedin: "https://www.linkedin.com/in/shreevikasbj/",
  portfolio: "https://shreevikas-portfolio.vercel.app/",
  profileImage: "/images/profile-picture.jpg",
  resumePath: "/Shreevikas_Jagadish_Resume.pdf",
  resumeFileName: "Shreevikas_Jagadish_Resume.pdf",
  roles: [
    "AI Engineer",
    "Data Scientist",
    "Data Engineer",
    "Machine Learning",
    "Agentic AI",
    "RAG Systems",
    "Cloud Data Pipelines",
    "MLOps",
    "Decision Intelligence"
  ]
};

export const heroStats = [
  { label: "Experience", value: "3+ yrs" },
  { label: "RAG corpus", value: "10K+ docs" },
  { label: "Daily queries", value: "500+" },
  { label: "ELT pipelines", value: "12" }
];

export const aboutHighlights = [
  {
    icon: Bot,
    title: "AI and agentic systems",
    description:
      "I build agentic AI workflows with OpenAI Agents SDK, tool use, report drafting, evaluation loops, and safety-oriented QA patterns."
  },
  {
    icon: BrainCircuit,
    title: "RAG and LLM applications",
    description:
      "I design RAG pipelines with LangChain, vector search, similarity thresholds, citations, fallback handling, response caching, and low-confidence logging."
  },
  {
    icon: Sparkles,
    title: "Machine learning and MLOps",
    description:
      "I deploy ML models for quality prediction and operational analytics using Python, Scikit-Learn, PySpark, SageMaker, CloudWatch, FastAPI, and model monitoring."
  },
  {
    icon: Workflow,
    title: "Data engineering",
    description:
      "I build reliable data workflows across AWS, Snowflake, Airflow, dbt, Databricks, PySpark, Spark SQL, Kafka, and ELT pipelines."
  },
  {
    icon: Cloud,
    title: "Cloud data platforms",
    description:
      "I connect intelligent models with production-ready cloud infrastructure, analytics-ready tables, governed lakehouse layers, APIs, and monitoring."
  }
];

export const skills = [
  {
    category: "Programming",
    icon: BriefcaseBusiness,
    items: ["Python", "SQL", "PySpark", "R"]
  },
  {
    category: "Machine Learning",
    icon: BrainCircuit,
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Optimization",
      "Classification",
      "Regression",
      "Clustering",
      "Time Series Forecasting",
      "Recommendation Systems",
      "Anomaly Detection"
    ]
  },
  {
    category: "Generative AI",
    icon: Bot,
    items: [
      "Large Language Models",
      "RAG",
      "Hugging Face",
      "Transformers",
      "Prompt Engineering",
      "Embedding Models",
      "LangChain",
      "OpenAI Agents SDK",
      "Agentic AI Workflows"
    ]
  },
  {
    category: "Deep Learning",
    icon: Sparkles,
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "XGBoost", "LightGBM"]
  },
  {
    category: "Data Engineering",
    icon: Workflow,
    items: [
      "Apache Spark",
      "Pandas",
      "NumPy",
      "ETL Pipelines",
      "ELT Pipelines",
      "Kafka",
      "Flink",
      "Streaming Data Pipelines",
      "Data Processing",
      "Data Quality",
      "Airflow",
      "dbt"
    ]
  },
  {
    category: "MLOps & Deployment",
    icon: ShieldCheck,
    items: ["MLflow", "Docker", "Kubernetes", "FastAPI", "Model Serving", "Model Monitoring", "CI/CD"]
  },
  {
    category: "Cloud & Data Platforms",
    icon: Cloud,
    items: [
      "AWS S3",
      "AWS Glue",
      "AWS SageMaker",
      "AWS EC2",
      "AWS Redshift",
      "AWS CloudWatch",
      "AWS Lambda",
      "Azure",
      "Databricks",
      "Snowflake",
      "BigQuery",
      "Grafana"
    ]
  },
  {
    category: "Visualization & Analytics",
    icon: BarChart3,
    items: ["Power BI", "Tableau", "Matplotlib", "Plotly", "Statistical Analysis", "A/B Testing"]
  },
  {
    category: "Databases & Tools",
    icon: Database,
    items: [
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "MongoDB",
      "Git",
      "Linux",
      "Jira",
      "Confluence",
      "REST APIs",
      "Agile",
      "Scrum"
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
    location: "USA - Remote",
    dates: "Jul 2025 - Nov 2025",
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
    metrics: ["10K+ documents", "500+ daily queries", "30% reliability gain", "25% faster UI/API iteration"],
    bullets: [
      "I led a 4-member team building LangChain RAG pipelines for 10K+ real estate documents, supporting 500+ daily queries.",
      "I improved document upload reliability by 30% using AWS Lambda, S3, DynamoDB, vector refresh, and MCP error alerts.",
      "I reduced UI/API iteration time by 25% with Codex-assisted FastAPI, Pydantic, pytest, logging, and error handling.",
      "I improved RAG answer quality through similarity threshold optimization, citation validation, response caching, fallback handling, and low-confidence query logging.",
      "I built an Agentic AI system using OpenAI Agents SDK to draft and evaluate reports and create Gmail drafts through MCP-based tool use."
    ]
  },
  {
    title: "Data Scientist",
    company: "Whiterock Technologies",
    location: "India",
    dates: "Mar 2021 - Jul 2024",
    tags: [
      "Python",
      "SQL",
      "Scikit-Learn",
      "PySpark",
      "AWS",
      "SageMaker",
      "CloudWatch",
      "Snowflake",
      "Airflow",
      "dbt",
      "Pandas",
      "ETL",
      "ELT"
    ],
    metrics: [
      "22% defect accuracy gain",
      "98.8% pipeline uptime",
      "12 ELT pipelines",
      "200+ users",
      "45% lower data prep time",
      "40% faster reporting"
    ],
    bullets: [
      "I engineered and deployed ML models for manufacturing quality prediction using Python, Scikit-Learn, PySpark, SageMaker, and CloudWatch, improving defect detection accuracy by 22% while maintaining 98.8% pipeline uptime.",
      "I consolidated manufacturing data from multiple systems by managing 12 AWS-to-Snowflake ELT pipelines using Airflow and dbt, reducing data preparation time by 45% and improving reporting speed by 40% for 200+ users.",
      "I optimized classification and regression models through feature selection and hyperparameter tuning, improving prediction precision across production and maintenance use cases by 17%.",
      "I constructed statistical analyses and visualization dashboards to measure process stability, helping engineering teams identify recurring operational trends and prioritize corrective actions.",
      "I automated recurring analytics workflows using SQL, Pandas, and scheduled data pipelines, decreasing manual processing effort by 55%."
    ]
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
    category: "AI Agents / AI Safety / LLM Evaluation",
    filters: ["AI Agents", "RAG & GenAI"],
    featured: true,
    highlightLabel: "Featured AI Safety",
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
    highlightLabel: "Featured FinOps AI",
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
    highlightLabel: "Featured RAG",
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
    highlightLabel: "Featured Data Engineering",
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
    highlightLabel: "Featured ELT",
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
    details: [
      "Graduate study focused on information technology management, cloud data platforms, applied analytics, and production-ready technology systems."
    ]
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Visvesvaraya Technological University",
    location: "India",
    dates: "Graduation: Aug 2023",
    details: [
      "Computer science foundation for software engineering, data systems, machine learning, and applied analytics."
    ]
  }
];

export const certifications = [
  {
    name: "AWS Certified Data Engineer",
    issuer: "AWS",
    details:
      "Certification supporting my foundation in AWS data engineering, cloud data platforms, and production data workflows."
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
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export const suggestedQuestions = [
  "What AI agent projects has Shreevikas built?",
  "Tell me about his RAG systems.",
  "What data engineering experience does he have?",
  "How does he use AWS and cloud data platforms?",
  "Can I view his resume?"
];

export const achievementCards = [
  {
    icon: Bot,
    label: "Agentic AI",
    value: "OpenAI Agents SDK",
    text: "I build agent workflows that draft, evaluate, and use tools for production-oriented AI tasks."
  },
  {
    icon: BrainCircuit,
    label: "RAG Systems",
    value: "10K+ documents",
    text: "I improve retrieval quality with thresholds, citations, caching, fallback handling, and low-confidence logging."
  },
  {
    icon: Workflow,
    label: "Data Platforms",
    value: "AWS + Snowflake",
    text: "I connect ML and analytics systems to reliable ELT pipelines, lakehouse layers, and monitored cloud workflows."
  }
];
