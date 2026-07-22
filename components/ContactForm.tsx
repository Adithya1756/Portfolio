"use client";

import { useState } from "react";
import { FiCheckCircle, FiAlertCircle, FiSend } from "react-icons/fi";
import { isValidEmail } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

type Status = "idle" | "submitting" | "success" | "error";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      next.name = "Enter your full name.";
    }
    if (!values.email.trim() || !isValidEmail(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFeedback("Message sent — I'll get back to you soon.");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            placeholder="jane@company.com"
            className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            placeholder="Tell me a bit about the role or project..."
            className="mt-2 w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <MagneticButton
          as="button"
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          <FiSend />
        </MagneticButton>
      </form>

      {feedback && (
        <div
          role="status"
          className={`mt-5 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-sage/30 bg-sage-soft text-sage"
              : "border-red-200 bg-red-50 text-red-600"
          }`}
        >
          {status === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
          {feedback}
        </div>
      )}
    </div>
  );
}
