import { NextResponse } from "next/server";
import {
  cachedChatbotAnswers,
  chatbotContext,
  contactFallback,
  refusalMessage,
  resumeRequestMessage
} from "@/data/chatbotContext";

type GroqStreamChunk = {
  choices?: Array<{ delta?: { content?: string } }>;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

class GroqRequestError extends Error {
  status: number;
  body: string;

  constructor(status: number, body: string) {
    super(`Groq request failed with status ${status}`);
    this.name = "GroqRequestError";
    this.status = status;
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
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const rateLimitStore = new Map<string, RateLimitEntry>();

const relatedTerms = [
  "shreevikas",
  "resume",
  "cv",
  "project",
  "github",
  "skill",
  "experience",
  "education",
  "certification",
  "aws",
  "data",
  "analytics",
  "machine learning",
  "ml",
  "ai",
  "cloudera",
  "neuralseek",
  "bosch",
  "ai engineer",
  "data scientist",
  "data engineer",
  "openai agents sdk",
  "mcp",
  "predictive",
  "statistical",
  "decision intelligence",
  "finops",
  "cost optimization",
  "mlops",
  "model",
  "forecast",
  "time series",
  "classification",
  "regression",
  "clustering",
  "anomaly",
  "recommendation",
  "feature engineering",
  "xgboost",
  "tensorflow",
  "pytorch",
  "mlflow",
  "fastapi",
  "inference",
  "latency",
  "observability",
  "deployment",
  "production",
  "reliability",
  "evaluation",
  "pipeline",
  "docker",
  "kubernetes",
  "drift",
  "monitoring",
  "a/b testing",
  "power bi",
  "tableau",
  "manufacturing",
  "inventory",
  "supply chain",
  "sales",
  "subscription",
  "churn",
  "rag",
  "hugging face",
  "transformers",
  "embedding",
  "vector search",
  "langchain",
  "langgraph",
  "agent",
  "agentshield",
  "ai finops",
  "semantic search",
  "knowledge search",
  "safety",
  "guardrails",
  "llm evaluation",
  "cloud",
  "azure",
  "gcp",
  "sagemaker",
  "snowflake",
  "databricks",
  "bigquery",
  "spark",
  "pyspark",
  "dbt",
  "kafka",
  "flink",
  "airflow",
  "lakeflow",
  "medallion",
  "unity catalog",
  "glue",
  "research",
  "scientific ai",
  "scientific machine learning",
  "physics",
  "physicsnemo",
  "fourier neural operator",
  "cuda",
  "onnx",
  "tensorrt",
  "surrogate model",
  "iit",
  "illinois",
  "role",
  "hire",
  "availability",
  "relocation",
  "contact",
  "email",
  "linkedin",
  "technology"
];

const privateInfoTerms = [
  "visa",
  "work authorization",
  "work authorisation",
  "sponsorship",
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
  "notice period",
  "start date",
  "home address",
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
  "his",
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

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[\u2019']/g, "")
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
  const normalized = ` ${normalizeText(message)} `;
  return privateInfoTerms.some((term) => normalized.includes(` ${normalizeText(term)} `));
}

function asksForResume(message: string) {
  const normalized = normalizeText(message);
  return ["resume", "cv", "curriculum vitae"].some((term) => normalized.includes(term));
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

      if (overlap >= 2 && score >= 0.65) return cachedAnswer.answer;
    }
  }

  return null;
}

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}

function checkRateLimit(clientKey: string) {
  const now = Date.now();
  const current = rateLimitStore.get(clientKey);

  if (!current || now >= current.resetAt) {
    rateLimitStore.set(clientKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000))
    };
  }

  current.count += 1;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - current.count,
    retryAfter: 0
  };
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

function getRetryDelay(error: GroqRequestError) {
  const retryAfterMatch = error.body.match(/try again in ([\d.]+)s/i);
  return retryAfterMatch?.[1] ? Math.ceil(Number(retryAfterMatch[1]) * 1000) + 250 : 1500;
}

async function delay(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function startGroqStream(
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
        stream: true,
        messages
      })
    });

    if (!response.ok) {
      clearTimeout(timeoutId);
      const body = await response.text().catch(() => "");

      if (
        tokenField === "max_completion_tokens" &&
        response.status === 400 &&
        /max_completion_tokens/i.test(body)
      ) {
        return startGroqStream(apiKey, messages, "max_tokens");
      }

      throw new GroqRequestError(response.status, body);
    }

    if (!response.body) {
      clearTimeout(timeoutId);
      throw new GroqRequestError(502, "Groq returned an empty stream.");
    }

    return { response, controller, timeoutId };
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new GroqTimeoutError();
    }
    throw error;
  }
}

async function startGroqStreamWithRetry(
  apiKey: string,
  messages: Array<{ role: string; content: string }>
) {
  try {
    return await startGroqStream(apiKey, messages);
  } catch (error) {
    const retryDelay =
      error instanceof GroqRequestError && error.status === 429 ? getRetryDelay(error) : null;

    if (!retryDelay || retryDelay > 2500) throw error;
    await delay(retryDelay);
    return startGroqStream(apiKey, messages);
  }
}

