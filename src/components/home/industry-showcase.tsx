import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/data/industries";

export function IndustryShowcase() {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeading
          title="Built for every kind of business"
          subtitle="See how Screeno works for your industry."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/industries/${industry.slug}.svg`}
                  alt={`Digital signage for ${industry.name}`}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">
                  {industry.name}
                </h3>
                <span className="mt-1 inline-block text-sm text-muted-foreground transition-colors group-hover:text-primary">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
