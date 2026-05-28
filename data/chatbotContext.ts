import { siteConfig } from "./portfolio";

export const contactFallback = `Please contact Shreevikas directly for further information.

Email: ${siteConfig.email}
Phone: 312-358-3056`;

export const refusalMessage =
  `I can only answer questions about my professional background, projects, skills, research, and experience. For anything specific, please contact me directly at ${siteConfig.email}.`;

export const chatbotContext = `
Identity:
I am Shreevikas Jagadish, based in Chicago, IL, and open to relocation. I am targeting Data Engineer, Analytics Engineer, and AI Data Engineer roles. Email: ${siteConfig.email}. GitHub: ${siteConfig.github}. LinkedIn: ${siteConfig.linkedin}.

Education:
I earned a Master of Information Technology from Illinois Institute of Technology in Chicago, IL, Aug 2024-May 2026. I earned a Bachelor of Computer Science from Visvesvaraya Technological University in Bengaluru, India, Jul 2019-Aug 2023.

Experience:
Graduate Research Assistant, Illinois Institute of Technology, Chicago, IL, Nov 2025-May 2026: I work on Physics-Informed Neural Networks for power-system dynamics; prepare simulation and time-series datasets for PyTorch training pipelines; and use CUDA acceleration plus NVIDIA PhysicsNeMo for GPU-based scientific deep learning experiments.

AI Data Engineer Intern, NeuralSeek, Miami, FL remote, Jul 2025-Nov 2025: I led a 4-member intern team to design a LangChain-based RAG architecture; built ingestion, chunking, embedding, and FAISS indexing pipelines for 10K+ real estate documents; supported 500+ daily RAG queries; improved document upload reliability by 30% with Lambda, S3, DynamoDB, metadata tracking, embedding refreshes, vector index updates, and MCP-based system-error notifications; and reduced UI/API iteration time by 25% using Codex-assisted FastAPI updates, Pydantic validation, structured logging, automated test runs, pytest coverage, and error handling.

Data Engineer, Whiterock Technologies, Bengaluru, India, Aug 2022-Apr 2024: I owned 12+ AWS-to-Snowflake ELT pipelines with Fivetran, Airflow, dbt tests, 40+ dbt Core models, and failure monitoring; reduced reporting latency by 40% for 200+ users; built Kafka-to-Spark streaming across 8 Kafka topics for about 5M daily events; operationalized 2 ML pipelines using XGBoost and LightGBM with PySpark feature engineering, SageMaker batch inference, Great Expectations quality gates, Grafana monitoring, and 98.8% uptime via Airflow and CloudWatch; and led a 3TB+ Oracle-to-Snowflake migration across 50+ healthcare tables with CDC/SCD Type-2 validation and role-based access controls.

Data Engineer Intern, Whiterock Technologies, Bengaluru, India, Feb 2022-Jul 2022: I automated extraction and validation tasks with Python, SQL, and Excel; supported Airflow retries and failure alerts; improved reporting accuracy and query performance with optimized SQL; and supported healthcare migration readiness through schema validation, row-count reconciliation, checksum checks, mismatch investigation, and post-load documentation.

AWS experience:
I am an AWS Certified Data Engineer - Associate. My AWS work includes S3, Glue, EMR, Lambda, Redshift, Athena, CloudWatch, DynamoDB, SageMaker batch inference, Kafka streaming on EC2/S3/Glue/Athena, and serverless RAG ingestion with Lambda, S3, and DynamoDB.

RAG and AI experience:
I have built RAG pipelines with embeddings, FAISS vector search, retrieval patterns, FastAPI, Pydantic, document chunking, similarity threshold gating, citation-based answers, and refusal handling. My projects include ML Course Document RAG, Medical RAG Chatbot, and IT Helpdesk AI Agent.

Project highlights:
Databricks Lakeflow Medallion Pipeline: I built S3, Delta tables, PySpark, Lakeflow Jobs, Unity Catalog, bronze/silver/gold lakehouse layers, governed gold tables for dashboards and Databricks Genie.
Stock Market Kafka Data Pipeline: I built Kafka, Python, AWS EC2, S3, Glue, Athena, real-time stock data streaming, and serverless SQL analytics.
Airbnb Snowflake dbt Pipeline: I built Snowflake, dbt Core, AWS S3, SQL, Python, bronze/silver/gold analytics models, dbt tests, and lineage.
ML Course Document RAG: I built document-grounded RAG for ML course PDFs with FAISS, embeddings, citation-based responses, similarity gating, and Multi-LLM Council review.
IT Helpdesk AI Agent: I built ticket classification, support retrieval, reranking, and command-safety checks with DistilBERT, LangGraph, FAISS, and Streamlit.
Subscription Value Brain: I built churn prediction, CLV estimation, uplift modeling, XGBoost/Scikit-learn workflows, and Streamlit campaign targeting.
Sales Forecasting MLOps Pipeline: I built PySpark ETL, Snowflake storage, XGBoost forecasting, monitoring, and a Streamlit dashboard.

Research:
My research paper is "An Analytical Study of AI-Driven Process Engineering for Automation and Optimization of IT Operations (AIOps)." It explores AIOps as a process-engineering operating model for IT operations, covering observability, machine learning, LLM-based reasoning, workflow orchestration, governance, feedback loops, alert-noise reduction, incident-cycle reduction, toil removal, root-cause analysis, and automation boundaries.

Certifications:
AWS Certified Data Engineer - Associate. Google Data Analytics Professional Certificate from Google / Coursera.

Core skills:
Python, SQL, Spark SQL, Bash, PySpark, Apache Spark, Spark Structured Streaming, Kafka, Airflow, dbt Core, Fivetran, ETL/ELT, CDC, SCD Type-2, Delta Lake, Medallion Architecture, Snowflake, AWS, SageMaker, Azure Databricks, Unity Catalog, Great Expectations, schema validation, reconciliation, data lineage, SLA monitoring, FAISS, embeddings, RAG pipelines, LangChain, OpenAI API, Codex, FastAPI, Pydantic, Scikit-learn, XGBoost, LightGBM, MLflow, PyTorch, Docker, GitHub Actions, pytest, Grafana, Power BI, Tableau.
`.trim();

