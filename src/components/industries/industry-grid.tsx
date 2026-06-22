import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { industries } from "@/data/industries";

export function IndustryGrid() {
  return (
    <Container>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <Image
                src={`/images/industries/${industry.slug}.svg`}
                alt={`Digital signage for ${industry.name}`}
                width={800}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                {industry.name}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                {industry.description}
              </p>
              <span className="mt-4 inline-block text-base font-medium text-primary transition-colors group-hover:text-primary-dark">
                Learn more &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