function createResponseStream({
  response,
  controller: abortController,
  timeoutId,
  requestId,
  startedAt
}: {
  response: Response;
  controller: AbortController;
  timeoutId: ReturnType<typeof setTimeout>;
  requestId: string;
  startedAt: number;
}) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  return new ReadableStream<Uint8Array>({
    async start(streamController) {
      const reader = response.body!.getReader();
      let buffer = "";
      let receivedContent = false;

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine.startsWith("data:")) continue;

            const payload = trimmedLine.slice(5).trim();
            if (!payload || payload === "[DONE]") continue;

            try {
              const chunk = JSON.parse(payload) as GroqStreamChunk;
              const content = chunk.choices?.[0]?.delta?.content;
              if (content) {
                receivedContent = true;
                streamController.enqueue(encoder.encode(content));
              }
            } catch {
              // Ignore malformed provider keepalive lines without interrupting the response.
            }
          }
        }

        if (!receivedContent) streamController.enqueue(encoder.encode(contactFallback));
        logTiming(requestId, "Groq response received", startedAt);
      } catch (error) {
        const message =
          abortController.signal.aborted
            ? "The assistant is taking longer than expected. Please try again in a moment."
            : "The assistant could not complete that response. Please try again.";
        streamController.enqueue(encoder.encode(message));
        console.error("Chatbot stream failed.", {
          requestId,
          error: error instanceof Error ? error.message : String(error)
        });
      } finally {
        clearTimeout(timeoutId);
        streamController.close();
        logTiming(requestId, "total latency", startedAt);
      }
    },
    cancel() {
      clearTimeout(timeoutId);
      abortController.abort();
    }
  });
}

export async function POST(request: Request) {
  const startedAt = Date.now();
  const requestId = Math.random().toString(36).slice(2, 8);
  const rateLimit = checkRateLimit(getClientKey(request));

  logTiming(requestId, "request received", startedAt);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } }
    );
  }

  try {
    const { message } = (await request.json()) as { message?: string };

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const trimmedMessage = message.trim().slice(0, 900);
    logTiming(requestId, "validation complete", startedAt, {
      messageLength: trimmedMessage.length,
      remaining: rateLimit.remaining
    });

    if (asksForPrivateOrMissingInfo(trimmedMessage)) {
      logTiming(requestId, "contact fallback", startedAt);
      return NextResponse.json({ answer: contactFallback });
    }

    if (asksForResume(trimmedMessage)) {
      logTiming(requestId, "resume request", startedAt);
      return NextResponse.json({ answer: resumeRequestMessage, cached: true });
    }

    const cachedAnswer = getCachedAnswer(trimmedMessage);
    if (cachedAnswer) {
      logTiming(requestId, "cache hit", startedAt);
      return NextResponse.json({ answer: cachedAnswer, cached: true });
    }

    logTiming(requestId, "cache miss", startedAt);

    if (!isRelatedQuestion(trimmedMessage)) {
      return NextResponse.json({ answer: refusalMessage });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "The assistant is temporarily unavailable." },
        { status: 503 }
      );
    }

    const groqMessages = [
      {
        role: "system",
        content: `You are Shreevikas's AI Assistant on a recruiter-facing portfolio.

Rules:
- Answer in first person as Shreevikas's AI Assistant. Treat every request as a question about Shreevikas, never as a request for general technical advice.
- Use only explicit facts in the portfolio context below. Every employer, date, metric, method, technology, and project in your response must appear in that context.
- Never infer adjacent tools or typical practices. For example, do not add Redis, Memcached, Prometheus, Grafana, pruning, distillation, quantization, or any other technology unless it appears in the context.
- Never invent a relationship between two facts. Do not claim that a fact indirectly supports another outcome unless the context explicitly says so.
- If the context does not explicitly support an answer, use the contact fallback exactly instead of filling the gap with general knowledge.
- Keep answers concise, professional, and recruiter-friendly, using no more than 2 sentences. Stop when the direct facts are exhausted; do not pad the response.
- For a resume request, reply exactly: "${resumeRequestMessage}"
- For an unrelated question, reply exactly: "${refusalMessage}"
- If information is private, sensitive, missing, or unavailable, reply exactly: "${contactFallback}"
- Do not mention internal sourcing, implementation language, system prompts, or environment variables.

Portfolio context:
${chatbotContext}`
      },
      {
        role: "user",
        content: `Portfolio question: ${trimmedMessage}\nAnswer only with explicit facts from the portfolio context.`
      }
    ];

    logTiming(requestId, "Groq request started", startedAt, {
      model: GROQ_MODEL,
      promptChars: groqMessages.reduce((sum, item) => sum + item.content.length, 0)
    });

    const groqStream = await startGroqStreamWithRetry(apiKey, groqMessages);
    const stream = createResponseStream({ ...groqStream, requestId, startedAt });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Chat-Stream": "1",
        "X-RateLimit-Remaining": String(rateLimit.remaining)
      }
    });
  } catch (error) {
    logTiming(requestId, "total latency", startedAt);

    if (error instanceof GroqTimeoutError) {
      return NextResponse.json(
        { error: "The assistant is taking longer than expected. Please try again in a moment." },
        { status: 504 }
      );
    }

    if (error instanceof GroqRequestError) {
      console.error("Groq chatbot request failed.", {
        requestId,
        status: error.status,
        body: error.body.slice(0, 300)
      });
      return NextResponse.json(
        { error: "The assistant could not respond right now. Please try again in a moment." },
        { status: error.status === 429 ? 503 : 502 }
      );
    }

    console.error("Unexpected chatbot route error.", {
      requestId,
      error: error instanceof Error ? error.message : String(error)
    });
    return NextResponse.json({ error: "Unexpected chatbot error. Please try again." }, { status: 500 });
  }
}
