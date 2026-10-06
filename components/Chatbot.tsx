"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Loader2, Mail, RotateCcw, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type ComponentProps, type FormEvent } from "react";
import { MessageResponse } from "@/components/ai-elements/message";
import { siteConfig } from "@/data/portfolio";
import { rememberQuestion } from "@/data/chatbotContext";

type Message = { id: string; role: "user" | "assistant"; content: string };

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi, I'm Shreevikas's assistant. Ask me about his skills, experience, projects, research, tools, education, or certifications."
};
const questions = [
  "What's your name?",
  "What do you build?",
  "Tell me about your RAG experience.",
  "Which certifications do you hold?"
];
const timeoutMessage = "The assistant is taking longer than expected. Please try again in a moment.";
const CHAT_REQUEST_TIMEOUT_MS = 15000;

function PortfolioLink({ href, children }: ComponentProps<"a">) {
  if (!href || !/^(https?:\/\/|mailto:|\/projects\/)/i.test(href)) return <span>{children}</span>;
  const external = /^https?:/i.test(href);
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}</a>;
}
const markdownComponents = { a: PortfolioLink };

export function Chatbot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState("");
  const [retryMessage, setRetryMessage] = useState("");
  const transcript = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const requestInFlight = useRef(false);
  const activeRequest = useRef<AbortController | null>(null);
  const mounted = useRef(true);
  const panelOpen = useRef(open);
  const followOutput = useRef(true);
  const previousQuestion = useRef("");

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; activeRequest.current?.abort(); };
  }, []);

  useEffect(() => {
    panelOpen.current = open;
    if (!open) return;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), reduceMotion ? 0 : 180);
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose, reduceMotion]);

  useEffect(() => {
    if (open && messages.length > 1 && followOutput.current && transcript.current) transcript.current.scrollTop = transcript.current.scrollHeight;
  }, [messages, loading, open]);

  const sendMessage = async (messageText?: string, retry = false) => {
    const trimmed = (messageText ?? input).trim();
    if (!trimmed || requestInFlight.current) return;
    requestInFlight.current = true;
    followOutput.current = true;
    const controller = new AbortController();
    activeRequest.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), CHAT_REQUEST_TIMEOUT_MS);
    const assistantId = crypto.randomUUID();
    let answer = "";
    let streamingStarted = false;

    if (!retry) setMessages((previous) => [...previous, { id: crypto.randomUUID(), role: "user", content: trimmed }]);
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
        body: JSON.stringify({ message: trimmed, previousQuestion: previousQuestion.current })
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error || "The assistant could not respond right now.");
      }
      if (response.headers.get("X-Chat-Stream") === "1" && response.body) {
        streamingStarted = true;
        setStreaming(true);
        setMessages((previous) => [...previous, { id: assistantId, role: "assistant", content: "" }]);
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          answer += decoder.decode(value, { stream: true });
          const currentAnswer = answer;
          setMessages((previous) => previous.map((message) => message.id === assistantId ? { ...message, content: currentAnswer } : message));
        }
        answer += decoder.decode();
        const finalAnswer = answer.trim();
        if (!finalAnswer) throw new Error("The assistant returned an empty response. Please try again.");
        setMessages((previous) => previous.map((message) => message.id === assistantId ? { ...message, content: finalAnswer } : message));
      } else {
        const payload = (await response.json()) as { answer?: string };
        const jsonAnswer = payload.answer?.trim();
        if (!jsonAnswer) throw new Error("The assistant returned an empty response. Please try again.");
        setMessages((previous) => [...previous, { id: assistantId, role: "assistant", content: jsonAnswer }]);
      }
      previousQuestion.current = rememberQuestion(trimmed, previousQuestion.current);
    } catch (requestError) {
      if (!mounted.current) return;
      console.error("Portfolio assistant request failed.", requestError);
      if (streamingStarted) setMessages((previous) => previous.filter((message) => message.id !== assistantId));
      setError(controller.signal.aborted ? timeoutMessage : requestError instanceof TypeError ? "The assistant could not complete that response. Please try again." : requestError instanceof Error ? requestError.message : "The assistant could not respond right now.");
      setRetryMessage(trimmed);
    } finally {
      window.clearTimeout(timeoutId);
      activeRequest.current = null;
      requestInFlight.current = false;
      if (mounted.current) {
        setLoading(false);
        setStreaming(false);
        if (panelOpen.current) window.setTimeout(() => inputRef.current?.focus(), 0);
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); void sendMessage(); };

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          id="portfolio-assistant"
          className="assistant-panel"
          data-assistant-ui
          role="dialog"
          aria-modal="false"
          aria-labelledby="assistant-title"
          aria-describedby="assistant-disclaimer"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
        >
          <header className="assistant-header">
            <Bot size={22} aria-hidden="true" />
            <div><h2 id="assistant-title">Shreevikas&apos;s assistant</h2><p>Professional background &amp; projects</p></div>
            <button type="button" className="assistant-icon-button" onClick={onClose} aria-label="Close assistant" title="Close assistant"><X size={18} aria-hidden="true" /></button>
          </header>
          <div
            ref={transcript}
            className="assistant-transcript"
            role="log"
            aria-label="Conversation"
            aria-live="polite"
            aria-relevant="additions text"
            aria-busy={loading}
            tabIndex={0}
            onScroll={() => {
              const element = transcript.current;
              if (element) followOutput.current = element.scrollHeight - element.scrollTop - element.clientHeight < 60;
            }}
          >
            {messages.map((message) => (
              <div key={message.id} className="assistant-message" data-message-role={message.role}>
                <span className="assistant-message-author">{message.role === "user" ? "You" : "Assistant"}</span>
                {message.role === "assistant" ? (
                  message.content ? <MessageResponse components={markdownComponents} isAnimating={loading && streaming && message.id === messages.at(-1)?.id}>{message.content}</MessageResponse> : <span className="assistant-status">Preparing an answer...</span>
                ) : <p className="assistant-user-text">{message.content}</p>}
              </div>
            ))}
            {messages.length === 1 ? (
              <div className="assistant-suggestions" aria-label="Suggested questions">
                {questions.map((question) => <button key={question} type="button" onClick={() => void sendMessage(question)} disabled={loading}>{question}</button>)}
              </div>
            ) : null}
            {loading && !streaming ? <p className="assistant-status" role="status"><Loader2 size={16} aria-hidden="true" className="assistant-spinner" />Thinking...</p> : null}
            {error ? (
              <div className="assistant-error" role="alert">
                <p>{error}</p>
                <button type="button" onClick={() => void sendMessage(retryMessage, true)} disabled={loading || !retryMessage}><RotateCcw size={14} aria-hidden="true" />Retry</button>
              </div>
            ) : null}
          </div>
          <div className="assistant-composer">
            <form onSubmit={handleSubmit}>
              <label htmlFor="assistant-question" className="sr-only">Ask about Shreevikas&apos;s professional background</label>
              <textarea
                ref={inputRef}
                id="assistant-question"
                rows={2}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void sendMessage(); }
                }}
                placeholder="Ask about skills, experience or tools..."
                disabled={loading}
                maxLength={900}
              />
              <button type="submit" className="assistant-send" disabled={loading || !input.trim()} aria-label="Send message" title="Send message"><Send size={18} aria-hidden="true" /></button>
            </form>
            <div className="assistant-bottom-line">
              <p id="assistant-disclaimer">AI assistant based on my portfolio information.</p>
              <a href={siteConfig.emailHref} aria-label="Email Shreevikas directly" title="Email Shreevikas directly"><Mail size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
