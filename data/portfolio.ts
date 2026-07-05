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
  title: "Shreevikas Jagadish | Data Scientist & AI-ML Engineer Portfolio",
  description:
    "Portfolio of Shreevikas Jagadish, Data Scientist and AI-ML professional building machine learning systems, forecasting pipelines, data engineering platforms, RAG applications, and cloud analytics solutions.",
  location: "United States",
  availability: "Open to Data Scientist and AI-ML roles",
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
  requestResumeMessage:
    "Thank you for your interest. For my latest resume, please reach out to me directly at shreevikasjagadish7@gmail.com.",
  roles: [
    "Data Scientist",
    "AI-ML Professional",
    "Predictive Modeling",
    "Forecasting",
    "Data Engineering",
    "Cloud Data Platforms",
    "PySpark / Snowflake / Databricks",
    "Statistical Learning",
    "Decision Intelligence",
    "RAG Applications",
    "MLOps"
  ]
};

export const heroStats = [
  { label: "Experience", value: "4 yrs" },
  { label: "Forecast accuracy", value: "+24%" },
  { label: "Experiment cycles", value: "-40%" },
  { label: "Reporting effort", value: "-60%" }
];

export const aboutHighlights = [
  {
    icon: BrainCircuit,
    title: "Machine learning systems",
    description:
      "I build production-ready ML systems for forecasting, classification, regression, clustering, anomaly detection, and recommendation workflows."
  },
  {
    icon: LineChart,
    title: "Decision intelligence",
    description:
      "I connect predictive outputs with dashboards, statistical analysis, A/B testing, and operational metrics so teams can act on model results with confidence."
  },
  {
    icon: ShieldCheck,
    title: "MLOps, RAG, and deployment",
    description:
      "I use MLflow, Docker, FastAPI, model monitoring, RAG, vector search, CI/CD, and cloud services to move analytical systems from experiments into production."
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
      "LangChain"
    ]
  },
  {
    category: "Deep Learning",
    icon: Sparkles,
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM"]
  },
  {
    category: "Data Engineering",
    icon: Workflow,
    items: ["Apache Spark", "Pandas", "NumPy", "ETL Pipelines", "Data Processing", "Data Quality"]
  },
  {
    category: "MLOps & Deployment",
    icon: ShieldCheck,
    items: ["MLflow", "Docker", "Kubernetes", "FastAPI", "Model Serving", "Model Monitoring", "CI/CD"]
  },
  {
    category: "Cloud & Data Platforms",
    icon: Cloud,
    items: ["AWS S3", "SageMaker", "EC2", "Lambda", "Azure", "Databricks", "Snowflake", "BigQuery"]
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
    title: "Data Scientist / AI-ML",
    company: "Tech Data",
    location: "United States",
    dates: "Jan 2026 - Present",
    tags: ["Python", "SQL", "PySpark", "Apache Spark", "MLflow", "FastAPI", "Docker", "Power BI"],
    metrics: ["24% accuracy gain", "40% faster experiments", "38% lower latency", "60% less reporting effort"],
    bullets: [
      "I designed demand forecasting models using Python, SQL, and PySpark that improved inventory planning accuracy by 24% across multiple product categories while reducing forecast volatility for regional supply operations.",
      "I built scalable feature engineering and model training pipelines with Apache Spark and MLflow, shortening experimentation cycles by 40% and enabling consistent model version tracking across production releases.",
      "I integrated predictive services into business applications through FastAPI and Docker, decreasing batch processing latency by 38% while supporting real-time operational decision making.",
      "I evaluated model performance through statistical validation, drift monitoring, and A/B testing, increasing prediction reliability by 18% without affecting production service availability.",
      "I partnered with analytics, supply chain, and product teams to translate business requirements into production-ready analytical solutions, accelerating data-driven planning across enterprise operations.",
      "I developed interactive Power BI dashboards combining forecasting outputs, operational metrics, and exception analysis, reducing manual reporting efforts by 60% for executive stakeholders."
    ]
  },
  {
    title: "Data Scientist",
    company: "Bosch",
    location: "India",
    dates: "Mar 2021 - Jul 2024",
    tags: ["Python", "Scikit-learn", "SQL", "Pandas", "ETL", "Statistical Analysis", "Dashboards"],
    metrics: ["22% defect accuracy gain", "45% faster data prep", "17% precision gain", "55% less manual effort"],
    bullets: [
      "I engineered machine learning models for manufacturing quality prediction using Python and Scikit-learn, improving defect identification accuracy by 22% across high-volume production environments.",
      "I consolidated structured manufacturing datasets from multiple operational systems through automated ETL workflows, reducing data preparation time by 45% while strengthening data consistency for analytical workloads.",
      "I optimized classification and regression models through feature selection and hyperparameter tuning, improving prediction precision across production and maintenance use cases by 17%.",
      "I constructed statistical analyses and visualization dashboards to measure process stability, enabling engineering teams to identify recurring operational trends and prioritize corrective actions more efficiently.",
      "I automated recurring analytics workflows with SQL, Pandas, and scheduled data pipelines, decreasing manual processing effort by 55% while improving reporting accuracy for manufacturing leadership."
    ]
  }
];

