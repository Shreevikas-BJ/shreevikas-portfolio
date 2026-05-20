import {
  certifications,
  education,
  experiences,
  projects,
  research,
  siteConfig,
  skills
} from "./portfolio";

const compactList = (items: string[]) => items.join(", ");

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
AWS Certified Data Engineer and MS IT candidate with 2+ years of experience building cloud-native data pipelines, lakehouse models, streaming workflows, and AI data infrastructure. Hands-on with Python, SQL, PySpark, AWS, Snowflake, Databricks, Airflow, dbt, Kafka, Great Expectations, RAG, FAISS, FastAPI, and production-oriented data quality practices.

Experience:
${experiences
  .map(
    (experience) => `
- ${experience.title}, ${experience.company}, ${experience.location}, ${experience.dates}
  Skills: ${compactList(experience.tags)}
  Highlights: ${experience.bullets.join(" ")}
`
  )
  .join("")}

Projects:
${projects
  .map(
    (project) => `
- ${project.title}: ${project.summary}
  Category: ${project.category}
  Tech: ${compactList(project.tech)}
  Architecture: ${project.architecture}
  Highlights: ${project.bullets.join(" ")}
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
${skills.map((group) => `- ${group.category}: ${compactList(group.items)}`).join("\n")}
`.trim();
