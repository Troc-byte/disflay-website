import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-20">
      <Container className="text-center">
        <h1 className="text-6xl font-semibold text-foreground">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This page doesn&apos;t exist.
        </p>
        <Button href="/" variant="outline" className="mt-8">
          Go home
        </Button>
      </Container>
    </section>
  );
}
