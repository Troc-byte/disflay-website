import { Container } from "@/components/ui/container";

export function IndustriesHero() {
  return (
    <section className="py-24 md:py-32">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
          Digital signage for{" "}
          <span className="text-primary">every industry</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-muted-foreground">
          See how Screeno helps businesses communicate better.
        </p>
      </Container>
    </section>
  );
}
