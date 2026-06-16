"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Loader2, Mail, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { suggestedQuestions } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const welcomeMessage: Message = {
  role: "assistant",
  content:
    "Hi, I am Shreevikas's AI Assistant. Share your email to ask about my projects, skills, experience, certifications, and fit for data engineering or AI data engineering roles."
};

const refusalMessage =
  "I can only answer questions about my professional background, projects, skills, research, and experience. For anything specific, please contact me directly at shreevikasjagadish7@gmail.com.";

const CHAT_REQUEST_TIMEOUT_MS = 15000;
const timeoutMessage = "The assistant is taking longer than expected. Please try again in a moment.";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function renderMessageContent(content: string) {
  const linkMatch = content.match(/\[([^\]]+)\]\((mailto:[^)]+)\)/);
  if (!linkMatch || linkMatch.index === undefined) return content;

  const [markdownLink, label, href] = linkMatch;
  const before = content.slice(0, linkMatch.index);
  const after = content.slice(linkMatch.index + markdownLink.length);

  return (
    <>
      {before}
      <a className="font-semibold underline-offset-4 hover:underline" href={href}>
        {label}
      </a>
      {after}
    </>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<Message[]>([welcomeMessage]);
  const emailRef = useRef("");
  const requestInFlightRef = useRef(false);

  const replaceMessages = (nextMessages: Message[]) => {
    messagesRef.current = nextMessages;
    setMessages(nextMessages);
  };

  const appendMessage = (message: Message) => {
    setMessages((currentMessages) => {
      const nextMessages = [...currentMessages, message];
      messagesRef.current = nextMessages;
      return nextMessages;
    });
  };

  useEffect(() => {
    const storedEmail = window.localStorage.getItem("portfolio-chat-email") || "";
    if (storedEmail) {
      emailRef.current = storedEmail;
      setEmail(storedEmail);
      setEmailInput(storedEmail);
      replaceMessages([
        {
          role: "assistant",
            content:
            "Thanks. You can now ask questions about my background, projects, skills, certifications, and experience."
        }
      ]);
    }
  }, []);

  useEffect(() => {
    emailRef.current = email;
  }, [email]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const submitEmail = async (event: FormEvent) => {
    event.preventDefault();
    setEmailError("");

    if (!isValidEmail(emailInput)) {
      setEmailError("Enter a valid email to start the chat.");
      return;
    }

    const normalizedEmail = emailInput.trim().toLowerCase();
    setEmailSubmitting(true);
    try {
      void fetch("/api/chat/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({ email: normalizedEmail })
      }).catch(() => undefined);
    } catch (notificationError) {
      // Do not block recruiter access if notification delivery is temporarily unavailable.
      console.error("Chatbot email notification request failed.", notificationError);
    } finally {
      setEmailSubmitting(false);
    }

    window.localStorage.setItem("portfolio-chat-email", normalizedEmail);
    emailRef.current = normalizedEmail;
    setEmail(normalizedEmail);
    replaceMessages([
      {
        role: "assistant",
        content:
          "Thanks. You can now ask questions about my background, projects, skills, certifications, and experience."
      }
    ]);
  };

  const sendMessage = async (messageText?: string) => {
    const trimmed = (messageText ?? input).trim();
    const activeEmail = emailRef.current || email;

    if (!trimmed || !activeEmail) return;

    if (requestInFlightRef.current) {
      console.warn("Ignoring chatbot message because a request is already in flight.");
      return;
    }

    requestInFlightRef.current = true;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), CHAT_REQUEST_TIMEOUT_MS);

    appendMessage({ role: "user", content: trimmed });
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          email: activeEmail,
          message: trimmed
        })
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "The assistant could not respond.");
      }

      appendMessage({
        role: "assistant",
        content: data.answer || refusalMessage
      });
    } catch (requestError) {
      console.error("Chatbot message request failed.", requestError);
      const errorMessage =
        requestError instanceof DOMException && requestError.name === "AbortError"
          ? timeoutMessage
          : requestError instanceof Error
            ? requestError.message
            : "Unexpected chat error.";

      setError(errorMessage);
      appendMessage({
        role: "assistant",
        content: errorMessage
      });
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
      requestInFlightRef.current = false;
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close Shreevikas AI Assistant" : "Open Shreevikas AI Assistant"}
        onClick={() => setOpen((value) => !value)}
        className="focus-ring fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/60 bg-primary text-primary-foreground shadow-glow transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="surface fixed bottom-24 right-4 z-[70] flex h-[min(680px,calc(100vh-7.5rem))] w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-2xl shadow-2xl sm:right-5"
          >
            <div className="border-b border-border bg-muted/40 p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-black">Shreevikas&apos;s AI Assistant</h2>
                    <p className="text-xs text-muted-foreground">
                      Answers using my available portfolio context.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!email ? (
              <form onSubmit={submitEmail} className="flex flex-1 flex-col justify-center gap-4 p-5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-7 w-7" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-black">Enter your email to start</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    This assistant answers using my available portfolio context.
                    Your email unlocks chat and notifies me.
                  </p>
                </div>
                <label className="grid gap-2 text-sm font-semibold">
                  Email address
                  <input
                    value={emailInput}
                    onChange={(event) => setEmailInput(event.target.value)}
                    placeholder="recruiter@company.com"
                    className="focus-ring min-h-11 rounded-lg border border-border bg-background px-3 text-sm"
                    type="email"
                    autoComplete="email"
                  />
                </label>
                {emailError ? <p className="text-sm font-medium text-red-500">{emailError}</p> : null}
                <Button type="submit" className="w-full" disabled={emailSubmitting}>
                  {emailSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Starting
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </form>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto p-4">
                  {messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={cn(
                        "flex",
                        message.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "border border-border bg-muted/60 text-foreground"
                        )}
                      >
                        {renderMessageContent(message.content)}
                      </div>
                    </div>
                  ))}
                  {loading ? (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 rounded-2xl border border-border bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Thinking
                      </div>
                    </div>
                  ) : null}
                  <div ref={scrollRef} />
                </div>

                <div className="border-t border-border p-4">
                  <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => sendMessage(question)}
                        disabled={loading}
                        className="focus-ring shrink-0 rounded-full border border-border bg-muted/60 px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-foreground disabled:opacity-60"
                      >
                        {question}
                      </button>
                    ))}
                  </div>

                  {error ? <p className="mb-2 text-xs font-medium text-red-500">{error}</p> : null}

                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      sendMessage();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      placeholder="Ask about my background..."
                      className="focus-ring min-h-11 min-w-0 flex-1 rounded-lg border border-border bg-background px-3 text-sm"
                      disabled={loading}
                    />
                    <Button
                      type="submit"
                      className="h-11 w-11 px-0"
                      disabled={loading || !input.trim()}
                      aria-label="Send message"
                    >
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                  </form>
                </div>
              </>
            )}
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
