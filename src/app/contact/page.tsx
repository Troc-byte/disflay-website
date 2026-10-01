import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { DemoRequestForm } from "@/components/contact/demo-request-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Disflay. Chat on WhatsApp, request a demo, or email us. We respond within 2 hours during business hours.",
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
              Let&apos;s talk
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Book a demo or reach out — we&apos;re happy to help.
            </p>
          </div>
          <div className="mt-20 grid gap-16 md:grid-cols-5">
            <div className="md:col-span-3">
              <DemoRequestForm />
            </div>
            <div className="md:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
