"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Plan = "monthly" | "half-yearly" | "yearly";

const plans = {
  monthly: {
    label: "Monthly",
    price: 299,
    billed: "Billed monthly",
    saving: null,
  },
  "half-yearly": {
    label: "Half-Yearly",
    price: 249.17,
    billed: "Pay for 5 months, get 6 months",
    saving: "1 month FREE",
  },
  yearly: {
    label: "Yearly",
    price: 249.17,
    billed: "Pay for 10 months, get 12 months",
    saving: "2 months FREE",
  },
} as const;

export function PricingCards() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("yearly");
  const plan = plans[selectedPlan];

  const whatsappUrl = buildWhatsAppUrl({
    source: "pricing",
    medium: "pricing-card",
  });

  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Plan switcher */}
          <div className="rounded-2xl border border-border bg-white p-1.5 shadow-sm">
            <div className="grid grid-cols-3 gap-1">
              {(Object.keys(plans) as Plan[]).map((key) => {
                const item = plans[key];
                const active = selectedPlan === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedPlan(key)}
                    className={`relative rounded-xl px-3 py-3 text-center transition-all md:px-5 ${
                      active
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {key === "yearly" && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold ${
                          active
                            ? "bg-foreground text-white"
                            : "bg-primary text-white"
                        }`}
                      >
                        Recommended
                      </span>
                    )}

                    <span className="block text-sm font-semibold md:text-base">
                      {item.label}
                    </span>

                    {item.saving && (
                      <span
                        className={`mt-0.5 block text-[11px] md:text-xs ${
                          active ? "text-white/80" : "text-primary"
                        }`}
                      >
                        {item.saving}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main pricing card */}
          <div className="mt-6 overflow-hidden rounded-3xl border-2 border-primary bg-white shadow-xl shadow-primary/10">
            <div className="p-7 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Digital Signage
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                    {plan.label} Plan
                  </h2>

                  <p className="mt-2 text-muted-foreground">
                    1 store + 1 Screen included in the base price
                  </p>
                </div>

                <div className="md:text-right">
                  {selectedPlan !== "monthly" && (
                    <div className="text-sm text-muted-foreground line-through">
                      ₹299 / Screen / month
                    </div>
                  )}

                  <div className="mt-1 flex items-baseline md:justify-end">
                    <span className="text-5xl font-semibold tracking-tight text-foreground">
                      ₹
                      {selectedPlan === "monthly"
                        ? "299"
                        : Math.round(plan.price).toLocaleString("en-IN")}
                    </span>

                    <span className="ml-2 text-base text-muted-foreground">
                      / Screen / month
                    </span>
                  </div>

                  {selectedPlan !== "monthly" && (
                    <p className="mt-1 text-sm font-medium text-primary">
                      Effective monthly price
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-muted p-5">
                  <p className="font-semibold text-foreground">
                    First Screen at each store
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">
                    ₹299
                    <span className="text-sm font-normal text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl bg-muted p-5">
                  <p className="font-semibold text-foreground">
                    Additional Screens
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">
                    ₹50
                    <span className="text-sm font-normal text-muted-foreground">
                      {" "}
                      / Screen / month
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-foreground">
                      {plan.billed}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Longer plans give you more months of service without
                      increasing the monthly screen rate.
                    </p>
                  </div>

                  {plan.saving && (
                    <span className="mt-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary sm:mt-0">
                      {plan.saving}
                    </span>
                  )}
                </div>
              </div>

              {/* Creative pack */}
              <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    Creative Pack
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Custom-designed content · Raw files included for reuse
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="text-lg font-semibold text-foreground">
                    ₹1,999
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    one-time
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="/pricing/calculate"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-white transition hover:opacity-90"
                >
                  Calculate Your Price
                  <span className="ml-2">→</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-primary px-6 text-base font-semibold text-foreground transition hover:bg-primary/5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
