import { siteConfig } from "./portfolio";

export const resumeRequestMessage = `You can view or download my latest resume here: [${siteConfig.resumeFileName}](${siteConfig.resumePath}).`;

export const contactFallback = `Please contact Shreevikas directly for further information.

Email: ${siteConfig.email}
Phone: ${siteConfig.phone}`;

export const refusalMessage =
  `I can only answer questions about my professional background, projects, skills, education, certifications, and experience. For anything specific, please contact me directly at ${siteConfig.email}.`;

export const chatbotContext = `
Identity:
I am Shreevikas Jagadish, based in the United States. I position myself as an AI Engineer, Data Scientist, and Data Engineer focused on machine learning, agentic AI, RAG systems, data engineering, MLOps, cloud data platforms, and decision intelligence. Email: ${siteConfig.email}. Phone: ${siteConfig.phone}. GitHub: ${siteConfig.github}. LinkedIn: ${siteConfig.linkedin}. Portfolio: ${siteConfig.portfolio}.

Summary:
I am an AWS Certified Data Engineer and AI/Data professional with 3+ years of experience building production ML models, RAG systems, agentic AI workflows, and scalable cloud data pipelines. My work spans data ingestion, transformation, machine learning, RAG systems, AI agents, model deployment, evaluation, monitoring, production APIs, and cloud infrastructure. Key tools include Python, AWS, Snowflake, Databricks, PySpark, dbt, LangChain, OpenAI Agents SDK, FastAPI, Pydantic, pytest, SageMaker, CloudWatch, Airflow, and vector search.

Experience:
AI Engineer Intern, NeuralSeek, USA - Remote, Jul 2025-Nov 2025: I led a 4-member team building LangChain RAG pipelines for 10K+ real estate documents, supporting 500+ daily queries. I improved document upload reliability by 30% with AWS Lambda, S3, DynamoDB, vector refresh, and MCP error alerts. I reduced UI/API iteration time by 25% with Codex-assisted FastAPI, Pydantic, pytest, logging, and error handling. I improved RAG answer quality through similarity thresholds, citation validation, response caching, fallback handling, and low-confidence query logging. I built an Agentic AI system using OpenAI Agents SDK to draft and evaluate reports and create Gmail drafts through MCP-based tool use.

Data Scientist, Whiterock Technologies, India, Mar 2021-Jul 2024: I engineered and deployed ML models for manufacturing quality prediction using Python, Scikit-Learn, PySpark, SageMaker, and CloudWatch, improving defect detection accuracy by 22% while maintaining 98.8% pipeline uptime. I managed 12 AWS-to-Snowflake ELT pipelines using Airflow and dbt, reducing data preparation time by 45% and improving reporting speed by 40% for 200+ users. I optimized classification and regression models through feature selection and hyperparameter tuning, improving prediction precision by 17%. I built statistical analyses and visualization dashboards for process stability and automated recurring analytics workflows with SQL, Pandas, and scheduled data pipelines, decreasing manual processing effort by 55%.

Featured projects:
AgentShield: Multi-LLM agent QA platform built with Next.js, TypeScript, Groq, Gemini, Supabase, Prisma, Zod, Vitest, and Playwright. It tests 6 failure modes and 3 red-team scan levels for pre-launch AI agent testing, including prompt injection, privacy leakage, unsafe tool use, hallucination, policy risk, and regression reporting. Repository: https://github.com/Shreevikas-BJ/agentshield.

AI FinOps Copilot: Read-only AI FinOps copilot built with Next.js, TypeScript, Groq, serverless APIs, cloud cost analytics, and Vercel. It analyzes 24 cloud resources across 5 teams and surfaces 15 savings findings and cost spikes with owner-aware savings plans, executive summaries, and ticket-ready recommendations without requiring AWS credentials. Repository: https://github.com/Shreevikas-BJ/ai-finops-copilot.

AI/ML Knowledge RAG Assistant: Cloud-native RAG assistant built with Next.js, Supabase pgvector, Jina Embeddings, Groq, RAG, and vector search. It includes Top-3 retrieval, 0.6 similarity gating, clickable citations, refusal handling, exact cache, semantic cache, and embedding cache. Repository: https://github.com/Shreevikas-BJ/ml-course-document-rag.

Databricks Lakeflow Medallion Pipeline: S3-to-Databricks pipeline using AWS S3, Databricks, Lakeflow Jobs, Unity Catalog, PySpark, and Spark SQL. It processes FMCG data through Bronze, Silver, and Gold layers with full and incremental loads, governed data, analytics-ready Gold tables, dashboard support, parent-company reporting, and Databricks Genie exploration. Repository: https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline.

Airbnb Snowflake dbt Pipeline: End-to-end Airbnb analytics pipeline using AWS S3, Snowflake, dbt, SQL, and Jinja. It transforms bookings, hosts, and listings data into BI-ready analytical models with incremental dbt models, SCD Type 2 snapshots, dbt testing, custom macros, lineage documentation, fact tables, and one-big-table analytical models. Repository: https://github.com/Shreevikas-BJ/airbnb-snowflake-dbt-pipeline.

Additional projects include Sales Forecasting MLOps Pipeline, Subscription Value Brain, Stock Market Kafka Data Pipeline, IT Helpdesk AI Agent, Medical RAG Chatbot, Real-Time Pothole Detection, BERT Sentiment Analysis App, Customer Churn Prediction ML, NVIDIA Stock Forecasting, Plant Co Performance Dashboard, and COVID-19 Vaccination SQL Analysis.

Education:
Master of Science in Information Technology & Management, Illinois Institute of Technology, United States, graduation May 2026. Bachelor of Computer Science, Visvesvaraya Technological University, India, graduation Aug 2023.

Certification:
AWS Certified Data Engineer.

Core skills:
Programming: Python, SQL, PySpark, R.
Machine Learning: supervised learning, unsupervised learning, feature engineering, model optimization, classification, regression, clustering, time series forecasting, recommendation systems, anomaly detection.
Generative AI: LLMs, RAG, Hugging Face, Transformers, prompt engineering, embedding models, LangChain, OpenAI Agents SDK, agentic AI workflows.
Deep Learning: TensorFlow, PyTorch, Scikit-Learn, XGBoost, LightGBM.
Data Engineering: Apache Spark, Pandas, NumPy, ETL, ELT, Kafka, Flink, streaming data pipelines, Airflow, dbt, data quality.
MLOps and Deployment: MLflow, Docker, Kubernetes, FastAPI, model serving, model monitoring, CI/CD.
Cloud and Data Platforms: AWS S3, AWS Glue, AWS SageMaker, AWS EC2, AWS Redshift, AWS CloudWatch, AWS Lambda, Azure, Databricks, Snowflake, BigQuery, Grafana.
Visualization and Analytics: Power BI, Tableau, Matplotlib, Plotly, statistical analysis, A/B testing.
Databases and Tools: PostgreSQL, SQL Server, MySQL, MongoDB, Git, Linux, Jira, Confluence, REST APIs, Agile, Scrum.

Resume:
The latest resume is available at ${siteConfig.resumePath}.
`.trim();

