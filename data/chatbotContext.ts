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
    questions: ["What's your name?", "What is your name?", "What is your full name?", "Your name", "Name", "Who is Shreevikas?", "Who is Shreevikas Jagadish?", "Hi, what's your name?", "What is his name?"],
    answer: `My name is ${siteConfig.name}.`
  },
  {
    questions: ["Hi", "Hello", "Hey", "Hello there", "Good morning", "Good afternoon", "Good evening", "How are you?", "Hi, how are you?", "Hello, how are you?"],
    answer: "Hi! I'm Shreevikas's portfolio assistant. Ask me about his skills, experience, research, projects, or certifications."
  },
  {
    questions: ["Who are you?", "Are you a bot?", "Are you an AI?", "Are you a robot?", "What is this assistant?"],
    answer: "I'm Shreevikas's AI portfolio assistant. My answers come from his professional background and portfolio information."
  },
  {
    questions: ["What do you do?", "What do you build?", "Tell me about yourself", "Introduce yourself", "What is your background?", "About you"],
    answer: siteConfig.summary
  },
  {
    questions: ["Where are you based?", "Where do you live?", "Where are you located?", "What is your location?", "Location", "Are you open to relocation?"],
    answer: `I'm based in the ${siteConfig.location}, and I'm ${siteConfig.relocation.toLowerCase()}.`
  },
  {
    questions: ["How can I contact you?", "What is your email?", "Your email", "Email address", "Contact", "Contact details", "How can I reach you?"],
    answer: `You can reach me at [${siteConfig.email}](mailto:${siteConfig.email}). You can also connect on [LinkedIn](${siteConfig.linkedin}) or explore my [GitHub](${siteConfig.github}).`
  },
  {
    questions: ["What's your GitHub?", "GitHub", "Where is your code?", "Can I see your GitHub?", "What is your GitHub username?"],
    answer: `My GitHub is [Shreevikas-BJ](${siteConfig.github}). You can explore my code and project repositories there.`
  },
  {
    questions: ["What's your LinkedIn?", "LinkedIn", "Can I see your LinkedIn profile?", "How can I connect on LinkedIn?"],
    answer: `You can connect with me on [LinkedIn](${siteConfig.linkedin}).`
  },
  {
    questions: ["What is your website?", "Website", "Portfolio URL", "What is your portfolio link?"],
    answer: `My portfolio is [${siteConfig.portfolio}](${siteConfig.portfolio}).`
  },
  {
    questions: ["What is your phone number?", "Your phone number", "Phone number"],
    answer: `My contact number is ${siteConfig.phone}. You can also email me at [${siteConfig.email}](mailto:${siteConfig.email}).`
  },
  {
    questions: ["Where did you study?", "Where did you go to college?", "Which university did you attend?", "What is your education?", "What are your qualifications?", "What degrees do you have?", "Education", "Your education"],
    answer: `My education includes ${education.map((item) => `${item.degree} at ${item.school} (${item.dates.replace("Graduation: ", "")})`).join(" and ")}.`
  },
  {
    questions: ["What roles are you looking for?", "Are you open to work?", "Are you looking for a job?", "What is your target role?", "Are you available for full time?", "Are you open to full time roles?"],
    answer: `${siteConfig.availability}. I'm also ${siteConfig.relocation.toLowerCase()}. For specific availability, please contact me at [${siteConfig.email}](mailto:${siteConfig.email}).`
  },
  {
    questions: ["Where have you worked?", "What is your work experience?", "Where do you work?", "What companies have you worked for?", "Tell me about your experience", "Work experience", "Your experience"],
    answer: `My professional experience includes ${experiences.map((item) => `${item.title} at ${item.company} (${item.dates})`).join(" and ")}. My research experience is as a ${researchExperience.role} at ${researchExperience.organization}.`
  },
  {
    questions: ["Thank you", "Thanks", "Thanks a lot", "Bye", "Goodbye"],
    answer: `You're welcome. For further information, you can contact me at [${siteConfig.email}](mailto:${siteConfig.email}).`
  },
  {
    questions: ["What did Shreevikas build at NeuralSeek?", "What did he build at NeuralSeek?", "NeuralSeek experience", "Tell me about NeuralSeek", "NeuralSeek", "AI Engineer Intern"],
    answer:
      "As an AI Engineer Intern at NeuralSeek from July to November 2025, I built enterprise RAG using open-source embeddings, PostgreSQL, pgvector, and metadata-filtered retrieval, reducing IT and HR support resolution time by 40%. I improved concurrent serving with vLLM and tuned retrieval, context windows, and token budgets. Fine-tuning an open-source LLM on AWS with PEFT and QLoRA reduced manual compliance-analysis effort by 35%."
  },
  {
    questions: ["What was his role at Whiterock?", "Whiterock experience", "Tell me about Whiterock", "Whiterock", "Data Scientist AI ML at Whiterock"],
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
    questions: ["What is his experience with RAG?", "Tell me about his RAG work.", "Tell me about your RAG experience.", "RAG experience", "enterprise RAG", "vector search"],
    answer:
      "At NeuralSeek, I used open-source embeddings, PostgreSQL, pgvector, and metadata-filtered retrieval for enterprise RAG that reduced IT and HR support resolution time by 40%. My AI/ML Knowledge Assistant uses pgvector, Jina embeddings, Groq, clickable citations, similarity-based refusal handling, and exact, semantic, and embedding caches with latency observability."
  },
  {
    questions: ["What research has he done in scientific AI?", "scientific AI research", "Tell me about your research", "What is your research?", "Research", "What did you research at IIT?", "PhysicsNeMo", "PINNs research"],
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
    questions: ["What AI systems has Shreevikas built?", "What are his strongest projects?", "What are your projects?", "Projects", "featured projects", "best projects", "strongest projects"],
    answer:
      "My featured work includes ArchPilot for agentic architecture design, AgentShield for multi-LLM red-team testing, the AI/ML Knowledge Assistant for production RAG, Accord for human-reviewed procurement, AI FinOps Copilot, and the Databricks Lakeflow Medallion Pipeline. Together they demonstrate agent orchestration, local inference, LLM evaluation, grounded retrieval, decision support, and cloud data engineering."
  },
  {
    questions: ["What technologies has Shreevikas used?", "What are Shreevikas's core skills?", "What are your skills?", "What tools do you use?", "What is your tech stack?", "What programming languages do you use?", "What tools does he use?", "technologies", "tech stack", "skills", "tools"],
    answer:
      "I work with Python, SQL, TypeScript, PyTorch, Scikit-Learn, LightGBM, PySpark, LangGraph, LangChain, PydanticAI, FastAPI, PostgreSQL, pgvector, vLLM, llama.cpp, AWS, Snowflake, Airflow, and dbt. My broader skills include computer vision, scientific AI, model deployment, cloud platforms, frontend engineering, and automated testing."
  },
  {
    questions: ["What certifications does he hold?", "Which certifications does he hold?", "Which certifications do you hold?", "Are you certified?", "What are your certifications?", "certifications", "credentials"],
    answer:
      `I hold ${certifications.map((item) => item.credentialUrl ? `[${item.name}](${item.credentialUrl})` : item.name).join(", ")}.`
  },
  {
    questions: ["Can I view his resume?", "Can I download your resume?", "resume", "download resume", "view resume", "cv"],
    answer: resumeRequestMessage
  },
  ...projects.map((project) => ({
    questions: [project.title, `Tell me about ${project.title}`, `What is ${project.title}?`, `What did you build in ${project.title}?`],
    answer: `${project.summary} Core technologies: ${project.tech.slice(0, 6).join(", ")}.${project.repoUrl ? ` [View the repository](${project.repoUrl}).` : " There is no public repository or live link available yet."}`
  })),
  ...skills.flatMap((group) => group.items.map((skill) => ({
    questions: [`Do you know ${skill}?`, `Have you used ${skill}?`, `Do you use ${skill}?`, `Is ${skill} part of your toolkit?`],
    answer: `Yes, ${skill} is part of my ${group.category.toLowerCase()} toolkit. For a specific use case, please ask about a project or role.`
  })))
];
