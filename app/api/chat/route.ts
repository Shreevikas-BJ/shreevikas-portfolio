import { NextResponse } from "next/server";
import {
  cachedChatbotAnswers,
  chatbotContext,
  contactFallback,
  refusalMessage,
  resumeRequestMessage
} from "@/data/chatbotContext";

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

class GroqTimeoutError extends Error {
  constructor() {
    super("Groq request timed out.");
    this.name = "GroqTimeoutError";
  }
}

const GROQ_MODEL = "llama-3.1-8b-instant";
const GROQ_TIMEOUT_MS = 15000;
const MAX_COMPLETION_TOKENS = 180;

const relatedTerms = [
  "shreevikas",
  "resume",
  "cv",
  "project",
  "projects",
  "skill",
  "skills",
  "experience",
  "education",
  "aws",
  "data",
  "science",
  "scientist",
  "analytics",
  "machine learning",
  "ml",
  "ai",
  "ai ml",
  "predictive",
  "predictive modeling",
  "statistical",
  "statistical learning",
  "decision intelligence",
  "mlops",
  "model",
  "models",
  "modeling",
  "forecast",
  "forecasting",
  "demand forecasting",
  "time series",
  "classification",
  "regression",
  "clustering",
  "anomaly",
  "recommendation",
  "feature engineering",
  "xgboost",
  "scikit",
  "scikit-learn",
  "lightgbm",
  "tensorflow",
  "pytorch",
  "mlflow",
  "fastapi",
  "docker",
  "kubernetes",
  "drift",
  "monitoring",
  "a/b testing",
  "ab testing",
  "power bi",
  "tableau",
  "manufacturing",
  "quality",
  "inventory",
  "supply chain",
  "rag",
  "hugging face",
  "transformers",
  "embedding",
  "vector search",
  "langchain",
  "cloud",
  "azure",
  "sagemaker",
  "snowflake",
  "databricks",
  "bigquery",
  "spark",
  "pyspark",
  "tech data",
  "bosch",
  "iit",
  "illinois",
  "role",
  "roles",
  "hire",
  "hiring",
  "available",
  "availability",
  "relocation",
  "contact",
  "email",
  "github",
  "linkedin",
  "portfolio",
  "technology",
  "technologies"
];

const privateInfoTerms = [
  "visa",
  "work authorization",
  "work authorisation",
  "authorization status",
  "authorisation status",
  "sponsorship",
  "sponsor",
  "h1b",
  "h-1b",
  "opt",
  "cpt",
  "green card",
  "citizenship",
  "salary",
  "compensation",
  "pay range",
  "hourly rate",
  "rate expectation",
  "salary expectation",
  "notice period",
  "start date",
  "available to start",
  "personal details",
  "private details",
  "home address",
  "current address",
  "date of birth",
  "age",
  "marital",
  "family"
];

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "about",
  "does",
  "for",
  "has",
  "have",
  "is",
  "me",
  "of",
  "s",
  "shreevikas",
  "tell",
  "the",
  "to",
  "used",
  "what",
  "with"
]);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getTokens(value: string) {
  return normalizeText(value)
    .split(/\s+/)
    .filter((token) => token && !stopWords.has(token));
}

function isRelatedQuestion(message: string) {
  const normalized = normalizeText(message);
  return relatedTerms.some((term) => normalized.includes(normalizeText(term)));
}

function asksForPrivateOrMissingInfo(message: string) {
  const normalized = normalizeText(message);
  const tokens = new Set(normalized.split(/\s+/).filter(Boolean));

  return privateInfoTerms.some((term) => {
    const normalizedTerm = normalizeText(term);
    if (normalizedTerm.includes(" ")) {
      return normalized.includes(normalizedTerm);
    }

    return tokens.has(normalizedTerm);
  });
}

function asksForResume(message: string) {
  const normalized = normalizeText(message);
  return (
    normalized.includes("resume") ||
    normalized.includes("cv") ||
    normalized.includes("curriculum vitae")
  );
}

function getCachedAnswer(message: string) {
  const normalizedMessage = normalizeText(message);
  const messageTokens = new Set(getTokens(message));

  for (const cachedAnswer of cachedChatbotAnswers) {
    for (const question of cachedAnswer.questions) {
      const normalizedQuestion = normalizeText(question);

      if (
        normalizedMessage === normalizedQuestion ||
        normalizedMessage.includes(normalizedQuestion) ||
        normalizedQuestion.includes(normalizedMessage)
      ) {
        return cachedAnswer.answer;
      }

      const questionTokens = getTokens(question);
      const overlap = questionTokens.filter((token) => messageTokens.has(token)).length;
      const score = overlap / Math.max(questionTokens.length, 1);

      if (overlap >= 2 && score >= 0.65) {
        return cachedAnswer.answer;
      }
    }
  }

  return null;
}

function maskEmail(email?: string) {
  if (!email || !email.includes("@")) return "unknown";
  const [local, domain] = email.split("@");
  return `${local.slice(0, 2)}***@${domain}`;
}

function logTiming(
  requestId: string,
  event: string,
  startedAt: number,
  metadata: Record<string, unknown> = {}
) {
  console.info("[chatbot]", {
    requestId,
    event,
    elapsedMs: Date.now() - startedAt,
    ...metadata
  });
}

