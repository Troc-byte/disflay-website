import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { pricingFaq } from "@/data/faq";

export function PricingFAQ() {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeading title="Frequently asked questions" />
        <div className="mx-auto max-w-2xl">
          <Accordion items={pricingFaq} />
        </div>
      </Container>
    </Section>
  );
}
