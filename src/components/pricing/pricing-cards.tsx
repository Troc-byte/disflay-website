import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/pricing";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function PricingCards() {
  const whatsappUrl = buildWhatsAppUrl({
    source: "pricing",
    medium: "pricing-card",
  });

  return (
    <Container>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 md:p-10 ${
              plan.highlighted
                ? "border-2 border-primary bg-white shadow-xl shadow-primary/5"
                : "border border-border bg-white"
            }`}
          >
            {plan.trialDays && (
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">
                {plan.trialDays} Days Free
              </span>
            )}
            <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
              {plan.name}
            </h3>
            <div className="mt-4">
              <span className="text-5xl font-semibold text-foreground">
                ₹{plan.price.toLocaleString("en-IN")}
              </span>
              <span className="ml-2 text-lg text-muted-foreground">
                {plan.unit}
              </span>
            </div>
            {plan.highlighted && (
              <p className="mt-1 text-base text-muted-foreground">
                ~₹10/day per screen
              </p>
            )}
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => {
                const isTrial = feature.toLowerCase().includes("free trial");
                return (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-base ${isTrial ? "font-semibold text-primary" : "text-muted-foreground"}`}
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
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
                    {feature}
                  </li>
                );
              })}
            </ul>
            <Button
              href={whatsappUrl}
              external
              size="lg"
              variant={plan.highlighted ? "primary" : "outline"}
              className="mt-10 w-full h-14 text-base"
            >
              WhatsApp Us
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
}
