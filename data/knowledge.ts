import { certifications, education, experiences, projects, researchExperience, siteConfig, skills } from "./portfolio";

export type KnowledgeDocument = { id: string; kind: string; content: string; searchText?: string; entities?: string[] };

// Individual facts retain their role/project attribution when retrieved independently.
export const knowledgeDocuments: KnowledgeDocument[] = [
  { id: "profile", kind: "profile", content: `${siteConfig.name}. ${siteConfig.summary} Location: ${siteConfig.location}; ${siteConfig.relocation}. Target roles: ${siteConfig.roles.join(", ")}. ${siteConfig.availability}. Email: ${siteConfig.email}. Phone: ${siteConfig.phone}. GitHub: ${siteConfig.github}. LinkedIn: ${siteConfig.linkedin}. Portfolio: ${siteConfig.portfolio}.` },
  { id: "work-history", kind: "experience", content: `Complete professional work history: ${experiences.map((job) => `${job.title}, ${job.company}, ${job.location}, ${job.dates}`).join("; ")}. Research is a separate academic role, not commercial employment.` },
  ...experiences.flatMap((job, index) => job.bullets.map((bullet, fact) => ({ id: `experience-${index}-${fact}`, kind: "experience", entities: [job.company], content: `${job.title} at ${job.company}, ${job.location}, ${job.dates}: ${bullet}` }))),
  { id: "research", kind: "research", content: `${researchExperience.role} at ${researchExperience.organization}. ${researchExperience.highlights.join(" ")} Technologies: ${researchExperience.technologies.join(", ")}.` },
  { id: "education", kind: "education", content: `Education: ${education.map((item) => `${item.degree}, ${item.school}, ${item.location}, ${item.dates}`).join("; ")}.` },
  { id: "certifications", kind: "certifications", content: `Certifications: ${certifications.map((item) => `${item.name}, ${item.issuer}${item.credentialUrl ? ` (${item.credentialUrl})` : " (no public credential link available)"}`).join("; ")}.` },
  { id: "featured-projects", kind: "projects", content: `Featured projects: ${projects.filter((item) => item.featured).map((item) => `${item.title}: ${item.summary}`).join("; ")}` },
  ...projects.map((project) => ({ id: `project-${project.slug}`, kind: "project", entities: [project.title, project.slug.replaceAll("-", " ")], searchText: `${project.title}. ${project.problem ?? ""} ${project.solution ?? ""} ${project.summary} ${project.tech.join(", ")}`, content: `${project.title}: ${project.summary} Architecture: ${project.architecture} Key features: ${project.bullets.join(" ")} Technologies: ${project.tech.join(", ")}. ${project.repoUrl ? `Repository: ${project.repoUrl}.` : "No public repository is available."} ${project.liveUrl ? `Live demo: ${project.liveUrl}.` : "No public live demo is available."}` })),
  ...skills.map((group, index) => ({ id: `skills-${index}`, kind: "skills", content: `Skills and tools - ${group.category}: ${group.items.join(", ")}. These are portfolio capabilities, not evidence that every tool was used in every job.` }))
];
