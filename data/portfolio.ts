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
  title: "Shreevikas Jagadish | Data Scientist & AI-ML Professional",
  description:
    "Portfolio of Shreevikas Jagadish, a Data Scientist and AI-ML professional focused on machine learning, predictive modeling, statistical learning, decision intelligence, MLOps, and cloud-based analytics.",
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
    "Statistical Learning",
    "Decision Intelligence",
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
      "I build supervised and unsupervised learning systems for forecasting, classification, regression, clustering, anomaly detection, and recommendation workflows."
  },
  {
    icon: LineChart,
    title: "Decision intelligence",
    description:
      "I connect predictive outputs with dashboards, statistical analysis, A/B testing, and operational metrics so teams can act on model results with confidence."
  },
  {
    icon: ShieldCheck,
    title: "MLOps and deployment",
    description:
      "I use MLflow, Docker, FastAPI, model monitoring, drift checks, CI/CD, and cloud services to move analytical systems from experiments into production."
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

export type ProjectCategory =
  | "All"
  | "Predictive Modeling"
  | "Decision Intelligence"
  | "Generative AI";

export const projectFilters: ProjectCategory[] = [
  "All",
  "Predictive Modeling",
  "Decision Intelligence",
  "Generative AI"
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
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Intelligent Inventory Demand Forecasting Platform",
    slug: "intelligent-inventory-demand-forecasting-platform",
    category: "Predictive Modeling",
    featured: true,
    highlightLabel: "Forecasting Platform",
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
    featured: true,
    highlightLabel: "Quality Intelligence",
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
    featured: true,
    highlightLabel: "Semantic Retrieval",
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
  "What machine learning experience does Shreevikas have?",
  "What forecasting and predictive modeling work has he done?",
  "Tell me about his MLOps experience.",
  "What AI/ML projects are featured?",
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
