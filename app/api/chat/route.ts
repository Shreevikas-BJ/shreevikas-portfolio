import { NextResponse } from "next/server";
import { chatbotContext, refusalMessage } from "@/data/chatbotContext";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const relatedTerms = [
  "shreevikas",
  "resume",
  "project",
  "projects",
  "skill",
  "skills",
  "experience",
  "education",
  "certification",
  "research",
  "aiops",
  "aws",
  "data",
  "engineering",
  "engineer",
  "analytics",
  "rag",
  "cloud",
  "snowflake",
  "databricks",
  "kafka",
  "spark",
  "pyspark",
  "dbt",
  "airflow",
  "neutralseek",
  "whiterock",
  "iit",
  "illinois",
  "pin",
  "pinn",
  "pinns",
  "groq",
  "open",
  "role",
  "roles",
  "hire",
  "contact",
  "email",
  "github",
  "linkedin",
  "portfolio",
  "technology",
  "technologies",
  "ml",
  "machine learning",
  "ai",
  "llm"
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isRelatedQuestion(message: string) {
  const normalized = message.toLowerCase();
  return relatedTerms.some((term) => normalized.includes(term));
}

export async function POST(request: Request) {
  try {
    const { email, message, history } = (await request.json()) as {
      email?: string;
      message?: string;
      history?: ChatMessage[];
    };

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email is required before using the assistant." },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    if (!isRelatedQuestion(message)) {
      return NextResponse.json({ answer: refusalMessage });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const safeHistory = Array.isArray(history)
      ? history
          .filter((item) => item.role === "user" || item.role === "assistant")
          .slice(-8)
          .map((item) => ({
            role: item.role,
            content: String(item.content).slice(0, 1200)
          }))
      : [];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.2,
        max_tokens: 450,
        messages: [
          {
            role: "system",
            content: `You are Shreevikas's AI Assistant for a recruiter-facing portfolio website.

Rules:
- Answer only using the portfolio context below.
- Keep answers concise, professional, and recruiter-friendly.
- Do not invent employers, dates, degrees, metrics, credentials, links, or skills.
- If the user asks outside Shreevikas's professional background, projects, skills, research, certifications, education, or experience, reply exactly: "${refusalMessage}"
- If the portfolio context does not contain an answer, say that the detail is not available in the portfolio context.
- Never mention private implementation details or environment variables.

Portfolio context:
${chatbotContext}`
          },
          ...safeHistory,
          {
            role: "user",
            content: message.trim().slice(0, 1600)
          }
        ]
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "The assistant could not respond right now. Please try again later." },
        { status: response.status }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const answer = data.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      answer: answer || "I could not generate a response from the available portfolio context."
    });
  } catch {
    return NextResponse.json(
      { error: "Unexpected chatbot error. Please try again." },
      { status: 500 }
    );
  }
}