export const cachedChatbotAnswers = [
  {
    questions: [
      "What experience do you have with AWS?",
      "What experience does Shreevikas have with AWS?",
      "AWS experience",
      "Tell me about your AWS work",
      "Tell me about Shreevikas AWS work"
    ],
    answer:
      "I am an AWS Certified Data Engineer - Associate with hands-on AWS experience across S3, Glue, EMR, Lambda, Redshift, Athena, CloudWatch, DynamoDB, and SageMaker. At Whiterock, I owned AWS-to-Snowflake ELT pipelines, built Kafka-to-Spark streaming workflows for about 5M daily events, and operationalized ML pipelines with SageMaker batch inference. At NeuralSeek, I used Lambda, S3, and DynamoDB for RAG document ingestion, metadata tracking, embedding refreshes, and FAISS index updates."
  },
  {
    questions: [
      "Tell me about your RAG experience.",
      "Tell me about Shreevikas RAG experience.",
      "RAG experience",
      "retrieval augmented generation experience"
    ],
    answer:
      "I have built RAG pipelines using LangChain-based architecture, document ingestion, chunking, embeddings, FAISS vector search, similarity gating, and FastAPI services. At NeuralSeek, I supported 500+ daily RAG queries over 10K+ real estate documents and improved upload reliability with Lambda, S3, DynamoDB, and MCP-based notifications. My RAG projects include ML Course Document RAG, Medical RAG Chatbot, and IT Helpdesk AI Agent, with citation-based answers, refusal handling, and safety checks."
  },
  {
    questions: [
      "What is your AIOps research about?",
      "What is Shreevikas AIOps research about?",
      "AIOps research",
      "research paper"
    ],
    answer:
      "My AIOps research paper is titled \"An Analytical Study of AI-Driven Process Engineering for Automation and Optimization of IT Operations (AIOps).\" It explores how observability, machine learning, LLM-based reasoning, workflow orchestration, governance, and feedback loops can improve IT operations. The paper focuses on reducing alert noise, shortening incident cycles, removing toil, supporting root-cause analysis, and defining safe automation boundaries."
  },
  {
    questions: [
      "What are your strongest data engineering projects?",
      "What are Shreevikas strongest data engineering projects?",
      "strongest data engineering projects",
      "best data engineering projects"
    ],
    answer:
      "My strongest data engineering projects are the Databricks Lakeflow Medallion Pipeline, Stock Market Kafka Data Pipeline, and Airbnb Snowflake dbt Pipeline. They show lakehouse architecture, streaming ingestion, cloud storage, PySpark/Spark SQL, dbt modeling, Snowflake, AWS Glue/Athena, and governed analytics layers. Together, they demonstrate my end-to-end data platform skills from ingestion through curated BI-ready datasets."
  },
  {
    questions: [
      "Are you open to full-time roles?",
      "Is Shreevikas open to full-time roles?",
      "open to roles",
      "availability"
    ],
    answer:
      "Yes. I am open to Data Engineer, Analytics Engineer, and AI Data Engineer roles, and I am open to relocation. I am based in Chicago, IL."
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
      "I have used Python, SQL, Spark SQL, PySpark, Apache Spark, Kafka, Airflow, dbt Core, Fivetran, Snowflake, Databricks, Delta Lake, and AWS services including S3, Glue, EMR, Lambda, Redshift, Athena, CloudWatch, DynamoDB, and SageMaker. For AI/ML and RAG, I have used embeddings, FAISS, LangChain, OpenAI API, Codex, FastAPI, Scikit-learn, XGBoost, LightGBM, MLflow, and RAG pipelines. I also work with Docker, GitHub Actions, pytest, Grafana, Power BI, Tableau, Great Expectations, schema validation, reconciliation, and SLA monitoring."
  }
];