export const cachedChatbotAnswers = [
  {
    questions: [
      "What AI agent projects has Shreevikas built?",
      "AI agent projects",
      "agentic ai",
      "agentshield",
      "agent projects"
    ],
    answer:
      "My strongest AI agent work includes AgentShield, the NeuralSeek OpenAI Agents SDK system, IT Helpdesk AI Agent, and AI FinOps Copilot. AgentShield tests agent failure modes such as prompt injection, privacy leakage, unsafe tool use, hallucination, and policy risk. At NeuralSeek, I built an agentic system that drafts and evaluates reports and creates Gmail drafts through MCP-based tool use."
  },
  {
    questions: [
      "Tell me about his RAG systems.",
      "RAG systems",
      "RAG experience",
      "retrieval augmented generation",
      "vector search"
    ],
    answer:
      "I have hands-on RAG experience from NeuralSeek and multiple portfolio projects. At NeuralSeek, I led LangChain RAG pipelines for 10K+ real estate documents supporting 500+ daily queries, with similarity thresholds, citation validation, caching, fallback handling, and low-confidence query logging. My AI/ML Knowledge RAG Assistant adds Top-3 retrieval, 0.6 similarity gating, clickable citations, refusal handling, and cache layers using Supabase pgvector, Jina Embeddings, and Groq."
  },
  {
    questions: [
      "What data engineering experience does he have?",
      "data engineering experience",
      "cloud data pipelines",
      "snowflake dbt",
      "databricks pipeline"
    ],
    answer:
      "I build cloud data pipelines across AWS, Snowflake, Databricks, PySpark, Airflow, and dbt. At Whiterock Technologies, I managed 12 AWS-to-Snowflake ELT pipelines using Airflow and dbt, reducing data preparation time by 45% and improving reporting speed by 40% for 200+ users. My Databricks Lakeflow and Airbnb Snowflake dbt projects show medallion architecture, Unity Catalog, incremental loads, SCD Type 2 snapshots, dbt tests, and BI-ready data modeling."
  },
  {
    questions: [
      "How does he use AWS and cloud data platforms?",
      "AWS experience",
      "cloud platforms",
      "aws cloud",
      "snowflake databricks"
    ],
    answer:
      "I use AWS across data engineering, ML deployment, and RAG infrastructure. My experience includes AWS Lambda, S3, DynamoDB, SageMaker, CloudWatch, Glue, EC2, Redshift, Snowflake, Databricks, and BigQuery. Examples include NeuralSeek document upload reliability with Lambda, S3, and DynamoDB; Whiterock AWS-to-Snowflake ELT pipelines; and the Databricks Lakeflow Medallion Pipeline built from S3 to governed Databricks Gold tables."
  },
  {
    questions: [
      "What machine learning experience does Shreevikas have?",
      "machine learning experience",
      "ml experience",
      "data science experience",
      "modeling experience"
    ],
    answer:
      "My machine learning experience includes manufacturing quality prediction, classification and regression model optimization, feature selection, hyperparameter tuning, time series forecasting, churn prediction, sentiment analysis, and computer vision. At Whiterock Technologies, I deployed ML models with Python, Scikit-Learn, PySpark, SageMaker, and CloudWatch, improving defect detection accuracy by 22% while maintaining 98.8% pipeline uptime. My GitHub projects extend this with Sales Forecasting MLOps, Subscription Value Brain, NVIDIA Stock Forecasting, BERT Sentiment Analysis, and Real-Time Pothole Detection."
  },
  {
    questions: [
      "What are the featured projects?",
      "featured projects",
      "portfolio projects",
      "best projects",
      "strongest projects"
    ],
    answer:
      "My five primary featured projects are AgentShield, AI FinOps Copilot, AI/ML Knowledge RAG Assistant, Databricks Lakeflow Medallion Pipeline, and Airbnb Snowflake dbt Pipeline. Together, they show AI agent safety, cloud cost intelligence, citation-grounded RAG, governed Databricks lakehouse engineering, and Snowflake/dbt analytics engineering. The portfolio also includes additional projects across MLOps, data science, RAG, streaming data engineering, BI, SQL analytics, and computer vision."
  },
  {
    questions: [
      "What technologies have you used?",
      "What technologies has Shreevikas used?",
      "technologies",
      "tech stack",
      "skills"
    ],
    answer:
      "I work with Python, SQL, PySpark, R, Scikit-Learn, XGBoost, LightGBM, TensorFlow, PyTorch, Apache Spark, Pandas, NumPy, LangChain, OpenAI Agents SDK, RAG, Hugging Face, vector search, MLflow, Docker, Kubernetes, FastAPI, and CI/CD. My cloud and data stack includes AWS S3, Glue, SageMaker, EC2, Redshift, CloudWatch, Lambda, Azure, Databricks, Snowflake, BigQuery, Grafana, Airflow, and dbt. I also use Power BI, Tableau, Matplotlib, Plotly, PostgreSQL, SQL Server, MySQL, MongoDB, Git, Linux, Jira, Confluence, and REST APIs."
  },
  {
    questions: [
      "Can I view his resume?",
      "Can I download your resume?",
      "How can I view your resume?",
      "resume",
      "download resume",
      "view resume",
      "cv"
    ],
    answer: resumeRequestMessage
  }
];
