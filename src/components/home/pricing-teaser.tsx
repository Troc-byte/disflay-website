import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function PricingTeaser() {
  const whatsappUrl = buildWhatsAppUrl({
    source: "home",
    medium: "pricing-teaser",
  });

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-primary">Start free.</span> Stay affordable.
          </h2>
          <div className="mt-12 rounded-3xl border border-border bg-primary-light p-10 md:p-14">
            <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">
              60 Days Free
            </span>
            <p className="mt-6 text-5xl font-semibold text-foreground md:text-6xl">
              ₹299
            </p>
            <p className="mt-2 text-xl text-muted-foreground">
              per screen / month
            </p>
            <p className="mt-1 text-base text-muted-foreground">
              ~₹10/day per screen
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={whatsappUrl} external size="lg" className="px-10 h-14 text-base">
                WhatsApp Us
              </Button>
              <Link
                href="/pricing"
                className="text-base font-medium text-primary hover:text-primary-dark"
              >
                See full pricing &rarr;
              </Link>
            </div>
          </div>
          <p className="mt-8 text-base text-muted-foreground">
            No credit card required. No contracts. Cancel anytime.
          </p>
        </div>
      </Container>
    </Section>
  );
}
