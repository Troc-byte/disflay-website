import { Container } from "@/components/ui/container";

export function PricingHero() {
  return (
    <section className="py-24 md:py-32">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-muted-foreground">
          Start with a{" "}
            <span className="font-semibold text-primary">60-day free trial</span>.
            No credit card, no contracts.
        </p>
      </Container>
    </section>
  );
}
