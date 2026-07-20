"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Loader2, Mail, RotateCcw, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { suggestedQuestions, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I am Shreevikas's AI Assistant. Ask me about my experience, projects, research, technical skills, education, certifications, or target roles."
};

const fallbackMessage =
  "I can only answer questions about my professional background, projects, skills, research, and experience. For anything specific, please contact me directly at shreevikasjagadish7@gmail.com.";
const timeoutMessage = "The assistant is taking longer than expected. Please try again in a moment.";
const CHAT_REQUEST_TIMEOUT_MS = 15000;

function createMessageId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function renderMessageContent(content: string) {
  const parts = content.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;

    const [, label, href] = match;
    const external = href.startsWith("http");

    return (
      <a
        key={`${href}-${index}`}
        className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    );
  });
}

export function Chatbot() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState("");
  const [retryMessage, setRetryMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const requestInFlightRef = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: reduceMotion || loading ? "auto" : "smooth"
    });
  }, [messages, loading, open, reduceMotion]);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 180);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const appendMessage = (message: Message) => {
    setMessages((previous) => [...previous, message]);
  };

  const sendMessage = async (messageText?: string) => {
    const trimmed = (messageText ?? input).trim();
    if (!trimmed || requestInFlightRef.current) return;

    requestInFlightRef.current = true;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), CHAT_REQUEST_TIMEOUT_MS);
    const userMessage: Message = {
      id: createMessageId("user"),
      role: "user",
      content: trimmed
    };
    let streamingMessageId = "";

    appendMessage(userMessage);
    setInput("");
    setLoading(true);
    setStreaming(false);
    setError("");
    setRetryMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({ message: trimmed })
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error || "The assistant could not respond right now.");
      }

      const isStream =
        response.headers.get("X-Chat-Stream") === "1" ||
        response.headers.get("content-type")?.includes("text/plain");

      if (isStream && response.body) {
        setStreaming(true);
        streamingMessageId = createMessageId("assistant");
        appendMessage({ id: streamingMessageId, role: "assistant", content: "" });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let answer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          answer += decoder.decode(value, { stream: true });
          const currentAnswer = answer;
          setMessages((previous) =>
            previous.map((message) =>
              message.id === streamingMessageId
                ? { ...message, content: currentAnswer }
                : message
            )
          );
        }

        answer += decoder.decode();
        if (!answer.trim()) {
          setMessages((previous) =>
            previous.map((message) =>
              message.id === streamingMessageId
                ? { ...message, content: fallbackMessage }
                : message
            )
          );
        }
      } else {
        const payload = (await response.json()) as { answer?: string };
        appendMessage({
          id: createMessageId("assistant"),
          role: "assistant",
          content: payload.answer || fallbackMessage
        });
      }
    } catch (requestError) {
      console.error("Chatbot request failed.", requestError);
      const message =
        requestError instanceof DOMException && requestError.name === "AbortError"
          ? timeoutMessage
          : requestError instanceof Error
            ? requestError.message
            : "The assistant could not respond right now.";

      if (streamingMessageId) {
        setMessages((previous) =>
          previous.filter(
            (chatMessage) => chatMessage.id !== streamingMessageId || chatMessage.content.trim()
          )
        );
      }
      setError(message);
      setRetryMessage(trimmed);
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
      setStreaming(false);
      requestInFlightRef.current = false;
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage();
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close Shreevikas AI Assistant" : "Open Shreevikas AI Assistant"}
        aria-expanded={open}
        aria-controls="portfolio-assistant"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring fixed bottom-4 right-4 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-primary text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.aside
            id="portfolio-assistant"
            role="dialog"
            aria-modal="false"
            aria-labelledby="assistant-title"
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="premium-card fixed inset-x-3 bottom-20 z-[70] flex h-[min(600px,calc(100dvh-6.5rem))] flex-col overflow-hidden !bg-background p-0 shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-5 sm:h-[min(660px,calc(100dvh-7.5rem))] sm:w-[420px]"
          >
            <header className="border-b border-border/70 bg-elevated px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h2 id="assistant-title" className="truncate text-sm font-bold">
                      Shreevikas&apos;s AI Assistant
                    </h2>
                    <p className="truncate text-xs text-muted-foreground">Portfolio-grounded answers</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={siteConfig.emailHref}
                    className="focus-ring rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    aria-label="Contact Shreevikas by email"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    aria-label="Close assistant"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </header>

            <div
              className="flex-1 space-y-3 overflow-y-auto bg-background/35 p-4"
              aria-live="polite"
              aria-busy={loading}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  data-message-role={message.role}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[88%] whitespace-pre-line rounded-lg px-3.5 py-2.5 text-sm leading-6",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "border border-border/80 bg-elevated/80 text-foreground"
                    )}
                  >
                    {message.content ? renderMessageContent(message.content) : (
                      <span className="inline-flex items-center gap-2 text-muted-foreground">
                        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                        Generating
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {loading && !streaming ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/80 px-3.5 py-2.5 text-sm text-muted-foreground">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                    Retrieving portfolio context
                  </div>
                </div>
              ) : null}

              <div ref={scrollRef} />
            </div>

            <footer className="border-t border-border/70 bg-elevated p-3">
              <div className="mb-2.5 flex gap-2 overflow-x-auto pb-1" aria-label="Suggested questions">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void sendMessage(question)}
                    disabled={loading}
                    className="focus-ring shrink-0 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>

              {error ? (
                <div className="mb-2 flex items-start justify-between gap-3 rounded-lg border border-error/30 bg-error/5 px-3 py-2 text-xs text-error" role="alert">
                  <span>{error}</span>
                  <button
                    type="button"
                    onClick={() => void sendMessage(retryMessage)}
                    disabled={loading || !retryMessage}
                    className="focus-ring inline-flex shrink-0 items-center gap-1 rounded text-xs font-bold hover:underline disabled:opacity-50"
                  >
                    <RotateCcw className="h-3 w-3" aria-hidden="true" />
                    Retry
                  </button>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="flex gap-2">
                <label htmlFor="assistant-question" className="sr-only">Ask a portfolio question</label>
                <input
                  ref={inputRef}
                  id="assistant-question"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about my work..."
                  className="focus-ring min-h-11 min-w-0 flex-1 rounded-lg border border-border bg-background/80 px-3 text-sm placeholder:text-muted-foreground"
                  disabled={loading}
                  maxLength={900}
                />
                <Button
                  type="submit"
                  className="h-11 w-11 shrink-0 px-0"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
              </form>

              <p className="mt-2 text-center text-[11px] leading-4 text-muted-foreground">
                AI-generated answers grounded in portfolio information.
              </p>
            </footer>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
