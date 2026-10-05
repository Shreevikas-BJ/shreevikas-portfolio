import {
  certifications, education, experiences, projects, researchExperience, siteConfig, skills
} from "./portfolio";

export const resumeRequestMessage = `For my latest resume, please contact me directly at [${siteConfig.email}](mailto:${siteConfig.email}).`;

export const contactFallback = `Please contact Shreevikas directly at [${siteConfig.email}](mailto:${siteConfig.email}) for further information.`;

export const refusalMessage =
  `I can answer questions about Shreevikas's professional background, projects, skills, tools, research, education, and certifications. For anything else, please contact him directly at [${siteConfig.email}](mailto:${siteConfig.email}).`;

const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((first, second) => (first.featuredOrder ?? 99) - (second.featuredOrder ?? 99));

// Keep grounding aligned with the same content rendered by the portfolio.
export const chatbotContext = `
Identity:
I am ${siteConfig.name}, based in ${siteConfig.location} and ${siteConfig.relocation.toLowerCase()}. ${siteConfig.summary}
Target roles: ${siteConfig.roles.join(", ")}.
Email: ${siteConfig.email}. Phone: ${siteConfig.phone}. GitHub: ${siteConfig.github}. LinkedIn: ${siteConfig.linkedin}. Portfolio: ${siteConfig.portfolio}.

Professional experience (complete work history in my latest resume):
${experiences.map((experience) => `${experience.title}, ${experience.company}, ${experience.location}, ${experience.dates}. ${experience.bullets.join(" ")}`).join("\n\n")}

Research experience:
${researchExperience.role}, ${researchExperience.organization}. ${researchExperience.highlights.join(" ")}

Featured projects:
${featuredProjects.map((project) => `${project.title}: ${project.summary} ${project.architecture} Technologies: ${project.tech.join(", ")}.${project.repoUrl ? ` Repository: ${project.repoUrl}.` : " No public repository or live deployment link is available."}`).join("\n\n")}

Supporting project collection:
${projects.filter((project) => !project.featured).map((project) => `${project.title}: ${project.summary}${project.repoUrl ? ` Repository: ${project.repoUrl}.` : ""}`).join("\n")}

Education:
${education.map((item) => `${item.degree}, ${item.school}, ${item.location}, ${item.dates}.`).join("\n")}

Certifications:
${certifications.map((item) => `${item.name}, ${item.issuer}.${item.credentialUrl ? ` Credential: ${item.credentialUrl}.` : ""}`).join("\n")}

Skills (retained capabilities; attribute a skill to a job only when that job explicitly lists it):
${skills.map((group) => `${group.category}: ${group.items.join(", ")}.`).join("\n")}

Resume requests: Ask visitors to contact ${siteConfig.email} directly. Do not provide a resume file or download link.
`.trim();