export type ProjectFilter =
  | "Featured"
  | "Data Science / ML"
  | "Data Engineering"
  | "GenAI / RAG / Agents"
  | "Analytics / Dashboards";

export const projectFilters: ProjectFilter[] = [
  "Featured",
  "Data Science / ML",
  "Data Engineering",
  "GenAI / RAG / Agents",
  "Analytics / Dashboards"
];

export type ProjectCategory =
  | "Predictive Modeling"
  | "Decision Intelligence"
  | "Generative AI"
  | "Data Science / MLOps"
  | "Data Engineering"
  | "Data Engineering / Streaming"
  | "Data Science / Customer Analytics"
  | "Data Science / Classification"
  | "Data Science / Time Series"
  | "Data Science / Regression"
  | "NLP / Deep Learning"
  | "Computer Vision / Deep Learning"
  | "GenAI / Data Engineering / Cloud Cost Optimization"
  | "GenAI / RAG / LLM Evaluation"
  | "GenAI / RAG"
  | "AI Agents / RAG"
  | "AI Safety / Agent Evaluation"
  | "SQL / Analytics"
  | "Business Intelligence / Dashboarding";

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
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Intelligent Inventory Demand Forecasting Platform",
    slug: "intelligent-inventory-demand-forecasting-platform",
    category: "Predictive Modeling",
    filters: ["Data Science / ML", "Analytics / Dashboards"],
    highlightLabel: "Resume Project",
    summary:
      "Enterprise demand forecasting platform for inventory optimization across multi-regional distribution networks.",
    architecture:
      "The platform combines Python and PySpark data preparation, XGBoost forecasting, MLflow experiment tracking, FastAPI model delivery, AWS deployment patterns, and dashboards for operational forecast delivery.",
    tech: ["Python", "PySpark", "XGBoost", "MLflow", "FastAPI", "AWS"],
    bullets: [
      "I built an enterprise demand forecasting platform for inventory optimization across multi-regional distribution networks.",
      "I automated model training, deployment, and forecast delivery through scalable production pipelines.",
      "I connected forecasting outputs to interactive operational dashboards for planning and exception analysis."
    ]
  },
  {
    title: "Manufacturing Process Quality Intelligence System",
    slug: "manufacturing-process-quality-intelligence-system",
    category: "Decision Intelligence",
    filters: ["Data Science / ML", "Analytics / Dashboards"],
    highlightLabel: "Resume Project",
    summary:
      "Predictive quality monitoring solution for manufacturing process performance, defect prevention, and engineering visibility.",
    architecture:
      "The system uses Python, Scikit-learn, SQL, Pandas, PostgreSQL, and Tableau to automate statistical analysis, predictive quality monitoring, and production reporting for engineering decision making.",
    tech: ["Python", "Scikit-learn", "SQL", "Pandas", "PostgreSQL", "Tableau"],
    bullets: [
      "I developed a predictive quality monitoring solution for manufacturing process performance and defect prevention.",
      "I automated statistical analysis and production reporting to improve engineering decision making.",
      "I improved process visibility by combining model outputs, operational trends, and recurring quality indicators."
    ]
  },
  {
    title: "Enterprise Knowledge Search Platform",
    slug: "enterprise-knowledge-search-platform",
    category: "Generative AI",
    filters: ["GenAI / RAG / Agents"],
    highlightLabel: "Resume Project",
    summary:
      "Intelligent enterprise document search solution using semantic retrieval and vector-based indexing.",
    architecture:
      "The platform uses Python, LangChain, Hugging Face, vector search, FastAPI, and PostgreSQL to index enterprise documentation and deliver API-driven knowledge retrieval.",
    tech: ["Python", "LangChain", "Hugging Face", "Vector Search", "FastAPI", "PostgreSQL"],
    bullets: [
      "I engineered an intelligent enterprise document search solution using semantic retrieval and vector-based indexing.",
      "I delivered API-driven knowledge retrieval to improve access to technical documentation and operational resources.",
      "I used embedding-based retrieval patterns to make enterprise knowledge easier to search and reuse."
    ]
  },
  {
    title: "Sales Forecasting MLOps Pipeline",
    slug: "sales-forecasting-mlops-pipeline",
    category: "Data Science / MLOps",
    filters: ["Data Science / ML"],
    featured: true,
    highlightLabel: "Featured MLOps",
    summary:
      "Production-style sales forecasting system using PySpark, Snowflake, XGBoost, backtesting, monitoring, and a Streamlit dashboard.",
    architecture:
      "The pipeline combines scalable PySpark processing, Snowflake data warehousing, XGBoost model training, backtesting, monitoring, and a Streamlit dashboard for business-facing forecast exploration.",
    tech: ["Python", "PySpark", "Snowflake", "XGBoost", "MLOps", "Streamlit"],
    bullets: [
      "I built an end-to-end forecasting pipeline with model training, backtesting, and monitoring.",
      "I used PySpark and Snowflake for scalable data processing.",
      "I created a dashboard to make forecasting outputs usable for business users."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/sales-forecasting-mlops-pipeline"
  },
  {
    title: "Databricks Lakeflow Medallion Pipeline",
    slug: "databricks-lakeflow-medallion-pipeline",
    category: "Data Engineering",
    filters: ["Data Engineering"],
    featured: true,
    highlightLabel: "Featured Data Engineering",
    summary:
      "End-to-end Databricks data engineering pipeline using S3, Lakeflow Jobs, Unity Catalog, medallion architecture, and gold-layer analytics.",
    architecture:
      "The project follows medallion architecture from raw ingestion through governed processing and analytics-ready gold tables, using Databricks Lakeflow Jobs and Unity Catalog for lakehouse orchestration and governance.",
    tech: ["Databricks", "AWS S3", "Unity Catalog", "Lakeflow", "Medallion Architecture"],
    bullets: [
      "I built a medallion-style data pipeline from raw ingestion to analytics-ready gold tables.",
      "I used Databricks Lakeflow Jobs and Unity Catalog for governed data processing.",
      "I designed the pipeline for dashboard and Genie-based analytical serving."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline"
  },
  {
    title: "Airbnb Snowflake dbt Pipeline",
    slug: "airbnb-snowflake-dbt-pipeline",
    category: "Data Engineering",
    filters: ["Data Engineering", "Analytics / Dashboards"],
    featured: true,
    highlightLabel: "Featured ELT",
    summary:
      "End-to-end Airbnb analytics pipeline using Snowflake, dbt, AWS S3, medallion architecture, incremental models, SCD Type 2 snapshots, and analytics-ready gold tables.",
    architecture:
      "The pipeline uses AWS S3 for staged data, Snowflake for warehousing, dbt for transformation, incremental models for efficient processing, SCD Type 2 snapshots for history, and gold tables for reporting and downstream analysis.",
    tech: ["Snowflake", "dbt", "AWS S3", "Medallion Architecture", "SCD Type 2"],
    bullets: [
      "I built a modern ELT pipeline using Snowflake and dbt.",
      "I implemented incremental models and SCD Type 2 snapshots.",
      "I created analytics-ready gold layer tables for reporting and downstream analysis."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/airbnb-snowflake-dbt-pipeline"
  },
  {
    title: "AI FinOps Copilot",
    slug: "ai-finops-copilot",
    category: "GenAI / Data Engineering / Cloud Cost Optimization",
    filters: ["GenAI / RAG / Agents", "Data Engineering", "Analytics / Dashboards"],
    featured: true,
    highlightLabel: "Featured AI Ops",
    summary:
      "AI-powered FinOps copilot for cloud cost analysis, waste detection, savings estimation, and action-ready reporting.",
    architecture:
      "The system applies AI workflow design to cloud cost intelligence, identifying waste, cost spikes, savings opportunities, and report-ready findings for engineering and finance stakeholders.",
    tech: ["TypeScript", "AI Agents", "Cloud Cost Analysis", "FinOps", "Reporting"],
    bullets: [
      "I built a cloud cost intelligence system to identify waste, cost spikes, and savings opportunities.",
      "I generated action-oriented reports for engineering and finance teams.",
      "I demonstrated practical AI workflow design for operational decision support."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/ai-finops-copilot"
  },
  {
    title: "ML Course Document RAG",
    slug: "ml-course-document-rag",
    category: "GenAI / RAG / LLM Evaluation",
    filters: ["GenAI / RAG / Agents"],
    featured: true,
    highlightLabel: "Featured RAG",
    summary:
      "Trust-first RAG system for ML course documents with similarity gating, citation-based answers, refusal handling, and multi-LLM judge fallback.",
    architecture:
      "The system uses retrieval-augmented generation patterns with vector search, similarity gating, citation grounding, refusal handling, and multi-LLM judge fallback to prioritize answer quality and trust.",
    tech: ["TypeScript", "RAG", "Vector Search", "LLM Evaluation", "Citation Grounding"],
    bullets: [
      "I built a retrieval-augmented generation system focused on grounded, citation-based answers.",
      "I added similarity gating and refusal handling to reduce hallucinations.",
      "I included multi-LLM judge fallback for answer quality and trust evaluation."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/ml-course-document-rag"
  },
  {
    title: "Subscription Value Brain",
    slug: "subscription-value-brain",
    category: "Data Science / Customer Analytics",
    filters: ["Data Science / ML", "Analytics / Dashboards"],
    featured: true,
    highlightLabel: "Featured Decision Intelligence",
    summary:
      "End-to-end customer value engine combining churn prediction, CLV estimation, and uplift modeling to identify which customers should receive retention offers.",
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
    title: "Customer Churn Prediction ML",
    slug: "customer-churn-prediction-ml",
    category: "Data Science / Classification",
    filters: ["Data Science / ML"],
    summary:
      "Machine learning project to predict telecom customer churn using customer behavior, demographics, preprocessing, and classification models.",
    architecture:
      "The project follows a supervised machine learning workflow with exploratory analysis, preprocessing, feature engineering, model training, and evaluation for churn classification.",
    tech: ["Python", "Scikit-learn", "Classification", "Churn Prediction", "EDA"],
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
    filters: ["Data Science / ML", "Analytics / Dashboards"],
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
    title: "House Price Predictor XGBoost",
    slug: "house-price-predictor-xgboost",
    category: "Data Science / Regression",
    filters: ["Data Science / ML"],
    summary:
      "Machine learning regression project that predicts house prices using XGBoost, feature engineering, and RMSE evaluation.",
    architecture:
      "The project applies feature engineering, XGBoost regression, and RMSE-based evaluation to predict house prices from structured housing data.",
    tech: ["Python", "XGBoost", "Regression", "Feature Engineering", "RMSE"],
    bullets: [
      "I built a regression model for house price prediction.",
      "I applied feature engineering and model evaluation.",
      "I created a practical predictive modeling project for structured data."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/house-price-predictor-xgboost"
  },
  {
    title: "BERT Sentiment Analysis App",
    slug: "bert-sentiment-analysis-app",
    category: "NLP / Deep Learning",
    filters: ["Data Science / ML", "GenAI / RAG / Agents"],
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
    title: "Real-Time Pothole Detection",
    slug: "real-time-pothole-detection",
    category: "Computer Vision / Deep Learning",
    filters: ["Data Science / ML"],
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
    title: "Medical RAG Chatbot",
    slug: "medical-rag-chatbot",
    category: "GenAI / RAG",
    filters: ["GenAI / RAG / Agents"],
    summary:
      "RAG-based medical chatbot using FAISS and GPT to retrieve health-related answers from trusted medical documents with fallback LLM reasoning.",
    architecture:
      "The chatbot uses FAISS vector retrieval as the primary answer source and fallback LLM reasoning for health-related document question answering.",
    tech: ["Python", "FAISS", "GPT", "RAG", "Vector Search"],
    bullets: [
      "I built a document-grounded medical question-answering chatbot.",
      "I used FAISS for vector retrieval.",
      "I added fallback reasoning while keeping retrieval as the main answer source."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/medical-rag-chatbot"
  },
  {
    title: "IT Helpdesk AI Agent",
    slug: "it-helpdesk-ai-agent",
    category: "AI Agents / RAG",
    filters: ["GenAI / RAG / Agents"],
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
    title: "AgentShield",
    slug: "agentshield",
    category: "AI Safety / Agent Evaluation",
    filters: ["GenAI / RAG / Agents"],
    summary:
      "AI agent QA and safety testing platform for evaluating agent behavior, failure modes, and risk before launch.",
    architecture:
      "The platform focuses on agent evaluation, LLM testing, risk discovery, and guardrails so teams can identify unsafe or unreliable agent behavior before launch.",
    tech: ["TypeScript", "AI Safety", "Agent Evaluation", "LLM Testing", "Guardrails"],
    bullets: [
      "I built a testing platform for identifying risky or unreliable agent behavior.",
      "I demonstrated interest in LLM safety, evaluation, and AI guardrails.",
      "I showed practical understanding of production AI risks."
    ],
    repoUrl: "https://github.com/Shreevikas-BJ/agentshield"
  },
  {
    title: "COVID-19 Vaccination SQL Analysis",
    slug: "covid19-vaccination-sql-analysis",
    category: "SQL / Analytics",
    filters: ["Analytics / Dashboards"],
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
  },
  {
    title: "Plant Co Performance Dashboard",
    slug: "plant-co-performance-dashboard",
    category: "Business Intelligence / Dashboarding",
    filters: ["Analytics / Dashboards"],
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
  }
];

export const education = [
  {
    degree: "Master of Science in Information Technology & Management",
    school: "Illinois Institute of Technology",
    location: "USA",
    dates: "Graduation: Dec 2025",
    details: [
      "Graduate study focused on information technology management, data platforms, analytics, and applied technology systems."
    ]
  },
  {
    degree: "Bachelor in Computer Science",
    school: "Visvesvaraya Technological University",
    location: "India",
    dates: "Graduation: Aug 2023",
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
  { label: "Contact", href: "#contact" }
];

export const suggestedQuestions = [
  "What are Shreevikas's strongest ML projects?",
  "Tell me about his data engineering projects.",
  "What RAG and AI agent projects has he built?",
  "How does his work support business decisions?",
  "How can I request his resume?"
];

export const achievementCards = [
  {
    icon: BrainCircuit,
    label: "Modeling",
    value: "Forecasting + ML",
    text: "I build predictive systems for inventory planning, quality prediction, and operational decision making."
  },
  {
    icon: Workflow,
    label: "MLOps",
    value: "MLflow + FastAPI",
    text: "I move models from experiments into services, dashboards, and monitored production workflows."
  },
  {
    icon: BarChart3,
    label: "Analytics",
    value: "Power BI + Tableau",
    text: "I translate model outputs into decision-ready dashboards for business and engineering teams."
  }
];
