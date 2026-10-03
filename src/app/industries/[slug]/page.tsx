import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="pb-6 pt-8 md:pb-8 md:pt-10">
        <Container>
          <div className="relative h-[480px] overflow-hidden rounded-3xl md:h-[500px]">
            <Image
              src={`/images/industries/${industry.slug}.webp`}
              alt={`${industry.name} digital signage`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/45 to-black/30" />

            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
              <div className="max-w-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  {industry.heroHeadline}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                  {industry.heroDescription}
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    href={buildWhatsAppUrl({
                        source: "industry",
                        medium: industry.slug,
                      })}
                  >
                    WhatsApp Us
                  </Button>

                  <Button href="/contact" variant="outline" className="border-white bg-white text-black shadow-sm transition-colors hover:bg-white/85 hover:text-black">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain Points */}
      <Section className="bg-muted !pt-12 md:!pt-16">
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
