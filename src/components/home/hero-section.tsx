import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { HeroSlideshow } from "./hero-slideshow";

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl({
    source: "home",
    medium: "hero-cta",
  });

  return (
    <section className="overflow-hidden pb-16 pt-20 md:pb-24 md:pt-32 lg:pt-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-semibold leading-[1.08] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Turn Any TV Into A{" "}
            <span className="text-primary">Smart Display</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-xl text-muted-foreground md:text-2xl">
            Display menus, promotions, and announcements on any
            screen —{" "}
            <span className="font-semibold text-primary">free for 60 days</span>.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={whatsappUrl} external size="lg" className="text-base px-10 h-14">
              WhatsApp Us
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="text-base px-10 h-14">
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl md:mt-28">
          <HeroSlideshow />
          <div className="pointer-events-none absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>
      </Container>
    </section>
  );
}
