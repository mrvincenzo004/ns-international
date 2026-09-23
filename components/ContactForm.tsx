"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    // Backend/email integration will be added later.
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="rounded-lg border border-border bg-background p-6 sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          Send an Inquiry
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
          Tell Us What You Need
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted">
          Fill out the form below and provide some details about the machinery
          or service you are interested in.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-secondary"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-foreground"
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Your phone number"
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-secondary"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-secondary"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="text-sm font-medium text-foreground"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What are you interested in?"
            className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-secondary"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell us about your machinery or project requirements..."
            className="mt-2 w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-secondary"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}