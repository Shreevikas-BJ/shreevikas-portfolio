import { siteConfig } from "./portfolio";

export const refusalMessage =
  "I can only answer questions about Shreevikas's professional background, projects, skills, research, and experience.";

export const chatbotContext = `
Profile:
Shreevikas Jagadish is based in Chicago, IL, is open to relocation, and is targeting Data Engineer, Analytics Engineer, and AI Data Engineer roles. Email: ${siteConfig.email}. GitHub: ${siteConfig.github}. LinkedIn: ${siteConfig.linkedin}.

Education:
Master of Information Technology, Illinois Institute of Technology, Chicago, IL, Aug 2024-May 2026. Bachelor of Computer Science, Visvesvaraya Technological University, Bengaluru, India, Jul 2019-Aug 2023.

Experience:
Graduate Research Assistant, Illinois Institute of Technology, Chicago, IL, Nov 2025-May 2026: works on Physics-Informed Neural Networks for power-system dynamics; prepares simulation and time-series datasets for PyTorch training pipelines; uses CUDA acceleration and NVIDIA PhysicsNeMo for GPU-based scientific deep learning experiments.

AI Data Engineer Intern, NeuralSeek, Miami, FL remote, Jul 2025-Nov 2025: led a 4-member intern team; built ingestion, chunking, embedding, and FAISS indexing pipelines for 10K+ real estate documents; supported 500+ daily RAG queries; improved upload reliability by 30% with Lambda, S3, DynamoDB, embedding refreshes, vector index updates, and RAG tuning; improved FastAPI services, Pydantic schemas, logging, tests, and error handling.

Data Engineer, Whiterock Technologies, Bengaluru, India, Aug 2022-Apr 2024: owned 12+ AWS-to-Snowflake ELT pipelines with Fivetran, Airflow, dbt tests, Apache Iceberg tables, and monitoring; reduced reporting latency by 40% for 200+ users; built Kafka-to-Spark streaming across 8 Kafka topics for about 5M daily events at about 3K events/minute; led a 3TB+ Oracle-to-Snowflake migration across 50+ healthcare tables with CDC/SCD Type-2 validation; developed 40+ dbt Core models and maintained 99.8% pipeline SLA.

Data Engineer Intern, Whiterock Technologies, Bengaluru, India, Jan 2022-Jul 2022: automated extraction and validation with Python, SQL, and Excel; supported Airflow retries, CloudWatch/Grafana monitoring, schema validation, row-count reconciliation, checksum checks, and post-load validation.

AWS experience:
AWS Certified Data Engineer - Associate. Hands-on AWS work includes S3, Glue, EMR, Lambda, Redshift, Athena, CloudWatch, DynamoDB, Kafka streaming on EC2/S3/Glue/Athena, and serverless RAG ingestion with Lambda, S3, and DynamoDB.

RAG and AI experience:
Built RAG pipelines with embeddings, FAISS vector search, LangChain-style retrieval patterns, FastAPI, Pydantic, document chunking, similarity threshold gating, citation-based answers, and refusal handling. Projects include ML Course Document RAG, Medical RAG Chatbot, and IT Helpdesk AI Agent.

Project highlights:
Databricks Lakeflow Medallion Pipeline: S3, Delta tables, PySpark, Lakeflow Jobs, Unity Catalog, bronze/silver/gold lakehouse layers, governed gold tables for dashboards and Databricks Genie.
Stock Market Kafka Data Pipeline: Kafka, Python, AWS EC2, S3, Glue, Athena, real-time stock data streaming and serverless SQL analytics.
Airbnb Snowflake dbt Pipeline: Snowflake, dbt Core, AWS S3, SQL, Python, bronze/silver/gold analytics models, dbt tests and lineage.
ML Course Document RAG: document-grounded RAG for ML course PDFs with FAISS, embeddings, citation-based responses, similarity gating, and LLM Council review.
IT Helpdesk AI Agent: DistilBERT, LangGraph, FAISS, Streamlit, ticket classification, support retrieval, reranking, and command-safety checks.
Subscription Value Brain: churn prediction, CLV estimation, uplift modeling, XGBoost/Scikit-learn, and Streamlit campaign targeting.
Sales Forecasting MLOps Pipeline: PySpark ETL, Snowflake, XGBoost forecasting, monitoring, and Streamlit dashboard.

Research:
Research paper: "An Analytical Study of AI-Driven Process Engineering for Automation and Optimization of IT Operations (AIOps)." It studies AIOps as a process-engineering operating model for IT operations, covering observability, machine learning, LLM-based reasoning, workflow orchestration, governance, feedback loops, alert-noise reduction, incident-cycle reduction, toil removal, root-cause analysis, and automation boundaries.

Certifications:
AWS Certified Data Engineer - Associate. Google Data Analytics Specialization Certificate from Google / Coursera. Databricks Certified Associate Developer for Apache Spark is in progress, expected May 2026.

Core skills:
Python, SQL, Spark SQL, Bash, PySpark, Apache Spark, Spark Structured Streaming, Kafka, Airflow, dbt Core, Fivetran, ETL/ELT, CDC, SCD Type-2, Delta Lake, Apache Iceberg, Medallion Architecture, Snowflake, AWS, Azure Databricks, Unity Catalog, Great Expectations, schema validation, reconciliation, data lineage, SLA monitoring, FAISS, embeddings, RAG pipelines, FastAPI, Pydantic, Scikit-learn, PyTorch, XGBoost, Docker, GitHub Actions, Jenkins, Grafana, Power BI, Tableau.
`.trim();

