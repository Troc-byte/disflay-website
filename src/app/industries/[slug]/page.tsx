import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared/cta-section";
import { industries } from "@/data/industries";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: industry.heroHeadline,
    description: industry.heroDescription,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const whatsappUrl = buildWhatsAppUrl({
    source: `industry-${industry.slug}`,
    medium: "page-cta",
    message: industry.whatsappMessage,
  });

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
              {industry.heroHeadline}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {industry.heroDescription}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={whatsappUrl} external size="lg" className="px-10 h-14 text-base">
                WhatsApp Us
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="px-10 h-14 text-base">
                Book a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain Points */}
      <Section className="bg-muted">
        <Container>
          <SectionHeading
            title="The problem"
            subtitle={`Challenges ${industry.name.toLowerCase()} face with traditional signage.`}
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-10">
            {industry.painPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-white p-8 md:p-10">
                <h3 className="text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground md:text-lg">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section>
        <Container>
          <SectionHeading
            title="What you can display"
            subtitle={`Content ideas for ${industry.name.toLowerCase()}.`}
          />
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-5">
              {industry.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="flex items-start gap-4 text-lg text-muted-foreground"
                >
                  <svg
                    className="mt-1.5 h-5 w-5 shrink-0 text-primary"
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
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-muted">
        <Container>
          <SectionHeading title="Key benefits" />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-10">
            {industry.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl bg-white p-8 md:p-10">
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground md:text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title={industry.ctaText}
        subtitle={<>Start your <span className="font-semibold text-primary">60-day free trial</span> today.</>}
        source={`industry-${industry.slug}`}
        whatsappMessage={industry.whatsappMessage}
      />
    </>
  );
}
