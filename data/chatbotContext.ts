import { siteConfig } from "./portfolio";

export const resumeRequestMessage = `For my latest resume, please contact me directly at [${siteConfig.email}](mailto:${siteConfig.email}).`;
export const contactFallback = `Please contact Shreevikas directly at [${siteConfig.email}](mailto:${siteConfig.email}) for further information.`;
export const refusalMessage = `I can answer questions about Shreevikas's professional background, projects, skills, tools, research, education, and certifications. For anything else, please contact him directly at [${siteConfig.email}](mailto:${siteConfig.email}).`;
export const technicalClarification = "That specific technology isn't covered in my portfolio yet. Are you asking about machine learning, data pipelines, cloud infrastructure, or RAG? I can explain my closest hands-on experience.";

export function isTechnicalExperienceQuestion(normalized: string) {
  return /\b(tech(?:nology|nologies)?|tools?|cloud|data|machine learning|ml|ai|rag|pipelines?|programming|software|database|framework|stack|platform|services?|engineering)\b/.test(normalized) ||
    /\b(?:have you|has he|did you|do you|have i) (?:ever )?(?:used|worked|built|deployed|tried)\b/.test(normalized) ||
    /\b(?:your|his) experience (?:with|using|in)\b/.test(normalized);
}

// Only conversational housekeeping is deterministic. Professional questions use RAG.
export function getGreetingAnswer(normalized: string): string | null {
  if (/^(?:(?:hi|hello|hey|please|tell me)\s+)*(?:what is|whats|what s)?\s*(?:your|his|shreevikas)\s*(?:full\s+)?name$/.test(normalized) || /^(?:name|who is shreevikas(?: jagadish)?)$/.test(normalized)) return `My name is ${siteConfig.name}.`;
  if (/^(?:hi|hello|hey|hello there|good morning|good afternoon|good evening|how are you|hi how are you|hello how are you)$/.test(normalized)) return "Hi! I'm Shreevikas's portfolio assistant. Ask me about his skills, experience, research, projects, or certifications.";
  if (/^(?:who are you|are you (?:a bot|an ai|a robot)|what is this assistant)$/.test(normalized)) return "I'm Shreevikas's AI portfolio assistant. My answers come from his professional background and portfolio information.";
  if (/^(?:thanks|thank you|thanks a lot|bye|goodbye)$/.test(normalized)) return `You're welcome. You can contact me at [${siteConfig.email}](mailto:${siteConfig.email}).`;
  return null;
}
