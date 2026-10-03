import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function PricingTeaser() {
  const whatsappUrl = buildWhatsAppUrl({
    source: "home",
    medium: "pricing-teaser",
  });

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Headline */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <span className="text-primary">Simple pricing.</span>{" "}
              More screens, more affordable.
            </h2>
          </div>

          {/* Pricing card */}
          <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-primary/10 bg-primary/[0.045] px-5 py-6 shadow-sm sm:px-7 sm:py-7 md:mt-8 md:px-10 md:py-8">
            <div className="mx-auto max-w-5xl text-center">
              {/* Yearly offer */}
              <div className="text-sm font-semibold text-primary">
                ✦ 60 days free on yearly plans
              </div>

              {/* Main price */}
              <div className="mt-5">
                <p className="text-sm font-medium text-muted-foreground">
                  Starts at
                </p>

                <div className="mt-0.5 flex items-baseline justify-center">
                  <span className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                    ₹249
                  </span>
                  <span className="ml-1.5 text-base text-muted-foreground sm:text-lg">
                    /month
                  </span>
                </div>

                <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                  per screen
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Less than ₹9/day per screen
                </p>
              </div>

              {/* Key pricing points */}
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-white px-4 py-4 text-left">
                  <p className="text-sm font-semibold text-foreground">
                    1st screen per store
                  </p>
                  <p className="mt-1 text-base text-muted-foreground">
                    ₹299/month
                  </p>
                </div>

                <div className="relative rounded-xl border border-border bg-white px-4 py-4 text-left">
                  <p className="text-sm font-semibold text-foreground">
                    Additional screens
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    At the same store
                  </p>
                  <p className="mt-1 text-base font-semibold text-primary">
                    ₹50/screen/month
                  </p>
                </div>

                <div className="relative rounded-xl border border-border bg-white px-4 py-4 text-left">
                  <span className="absolute right-3 top-3 rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    Optional
                  </span>

                  <p className="pr-16 text-sm font-semibold text-foreground">
                    Creative Pack
                  </p>
                  <p className="mt-1 text-base text-muted-foreground">
                    ₹1,999 one-time
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href="/pricing/calculate"
                  size="lg"
                  className="h-12 w-full px-8 text-sm sm:w-auto"
                >
                  Calculate Your Price
                  <span className="ml-2">→</span>
                </Button>

                <Button
                  href={whatsappUrl}
                  external
                  size="lg"
                  variant="outline"
                  className="h-12 w-full px-8 text-sm sm:w-auto"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
