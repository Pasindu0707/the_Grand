"use client";

import { useState } from "react";

type Brand = "espresso" | "resort";

const buttonStyles: Record<Brand, string> = {
  espresso: "bg-espresso-950 text-crema hover:bg-espresso-700",
  resort: "bg-lagoon-900 text-sand hover:bg-lagoon-700",
};

const fieldClass =
  "w-full rounded-sm border border-ink/20 bg-white/70 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/40 focus:border-ink/40 focus:outline-none aria-[invalid=true]:border-red-700";

export type WhatsAppTarget = {
  /** Digits only, country code first, no "+" - wa.me rejects anything else. */
  number: string;
  display: string;
  /** Shown at the top of the drafted message. */
  venueName: string;
};

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

/**
 * Enquiries can either be drafted into WhatsApp (when `whatsapp` is given) or
 * fall back to the standalone confirmation panel. There is no server here -
 * the site is a static export - so WhatsApp is the only channel that actually
 * delivers a message.
 */
export default function ContactForm({
  brand,
  withSubject = false,
  whatsapp,
}: {
  brand: Brand;
  withSubject?: boolean;
  whatsapp?: WhatsAppTarget;
}) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = "Enter your name.";
    // Over WhatsApp the reply goes to their number, so email is optional.
    if (!whatsapp && !email) next.email = "Enter your email address.";
    else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address, like name@example.com.";
    if (withSubject && !subject) next.subject = "Enter a subject.";
    if (!message) next.message = "Enter a message.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (whatsapp) {
      // Keep the blank lines - they are the spacing in the WhatsApp bubble,
      // so only the genuinely absent fields drop out.
      const lines: string[] = [`Hello ${whatsapp.venueName},`, ""];
      if (subject) lines.push(`*${subject}*`);
      lines.push(message, "", `- ${name}`);
      if (email) lines.push(email);

      const url = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
        lines.join("\n"),
      )}`;

      // New tab: WhatsApp Web / the desktop app takes over from here, and the
      // site stays open behind it.
      window.open(url, "_blank", "noopener,noreferrer");
      setSent(true);
      form.reset();
      return;
    }

    setSent(true);
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
            whatsapp
              ? "bg-[#25D366]"
              : brand === "espresso"
                ? "bg-espresso-700"
                : "bg-lagoon-700"
          }`}
        >
          {whatsapp ? (
            <WhatsAppIcon className="size-5" />
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="m3.5 9.5 3.5 3.5 7.5-8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>

        {whatsapp ? (
          <>
            <p className="font-display text-2xl">WhatsApp is open</p>
            <p className="text-[0.95rem] leading-relaxed text-ink/70">
              Your message is waiting in the chat with {whatsapp.display} -
              press send there and it reaches us straight away. If nothing
              opened, your browser may have blocked the pop-up.
            </p>
          </>
        ) : (
          <>
            <p className="font-display text-2xl">
              Your message was successfully sent!
            </p>
            <p className="text-[0.95rem] text-ink/70">
              Thank you for writing to us - we read every message.
            </p>
          </>
        )}

        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-[0.78rem] font-bold tracking-[0.18em] uppercase underline underline-offset-4"
        >
          Write another message
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
            {whatsapp ? "Email (optional)" : "Email"}
          </label>
          <input
            id={`${brand}-email`}
            name="email"
            type="email"
            placeholder={whatsapp ? "Email (optional)" : "Email"}
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
        className={`inline-flex items-center gap-3 justify-self-start rounded-sm px-8 py-3.5 text-[0.78rem] font-bold tracking-[0.2em] uppercase transition-colors ${
          whatsapp
            ? "bg-[#25D366] text-[#07301c] hover:bg-[#1eb455]"
            : buttonStyles[brand]
        }`}
      >
        {whatsapp ? (
          <>
            <WhatsAppIcon />
            Send on WhatsApp
          </>
        ) : withSubject ? (
          "Send"
        ) : (
          "Send message"
        )}
      </button>

      {whatsapp && (
        <p className="text-[0.8rem] leading-relaxed text-ink/50">
          Opens WhatsApp with your message ready - you press send there.
        </p>
      )}
    </form>
  );
}
