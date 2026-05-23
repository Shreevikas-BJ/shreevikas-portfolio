import {
  certifications,
  education,
  experiences,
  projects,
  research,
  siteConfig,
  skills
} from "./portfolio";

const compactList = (items: string[], limit = items.length) => items.slice(0, limit).join(", ");

export const refusalMessage =
  "I can only answer questions about Shreevikas's professional background, projects, skills, research, and experience.";

export const chatbotContext = `
Profile:
- Name: ${siteConfig.name}
- Location: ${siteConfig.location}
- Availability: ${siteConfig.availability}
- Target roles: Data Engineer, Analytics Engineer, AI Data Engineer.
- Primary email: ${siteConfig.email}
- GitHub: ${siteConfig.github}
- LinkedIn: ${siteConfig.linkedin}
- Open to Data Engineering, Analytics Engineering, and AI Data Engineering roles.

Summary:
AWS Certified Data Engineer and MS IT graduate from Illinois Institute of Technology with 2+ years of experience building batch, streaming, and AI-ready data pipelines across AWS, Snowflake, Databricks, Airflow, dbt Core, Kafka, and PySpark. Skilled in data ingestion, CDC, dimensional modeling, data quality, Spark optimization, RAG pipelines, FAISS, FastAPI, and analytics-ready datasets for BI and ML use cases.

Experience:
${experiences
  .map(
    (experience) => `
- ${experience.title}, ${experience.company}, ${experience.location}, ${experience.dates}
  Skills: ${compactList(experience.tags, 6)}
  Highlights: ${experience.bullets.slice(0, 3).join(" ")}
`
  )
  .join("")}

Projects:
${projects
  .map(
    (project) => `
- ${project.title}: ${project.summary}
  Category: ${project.category}
  Tech: ${compactList(project.tech, 7)}
  Highlights: ${project.bullets.slice(0, 2).join(" ")}
  Repo: ${project.repoUrl}
${project.liveUrl ? `  Live demo: ${project.liveUrl}` : ""}
`
  )
  .join("")}

Research:
- ${research.title}
  ${research.summary}
  Topics: ${compactList(research.topics)}
  Concepts: ${compactList(research.concepts)}

Certifications:
${certifications
  .map(
    (certification) =>
      `- ${certification.name}, ${certification.issuer}, ${certification.status}${
        certification.credentialUrl ? `, credential: ${certification.credentialUrl}` : ""
      }`
  )
  .join("\n")}

Education:
${education
  .map(
    (item) =>
      `- ${item.degree}, ${item.school}, ${item.location}, ${item.dates}. ${item.details.join(". ")}`
  )
  .join("\n")}

Skills:
${skills.map((group) => `- ${group.category}: ${compactList(group.items, 12)}`).join("\n")}
`.trim();