export const cachedChatbotAnswers = [
  {
    questions: [
      "What experience does Shreevikas have with AWS?",
      "AWS experience",
      "Tell me about Shreevikas AWS work"
    ],
    answer:
      "Shreevikas is an AWS Certified Data Engineer - Associate with hands-on AWS data engineering experience across S3, Glue, EMR, Lambda, Redshift, Athena, CloudWatch, and DynamoDB. At Whiterock, he owned AWS-to-Snowflake ELT pipelines and built Kafka-to-Spark streaming workflows for about 5M daily events. At NeuralSeek, he used Lambda, S3, and DynamoDB for RAG document ingestion, metadata storage, embedding refreshes, and FAISS index updates."
  },
  {
    questions: [
      "Tell me about Shreevikas's RAG experience.",
      "RAG experience",
      "retrieval augmented generation experience"
    ],
    answer:
      "Shreevikas has built production-oriented RAG pipelines using document ingestion, chunking, embeddings, FAISS vector search, similarity gating, and FastAPI services. At NeuralSeek, he supported 500+ daily RAG queries over 10K+ real estate documents. His RAG projects include ML Course Document RAG, Medical RAG Chatbot, and IT Helpdesk AI Agent, with citation-based answers, refusal handling, and safety checks."
  },
  {
    questions: [
      "What is Shreevikas's AIOps research about?",
      "AIOps research",
      "research paper"
    ],
    answer:
      "Shreevikas's AIOps research paper is titled \"An Analytical Study of AI-Driven Process Engineering for Automation and Optimization of IT Operations (AIOps).\" It studies how observability, machine learning, LLM-based reasoning, workflow orchestration, governance, and feedback loops can improve IT operations. The paper focuses on reducing alert noise, shortening incident cycles, removing toil, supporting root-cause analysis, and defining safe automation boundaries."
  },
  {
    questions: [
      "What are Shreevikas's strongest data engineering projects?",
      "strongest data engineering projects",
      "best data engineering projects"
    ],
    answer:
      "Shreevikas's strongest data engineering projects are the Databricks Lakeflow Medallion Pipeline, Stock Market Kafka Data Pipeline, and Airbnb Snowflake dbt Pipeline. They show lakehouse architecture, streaming ingestion, cloud storage, PySpark/Spark SQL, dbt modeling, Snowflake, AWS Glue/Athena, and governed analytics layers. Together, they demonstrate end-to-end data platform skills from ingestion through curated BI-ready datasets."
  },
  {
    questions: [
      "Is Shreevikas open to full-time roles?",
      "open to roles",
      "availability"
    ],
    answer:
      "Yes. Shreevikas is open to Data Engineer, Analytics Engineer, and AI Data Engineer roles, and his portfolio also states that he is open to relocation. He is based in Chicago, IL."
  },
  {
    questions: [
      "What technologies has Shreevikas used?",
      "technologies",
      "tech stack",
      "skills"
    ],
    answer:
      "Shreevikas has used Python, SQL, Spark SQL, PySpark, Apache Spark, Kafka, Airflow, dbt Core, Fivetran, Snowflake, Databricks, Delta Lake, Apache Iceberg, and AWS services including S3, Glue, EMR, Lambda, Redshift, Athena, CloudWatch, and DynamoDB. For AI/RAG, he has used embeddings, FAISS, FastAPI, Pydantic, Scikit-learn, PyTorch, XGBoost, and RAG pipelines. He also works with Docker, GitHub Actions, Jenkins, Grafana, Power BI, Tableau, Great Expectations, schema validation, reconciliation, and SLA monitoring."
  }
];
