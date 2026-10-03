import { Container } from "@/components/ui/container";

export function PricingHero() {
  return (
    <section className="pb-10 pt-20 md:pb-14 md:pt-24">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Simple Pricing for Every Business
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
          One simple price per Screen. Add more screens at the same store for just
          ₹50/month each. Choose the plan that works for you.
        </p>

        <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span>₹299 for the 1st Screen per store</span>
          <span>₹50 for additional Screens</span>
          <span>1–2 months FREE on longer plans</span>
        </div>
      </Container>
    </section>
  );
}
