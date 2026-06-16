"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Mail, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

type RequestResumeButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
  children?: React.ReactNode;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function RequestResumeButton({
  variant = "secondary",
  className,
  children
}: RequestResumeButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitRequest(event: FormEvent) {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    setEmail(normalizedEmail);
    setError("");
    setSubmitted(true);
  }

  function closeModal() {
    setOpen(false);
    window.setTimeout(() => {
      setEmail("");
      setError("");
      setSubmitted(false);
    }, 180);
  }

  return (
    <>
      <Button variant={variant} className={className} onClick={() => setOpen(true)}>
        {children ?? (
          <>
            <FileText className="h-4 w-4" />
            Request Resume
          </>
        )}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="request-resume-title"
            onMouseDown={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="surface w-full max-w-lg rounded-t-2xl p-6 shadow-2xl sm:rounded-2xl sm:p-8"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow w-fit">Request Resume</p>
                  <h2 id="request-resume-title" className="mt-4 text-2xl font-black">
                    Contact me for my latest resume.
                  </h2>
                </div>
                <Button
                  variant="outline"
                  className="h-10 w-10 shrink-0 px-0"
                  onClick={closeModal}
                  aria-label="Close resume request"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Mail className="h-4 w-4" />
                    </div>
                    <p className="leading-7 text-muted-foreground">
                      Thank you for your interest. For my latest resume, please reach out to me
                      directly at{" "}
                      <a className="font-semibold text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={submitRequest} className="mt-6 grid gap-4">
                  <p className="leading-7 text-muted-foreground">
                    Enter your email ID to request my latest resume.
                  </p>
                  <label className="grid gap-2 text-sm font-semibold">
                    Email ID
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="recruiter@company.com"
                      className="focus-ring min-h-11 rounded-lg border border-border bg-background px-3 text-sm"
                      type="email"
                      autoComplete="email"
                    />
                  </label>
                  {error ? <p className="text-sm font-semibold text-red-500">{error}</p> : null}
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit">Submit Request</Button>
                    <Button variant="outline" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
