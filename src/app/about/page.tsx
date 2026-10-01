import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "About Disflay",
  description:
    "Building India's most affordable and easy-to-use digital signage solution. Our mission to digitise every Indian business.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
            About Disflay
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            The simplest way for Indian businesses to go digital with their
            in-store communication.
          </p>
        </Container>
      </section>

      <Section className="bg-muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Every business has a story to tell — to its customers, its
              visitors, its patients, its students. Most Indian businesses still
              rely on printed posters and whiteboards that are expensive to
              update and easy to ignore.
            </p>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              We believe every TV in a business should be a smart display —
              showing the right content at the right time. And it should be so
              simple that anyone who can use WhatsApp can manage it.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              What makes Disflay different
            </h2>
            <div className="mt-12 space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  Built for India
                </h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  Pricing in rupees, offline playback for unreliable internet,
                  and WhatsApp-based support that meets businesses where they
                  are.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  No technical barrier
                </h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  Upload content, schedule displays, and manage screens in
                  minutes — not hours. No IT team required.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  Honest pricing
                </h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  ₹299 per screen per month after a{" "}
                  <span className="font-semibold text-primary">60-day free trial</span>.
                  No hidden fees, no setup charges, no contracts.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Want to learn more?"
        subtitle="We'd love to show you how Disflay works."
        source="about"
      />
    </>
  );
}
