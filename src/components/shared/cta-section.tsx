import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type CTASectionProps = {
  title: string;
  subtitle?: React.ReactNode;
  source: string;
  whatsappMessage?: string;
};

export function CTASection({
  title,
  subtitle,
  source,
  whatsappMessage,
}: CTASectionProps) {
  const whatsappUrl = buildWhatsAppUrl({
    source,
    medium: "cta-section",
    message: whatsappMessage,
  });

  return (
    <section className="bg-foreground py-28 md:py-36">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-background sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-lg text-background/50 md:text-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={whatsappUrl} external size="lg" className="px-10 h-14 text-base">
            WhatsApp Us
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-background/20 text-background hover:bg-background/10 px-10 h-14 text-base"
          >
            Book a Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
