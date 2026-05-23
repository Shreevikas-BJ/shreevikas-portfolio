import { NextResponse } from "next/server";
import { chatbotContext, refusalMessage } from "@/data/chatbotContext";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GroqResponse = {
  choices?: Array<{ message?: { content?: string } }>;
};

class GroqRequestError extends Error {
  status: number;
  statusText: string;
  body: string;

  constructor(status: number, statusText: string, body: string) {
    super(`Groq request failed with status ${status}`);
    this.name = "GroqRequestError";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

const GROQ_MIN_INTERVAL_MS = 6500;
let nextGroqRequestAt = 0;
let groqQueue: Promise<void> = Promise.resolve();

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

function normalizeHistory(history?: ChatMessage[]) {
  if (!Array.isArray(history)) return [];

  const alternatingHistory = history
    .filter((item) => item.role === "user" || item.role === "assistant")
    .map((item) => ({
      role: item.role,
      content: String(item.content || "").trim().slice(0, 600)
    }))
    .filter((item) => item.content)
    .reduce<ChatMessage[]>((items, item) => {
      const previous = items.at(-1);

      if (previous?.role === item.role) {
        previous.content = `${previous.content}\n\n${item.content}`.slice(0, 600);
        return items;
      }

      items.push(item);
      return items;
    }, []);

  let safeHistory = alternatingHistory.slice(-4);

  while (safeHistory[0]?.role === "assistant") {
    safeHistory = safeHistory.slice(1);
  }

  if (safeHistory.at(-1)?.role === "user") {
    safeHistory = safeHistory.slice(0, -1);
  }

  return safeHistory;
}

async function delay(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function runQueuedGroqRequest<T>(operation: () => Promise<T>) {
  const previousQueue = groqQueue;
  let releaseQueue: () => void = () => undefined;

  groqQueue = new Promise<void>((resolve) => {
    releaseQueue = resolve;
  });

  await previousQueue;

  try {
    const waitTime = Math.max(0, nextGroqRequestAt - Date.now());

    if (waitTime > 0) {
      await delay(waitTime);
    }

    return await operation();
  } finally {
    nextGroqRequestAt = Date.now() + GROQ_MIN_INTERVAL_MS;
    releaseQueue();
  }
}

async function fetchGroqCompletion(apiKey: string, messages: Array<{ role: string; content: string }>) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      temperature: 0.2,
      max_tokens: 300,
      messages
    })
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.error("Groq chatbot request failed.", {
      status: response.status,
      statusText: response.statusText,
      body: body.slice(0, 1000)
    });
    throw new GroqRequestError(response.status, response.statusText, body);
  }

  return (await response.json()) as GroqResponse;
}

function getRetryDelay(error: GroqRequestError, attempt: number) {
  const retryAfterMatch = error.body.match(/try again in ([\d.]+)s/i);

  if (retryAfterMatch?.[1]) {
    return Math.ceil(Number(retryAfterMatch[1]) * 1000) + 750;
  }

  return error.status === 429 ? 5000 * attempt : 1000 * attempt;
}

async function fetchGroqCompletionWithRetry(
  apiKey: string,
  messages: Array<{ role: string; content: string }>
) {
  const maxAttempts = 4;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await fetchGroqCompletion(apiKey, messages);
    } catch (error) {
      const retryable =
        error instanceof GroqRequestError &&
        (error.status === 429 || error.status === 500 || error.status === 502 || error.status === 503);

      if (!retryable || attempt === maxAttempts) {
        throw error;
      }

      await delay(getRetryDelay(error, attempt));
    }
  }

  throw new Error("Groq retry loop exited unexpectedly.");
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

    const safeHistory = normalizeHistory(history);

    const groqMessages = [
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
    ];

    const data = await runQueuedGroqRequest(() => fetchGroqCompletionWithRetry(apiKey, groqMessages));
    const answer = data.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      answer: answer || "I could not generate a response from the available portfolio context."
    });
  } catch (error) {
    if (error instanceof GroqRequestError) {
      return NextResponse.json(
        { error: "The assistant could not respond right now. Please try again later." },
        { status: error.status === 429 ? 503 : 502 }
      );
    }

    console.error("Unexpected chatbot route error.", {
      error: error instanceof Error ? error.message : String(error)
    });

    return NextResponse.json(
      { error: "Unexpected chatbot error. Please try again." },
      { status: 500 }
    );
  }
}
