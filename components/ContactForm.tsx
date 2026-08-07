"use client";

import { useState } from "react";

type Brand = "espresso" | "resort";

const buttonStyles: Record<Brand, string> = {
  espresso: "bg-espresso-950 text-crema hover:bg-espresso-700",
  resort: "bg-lagoon-900 text-sand hover:bg-lagoon-700",
};

const fieldClass =
  "w-full rounded-sm border border-ink/20 bg-white/70 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/40 focus:border-ink/40 focus:outline-none aria-[invalid=true]:border-red-700";

export default function ContactForm({
  brand,
  withSubject = false,
}: {
  brand: Brand;
  withSubject?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    if (!String(data.get("name")).trim()) next.name = "Enter your name.";
    const email = String(data.get("email")).trim();
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address, like name@example.com.";
    if (withSubject && !String(data.get("subject")).trim())
      next.subject = "Enter a subject.";
    if (!String(data.get("message")).trim()) next.message = "Enter a message.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex h-full min-h-72 flex-col items-start justify-center gap-4 rounded-sm border border-ink/15 bg-white/60 p-8"
      >
        <span
          aria-hidden
          className={`flex size-12 items-center justify-center rounded-full text-white ${
            brand === "espresso" ? "bg-espresso-700" : "bg-lagoon-700"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="m3.5 9.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="font-display text-2xl">
          Your message was successfully sent!
        </p>
        <p className="text-[0.95rem] text-ink/70">
          Thank you for writing to us — we read every message.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-[0.78rem] font-bold tracking-[0.18em] uppercase underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${brand}-name`} className="sr-only">
            Name
          </label>
          <input
            id={`${brand}-name`}
            name="name"
            type="text"
            placeholder="Name"
            aria-invalid={!!errors.name}
            className={fieldClass}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-800">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor={`${brand}-email`} className="sr-only">
            Email
          </label>
          <input
            id={`${brand}-email`}
            name="email"
            type="email"
            placeholder="Email"
            aria-invalid={!!errors.email}
            className={fieldClass}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-800">{errors.email}</p>
          )}
        </div>
      </div>

      {withSubject && (
        <div>
          <label htmlFor={`${brand}-subject`} className="sr-only">
            Subject
          </label>
          <input
            id={`${brand}-subject`}
            name="subject"
            type="text"
            placeholder="Subject"
            aria-invalid={!!errors.subject}
            className={fieldClass}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-800">{errors.subject}</p>
          )}
        </div>
      )}

      <div>
        <label htmlFor={`${brand}-message`} className="sr-only">
          Message
        </label>
        <textarea
          id={`${brand}-message`}
          name="message"
          rows={5}
          placeholder="Message"
          aria-invalid={!!errors.message}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-800">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={`justify-self-start rounded-sm px-8 py-3.5 text-[0.78rem] font-bold tracking-[0.2em] uppercase transition-colors ${buttonStyles[brand]}`}
      >
        {withSubject ? "Send" : "Send message"}
      </button>
    </form>
  );
}
