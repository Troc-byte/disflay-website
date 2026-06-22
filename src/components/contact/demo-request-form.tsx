"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const industryOptions = [
  ...industries.map((i) => ({ value: i.slug, label: i.name })),
  { value: "other", label: "Other" },
];

const screenOptions = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2–5" },
  { value: "6-10", label: "6–10" },
  { value: "10+", label: "10+" },
];

export function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = buildWhatsAppUrl({
    source: "contact",
    medium: "post-form-cta",
  });

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Thank you!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll reach out within 2 hours during business hours.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Want a faster response?
        </p>
        <Button
          href={whatsappUrl}
          external
          size="md"
          className="mt-3"
        >
          WhatsApp Us
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-border bg-white p-8"
    >
      <h2 className="text-xl font-semibold text-foreground">Book a demo</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill in your details and we&apos;ll get in touch.
      </p>
      <div className="mt-6 space-y-5">
        <Input
          label="Full Name"
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
        />
        <Input
          label="Business Name"
          id="business"
          name="business"
          type="text"
          required
          placeholder="Your business name"
        />
        <Input
          label="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          pattern="[+]?[0-9\s]{10,15}"
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
        <Select
          label="Industry"
          id="industry"
          name="industry"
          required
          options={industryOptions}
        />
        <Select
          label="Number of Screens"
          id="screens"
          name="screens"
          options={screenOptions}
        />
        <Textarea
          label="Message"
          id="message"
          name="message"
          placeholder="Tell us about your needs (optional)"
        />
        <Button type="submit" size="lg" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}