async function delay(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function getRetryDelay(error: GroqRequestError) {
  const retryAfterMatch = error.body.match(/try again in ([\d.]+)s/i);

  if (retryAfterMatch?.[1]) {
    return Math.ceil(Number(retryAfterMatch[1]) * 1000) + 250;
  }

  return 1500;
}

async function fetchGroqCompletion(
  apiKey: string,
  messages: Array<{ role: string; content: string }>,
  tokenField: "max_completion_tokens" | "max_tokens" = "max_completion_tokens"
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), GROQ_TIMEOUT_MS);

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.2,
        [tokenField]: MAX_COMPLETION_TOKENS,
        messages
      })
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");

      if (
        tokenField === "max_completion_tokens" &&
        response.status === 400 &&
        /max_completion_tokens/i.test(body)
      ) {
        return fetchGroqCompletion(apiKey, messages, "max_tokens");
      }

      console.error("Groq chatbot request failed.", {
        status: response.status,
        statusText: response.statusText,
        body: body.slice(0, 500)
      });
      throw new GroqRequestError(response.status, response.statusText, body);
    }

    return (await response.json()) as GroqResponse;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new GroqTimeoutError();
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchGroqCompletionWithFastRetry(
  apiKey: string,
  messages: Array<{ role: string; content: string }>
) {
  try {
    return await fetchGroqCompletion(apiKey, messages);
  } catch (error) {
    const retryDelay =
      error instanceof GroqRequestError && error.status === 429 ? getRetryDelay(error) : null;

    if (!retryDelay || retryDelay > 2500) {
      throw error;
    }

    await delay(retryDelay);
    return fetchGroqCompletion(apiKey, messages);
  }
}

export async function POST(request: Request) {
  const startedAt = Date.now();
  const requestId = Math.random().toString(36).slice(2, 8);
  let maskedEmail = "unknown";

  logTiming(requestId, "request received", startedAt);

  try {
    const { email, message } = (await request.json()) as {
      email?: string;
      message?: string;
    };

    maskedEmail = maskEmail(email);

    if (!email || !isValidEmail(email)) {
      logTiming(requestId, "validation failed", startedAt, { reason: "invalid email" });
      return NextResponse.json(
        { error: "A valid email is required before using the assistant." },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      logTiming(requestId, "validation failed", startedAt, { email: maskedEmail, reason: "empty message" });
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const trimmedMessage = message.trim().slice(0, 900);

    logTiming(requestId, "validation complete", startedAt, {
      email: maskedEmail,
      messageLength: trimmedMessage.length
    });

    if (asksForPrivateOrMissingInfo(trimmedMessage)) {
      logTiming(requestId, "contact fallback", startedAt, { email: maskedEmail });
      return NextResponse.json({ answer: contactFallback });
    }

    if (asksForResume(trimmedMessage)) {
      logTiming(requestId, "resume request", startedAt, { email: maskedEmail });
      return NextResponse.json({ answer: resumeRequestMessage, cached: true });
    }

    const cachedAnswer = getCachedAnswer(trimmedMessage);

    if (cachedAnswer) {
      logTiming(requestId, "cache hit", startedAt, { email: maskedEmail });
      return NextResponse.json({ answer: cachedAnswer, cached: true });
    }

    logTiming(requestId, "cache miss", startedAt, { email: maskedEmail });

    if (!isRelatedQuestion(trimmedMessage)) {
      return NextResponse.json({ answer: refusalMessage });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const groqMessages = [
      {
        role: "system",
        content: `You are Shreevikas's AI Assistant for a recruiter-facing portfolio website.

Rules:
- Answer in first person as Shreevikas's AI Assistant.
- Use only the available portfolio context below.
- Keep answers concise, professional, recruiter-friendly, and usually 3-6 sentences.
- Do not invent employers, dates, degrees, metrics, credentials, links, or skills.
- Do not provide a resume download link or direct resume URL.
- If the user asks for my resume, reply exactly: "${resumeRequestMessage}"
- If the user asks outside my professional background, projects, skills, education, or experience, reply exactly: "${refusalMessage}"
- If information is missing, private, sensitive, or not available, reply exactly: "${contactFallback}"
- Do not use internal process, sourcing, or implementation language in user-facing answers.
- Never mention private implementation details or environment variables.

Portfolio context:
${chatbotContext}`
      },
      {
        role: "user",
        content: trimmedMessage
      }
    ];

    logTiming(requestId, "Groq request started", startedAt, {
      email: maskedEmail,
      model: GROQ_MODEL,
      promptChars: groqMessages.reduce((sum, item) => sum + item.content.length, 0)
    });

    const data = await fetchGroqCompletionWithFastRetry(apiKey, groqMessages);

    logTiming(requestId, "Groq response received", startedAt, { email: maskedEmail });

    const answer = data.choices?.[0]?.message?.content?.trim();
    const normalizedAnswer = normalizeText(answer || "");
    const shouldUseContactFallback =
      !answer ||
      normalizedAnswer.includes("not available") ||
      normalizedAnswer.includes("not provided") ||
      normalizedAnswer.includes("do not have") ||
      normalizedAnswer.includes("dont have") ||
      normalizedAnswer.includes("does not contain") ||
      normalizedAnswer.includes("portfolio context does not");

    return NextResponse.json({
      answer: shouldUseContactFallback ? contactFallback : answer
    });
  } catch (error) {
    if (error instanceof GroqTimeoutError) {
      return NextResponse.json(
        { error: "The assistant is taking longer than expected. Please try again in a moment." },
        { status: 504 }
      );
    }

    if (error instanceof GroqRequestError) {
      return NextResponse.json(
        { error: "The assistant could not respond right now. Please try again in a moment." },
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
  } finally {
    logTiming(requestId, "total latency", startedAt, { email: maskedEmail });
  }
}