export const cachedChatbotAnswers = [
  {
    questions: ["What did Shreevikas build at NeuralSeek?", "What did he build at NeuralSeek?", "NeuralSeek experience", "AI Engineer Intern"],
    answer:
      "As an AI Engineer Intern at NeuralSeek from July to November 2025, I built enterprise RAG using open-source embeddings, PostgreSQL, pgvector, and metadata-filtered retrieval, reducing IT and HR support resolution time by 40%. I improved concurrent serving with vLLM and tuned retrieval, context windows, and token budgets. Fine-tuning an open-source LLM on AWS with PEFT and QLoRA reduced manual compliance-analysis effort by 35%."
  },
  {
    questions: ["What was his role at Whiterock?", "Whiterock experience", "Data Scientist AI ML at Whiterock"],
    answer:
      "I worked as a Data Scientist (AI/ML) at Whiterock in India from February 2022 to July 2024. I improved defect-detection accuracy by 22% while maintaining 98.8% pipeline uptime, built forecasting and predictive-maintenance models, and processed 20K+ reviews with a BERT and spaCy sentiment pipeline at approximately 89% F1. I operated 12 AWS-to-Snowflake ELT pipelines, reducing data-preparation time by 45% and improving reporting performance by 40% for 200+ users."
  },
  {
    questions: ["What is ArchPilot?", "Tell me about ArchPilot", "system architecture copilot"],
    answer:
      "ArchPilot is my multi-agent system-design copilot that turns application requirements and current technology research into cost-effective, balanced, and high-performance architectures. It uses Next.js, TypeScript, FastAPI, PydanticAI, JEV System One routing, PostgreSQL persistence, and GPU-accelerated local inference with a 27B quantized LLM through llama.cpp. There is no public live link available yet."
  },
  {
    questions: ["Tell me about Accord Procurement AI.", "Accord", "Procurement AI", "procurement project"],
    answer:
      "Accord is my local AI procurement prototype for comparing supplier quotes, reviewing document evidence, identifying price and delivery risks, and recording human decisions. Next.js, FastAPI, PostgreSQL, Redis/RQ, OCR, and optional Ollama inference support document processing; deterministic Python calculations and human approvals govern recommendations. Independent holdouts still show extraction generalization limits, so it is not ready for a buyer pilot. [View Accord on GitHub](https://github.com/Shreevikas-BJ/accord-procurement-ai)."
  },
  {
    questions: ["Tell me about AgentShield.", "AgentShield", "AI safety project", "agent evaluation"],
    answer:
      "AgentShield is my deployed multi-LLM QA and red-team platform with six failure modes and three scan levels. It tests prompt injection, privacy leakage, unsafe tool use, hallucinations, policy violations, and excessive agency with automated adversarial generation, Gemini judging, PostgreSQL persistence, interactive dashboards, and regression testing. [View AgentShield on GitHub](https://github.com/Shreevikas-BJ/agentshield)."
  },
  {
    questions: ["What is his experience with RAG?", "Tell me about his RAG work.", "RAG experience", "enterprise RAG", "vector search"],
    answer:
      "At NeuralSeek, I used open-source embeddings, PostgreSQL, pgvector, and metadata-filtered retrieval for enterprise RAG that reduced IT and HR support resolution time by 40%. My AI/ML Knowledge Assistant uses pgvector, Jina embeddings, Groq, clickable citations, similarity-based refusal handling, and exact, semantic, and embedding caches with latency observability."
  },
  {
    questions: ["What research has he done in scientific AI?", "scientific AI research", "PhysicsNeMo", "PINNs research"],
    answer:
      "As a Graduate Research Assistant, I researched Physics-Informed Neural Networks for power-system dynamics using PyTorch and NVIDIA PhysicsNeMo. My work used CUDA-accelerated workflows for simulation and time-series modeling."
  },
  {
    questions: ["What experience does Shreevikas have with AWS?", "AWS experience"],
    answer:
      "At Whiterock, I deployed Scikit-Learn and PySpark ML workflows on AWS SageMaker with CloudWatch monitoring and operated 12 AWS-to-Snowflake ELT pipelines. At NeuralSeek, I fine-tuned an open-source LLM on AWS with PEFT and QLoRA for grounded compliance analysis. I also hold the AWS Certified Data Engineer - Associate certification."
  },
  {
    questions: ["What MLOps experience does he have?", "MLOps experience", "model deployment", "model monitoring"],
    answer:
      "At Whiterock, I deployed ML workflows on AWS SageMaker with CloudWatch monitoring and maintained 98.8% pipeline uptime. At NeuralSeek, I optimized vLLM concurrent serving, retrieval thresholds, context windows, and token budgets. My broader toolkit includes MLflow, Docker, Kubernetes, FastAPI, CI/CD, and Terraform."
  },
  {
    questions: ["What data-engineering platforms has he used?", "data engineering platforms", "cloud data platforms"],
    answer:
      "At Whiterock, I operated 12 AWS-to-Snowflake ELT pipelines using Airflow and dbt, reducing data-preparation time by 45% and improving reporting performance by 40% for 200+ users. My projects include Databricks Lakeflow with governed medallion layers, a Snowflake and dbt analytics pipeline, and Kafka streaming."
  },
  {
    questions: ["What AI systems has Shreevikas built?", "What are his strongest projects?", "featured projects", "best projects", "strongest projects"],
    answer:
      "My featured work includes ArchPilot for agentic architecture design, AgentShield for multi-LLM red-team testing, the AI/ML Knowledge Assistant for production RAG, Accord for human-reviewed procurement, AI FinOps Copilot, and the Databricks Lakeflow Medallion Pipeline. Together they demonstrate agent orchestration, local inference, LLM evaluation, grounded retrieval, decision support, and cloud data engineering."
  },
  {
    questions: ["What technologies has Shreevikas used?", "What are Shreevikas's core skills?", "What tools does he use?", "technologies", "tech stack", "skills", "tools"],
    answer:
      "I work with Python, SQL, TypeScript, PyTorch, Scikit-Learn, LightGBM, PySpark, LangGraph, LangChain, PydanticAI, FastAPI, PostgreSQL, pgvector, vLLM, llama.cpp, AWS, Snowflake, Airflow, and dbt. My broader skills include computer vision, scientific AI, model deployment, cloud platforms, frontend engineering, and automated testing."
  },
  {
    questions: ["What certifications does he hold?", "Which certifications does he hold?", "certifications", "credentials"],
    answer:
      `I hold ${certifications.map((item) => item.credentialUrl ? `[${item.name}](${item.credentialUrl})` : item.name).join(", ")}.`
  },
  {
    questions: ["Can I view his resume?", "Can I download your resume?", "resume", "download resume", "view resume", "cv"],
    answer: resumeRequestMessage
  }
];
