"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Plan = "monthly" | "half-yearly" | "yearly";

type Store = {
  id: number;
  tvs: number;
};

const MONTHLY_FIRST_Screen = 299;
const MONTHLY_ADDITIONAL_Screen = 50;
const CREATIVE_PACK = 1999;

const plans = {
  monthly: {
    label: "Monthly",
    paidMonths: 1,
    serviceMonths: 1,
  },
  "half-yearly": {
    label: "Half-Yearly",
    paidMonths: 5,
    serviceMonths: 6,
  },
  yearly: {
    label: "Yearly",
    paidMonths: 10,
    serviceMonths: 12,
  },
} as const;

function storeMonthlyPrice(tvs: number) {
  if (tvs <= 0) return 0;
  return MONTHLY_FIRST_Screen + Math.max(0, tvs - 1) * MONTHLY_ADDITIONAL_Screen;
}

export default function CalculatePricePage() {
  const [stores, setStores] = useState<Store[]>([
    { id: 1, tvs: 1 },
  ]);
  const [plan, setPlan] = useState<Plan>("yearly");
  const [creativePack, setCreativePack] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sendingQuote, setSendingQuote] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const [quoteError, setQuoteError] = useState("");
  const [summaryVisible, setSummaryVisible] = useState(false);
  const summaryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const summary = summaryRef.current;

    if (!summary) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSummaryVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      },
    );

    observer.observe(summary);

    return () => observer.disconnect();
  }, []);

  const totalTvs = useMemo(
    () => stores.reduce((total, store) => total + store.tvs, 0),
    [stores],
  );

  const monthlyPrice = useMemo(
    () =>
      stores.reduce((total, store) => total + storeMonthlyPrice(store.tvs), 0),
    [stores],
  );

  const selectedPlan = plans[plan];

  const planPrice = monthlyPrice * selectedPlan.paidMonths;
  const serviceValue = monthlyPrice * selectedPlan.serviceMonths;
  const creativePrice = creativePack ? CREATIVE_PACK : 0;
  const estimatedTotal = planPrice + creativePrice;

  const averagePerTv =
    totalTvs > 0
      ? planPrice / selectedPlan.serviceMonths / totalTvs
      : 0;

  const savings =
    selectedPlan.serviceMonths > selectedPlan.paidMonths
      ? monthlyPrice *
        (selectedPlan.serviceMonths - selectedPlan.paidMonths)
      : 0;

  function addStore() {
    if (stores.length >= 10) return;

    setStores((current) => [
      ...current,
      {
        id: Math.max(...current.map((store) => store.id)) + 1,
        tvs: 1,
      },
    ]);
  }

  function removeStore(id: number) {
    if (stores.length === 1) return;

    setStores((current) => current.filter((store) => store.id !== id));
  }

  function updateTvs(id: number, tvs: number) {
    setStores((current) =>
      current.map((store) =>
        store.id === id
          ? { ...store, tvs: Math.max(1, Math.min(100, tvs)) }
          : store,
      ),
    );
  }

  function getWhatsAppUrl() {
    const storeDetails = stores
      .map(
        (store, index) =>
          `Store ${index + 1}: ${store.tvs} ${
            store.tvs === 1 ? "Screen" : "Screens"
          }`,
      )
      .join("\n");

    const customerDetails = [
      name.trim() ? `Name: ${name.trim()}` : "",
      phone.trim() ? `Phone: ${phone.trim()}` : "",
      email.trim() ? `Email: ${email.trim()}` : "",
    ].filter(Boolean);

    const message = [
      "Hi Disflay, I would like to get a quote.",
      "",
      ...(customerDetails.length > 0
        ? ["Customer Details", ...customerDetails, ""]
        : []),
      "Store & Screen Details",
      `Number of Stores: ${stores.length}`,
      storeDetails,
      `Total Screens: ${totalTvs}`,
      "",
      "Quote Summary",
      `Plan: ${selectedPlan.label}`,
      `Service Period: ${selectedPlan.serviceMonths} months`,
      `Subscription Payment: ₹${planPrice.toLocaleString("en-IN")}`,
      `Average Cost / Screen / Month: ₹${Math.round(
        averagePerTv,
      ).toLocaleString("en-IN")}`,
      savings > 0
        ? `Savings: ₹${savings.toLocaleString("en-IN")}`
        : "Savings: None",
      `Creative Pack: ${
        creativePack
          ? `Yes - ₹${CREATIVE_PACK.toLocaleString("en-IN")}`
          : "No"
      }`,
      `Estimated Total: ₹${estimatedTotal.toLocaleString("en-IN")}`,
      "",
      "Disflay Phone: +91 9660021636",
    ].join("\n");

    return `https://wa.me/919660021636?text=${encodeURIComponent(message)}`;
  }

  async function handleGetQuote() {
    setQuoteError("");
    setQuoteSent(false);

    if (!name.trim()) {
      setQuoteError("Please enter your name.");
      return;
    }

    if (!phone.trim()) {
      setQuoteError("Please enter your phone number.");
      return;
    }

    setSendingQuote(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          stores: stores.map((store) => ({
            id: store.id,
            screens: store.tvs,
          })),
          plan,
          planPrice,
          serviceMonths: selectedPlan.serviceMonths,
          totalScreens: totalTvs,
          averagePerScreen: averagePerTv,
          savings,
          creativePack,
          creativePrice: CREATIVE_PACK,
          total: estimatedTotal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your quote.");
      }

      setQuoteSent(true);
    } catch (error) {
      setQuoteError(
        error instanceof Error
          ? error.message
          : "Unable to send your quote. Please try again.",
      );
    } finally {
      setSendingQuote(false);
    }
  }

  return (
    <main className="bg-muted/30">
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Pricing calculator
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Calculate your price
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Tell us how many stores and Screens you have. We&apos;ll calculate
              your estimated Disflay subscription instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          {/* Left */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  1
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Add your stores
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Each store can have a different number of Screens.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {stores.map((store, index) => (
                  <div
                    key={store.id}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-border p-4"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground">
                        Store {index + 1}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        ₹299 for the first Screen + ₹50 for each additional Screen
                      </p>
                    </div>

                    <div className="shrink-0 flex items-end gap-3">
                      <div>
                        <p className="mb-2 text-sm font-medium text-muted-foreground">
                          No. of Screens
                        </p>

                        <div className="flex items-center rounded-xl border border-border">
                          <button
                            type="button"
                            onClick={() => updateTvs(store.id, store.tvs - 1)}
                            disabled={store.tvs <= 1}
                            className="flex h-11 w-11 items-center justify-center text-lg text-muted-foreground transition hover:text-foreground disabled:opacity-30"
                            aria-label={`Remove Screen from Store ${index + 1}`}
                          >
                            −
                          </button>

                          <input
                            id={`store-${store.id}`}
                            type="number"
                            min={1}
                            value={store.tvs}
                            onChange={(event) =>
                              updateTvs(
                                store.id,
                                Number(event.target.value) || 1,
                              )
                            }
                            className="h-11 w-14 border-x border-border bg-transparent text-center font-semibold outline-none"
                          />

                          <button
                            type="button"
                            onClick={() => updateTvs(store.id, store.tvs + 1)}
                            className="flex h-11 w-11 items-center justify-center text-lg text-muted-foreground transition hover:text-foreground"
                            aria-label={`Add Screen to Store ${index + 1}`}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {stores.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStore(store.id)}
                          className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition hover:bg-red-50 hover:text-red-600"
                          aria-label={`Remove Store ${index + 1}`}
                          title={`Remove Store ${index + 1}`}
                        >
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v5" />
                            <path d="M14 11v5" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {stores.length < 10 ? (
                <button
                  type="button"
                  onClick={addStore}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
                >
                  <span className="text-lg leading-none">+</span>
                  Add another store
                </button>
              ) : (
                <div className="mt-5 rounded-2xl bg-primary/5 p-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    10 stores selected.
                  </span>{" "}
                  For 11+ stores, talk to our team for a customised plan.
                </div>
              )}
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  2
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Choose your plan
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Save more when you choose a longer commitment.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {(Object.keys(plans) as Plan[]).map((key) => {
                  const item = plans[key];
                  const active = plan === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPlan(key)}
                      className={`relative rounded-2xl border p-5 text-left transition ${
                        active
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      {key === "yearly" && (
                        <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">
                          Recommended
                        </span>
                      )}

                      <p className="font-semibold text-foreground">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm text-muted-foreground">
                        {key === "monthly"
                          ? "Pay month to month"
                          : key === "half-yearly"
                            ? "Pay 5 months · Get 6"
                            : "Pay 10 months · Get 12"}
                      </p>

                      {key !== "monthly" && (
                        <p className="mt-3 font-semibold text-primary">
                          {key === "half-yearly"
                            ? "1 month FREE"
                            : "2 months FREE"}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  3
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Add creative support
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Optional — add professional content for your screens.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCreativePack((current) => !current)}
                aria-pressed={creativePack}
                className={`mt-7 flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${
                  creativePack
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${
                    creativePack
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white"
                  }`}
                  aria-hidden="true"
                >
                  {creativePack && (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  )}
                </span>

                <div>
                  <p className="font-semibold text-foreground">
                    Creative Pack
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    ₹1,999 one-time · Raw files included
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    First 6 months: 10 images OR 2 videos OR 5 images + 1
                    video each month.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Right summary */}
          <aside ref={summaryRef} className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
              <div className="bg-foreground p-6 text-background md:p-7">
                <p className="text-sm font-medium text-background/60">
                  Estimated total
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold">
                    ₹{estimatedTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="mt-1 text-sm text-background/60">
                  {selectedPlan.serviceMonths} months of service
                  {creativePack ? " + Creative Pack" : ""}
                </p>
              </div>

              <div className="p-6 md:p-7">
                <div className="space-y-4">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">Stores</span>
                    <span className="font-semibold text-foreground">
                      {stores.length}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">Total Screens</span>
                    <span className="font-semibold text-foreground">
                      {totalTvs}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-semibold text-foreground">
                      {selectedPlan.label}
                    </span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between gap-4">
                      <span className="text-sm text-muted-foreground">
                        Average / Screen / month
                      </span>
                      <span className="font-semibold text-primary">
                        ₹{Math.round(averagePerTv).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Subscription
                    </span>
                    <span className="font-semibold text-foreground">
                      ₹{planPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-muted-foreground">You save</span>
                      <span className="font-semibold text-primary">
                        ₹{savings.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}

                  {creativePack && (
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-muted-foreground">
                        Creative Pack
                      </span>
                      <span className="font-semibold text-foreground">
                        ₹{CREATIVE_PACK.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-7 border-t border-border pt-6">
                  <h3 className="text-base font-semibold text-foreground">
                    Get your quote
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    Enter your details and we&apos;ll send the quote to you.
                    We&apos;ll also receive a copy at Disflay.
                  </p>

                  <div className="mt-5 space-y-3">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Phone number <span className="text-primary">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="+91 98765 43210"
                        className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-email"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Email{" "}
                        <span className="font-normal text-muted-foreground">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {quoteError && (
                    <div
                      role="alert"
                      className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      {quoteError}
                    </div>
                  )}

                  {quoteSent && (
                    <div
                      role="status"
                      className="mt-4 rounded-xl bg-primary/10 px-4 py-3 text-sm text-primary"
                    >
                      Your quote has been sent successfully.
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleGetQuote}
                    disabled={sendingQuote}
                    className="mt-4 flex h-13 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sendingQuote ? "Sending Quote..." : "Get Quote"}
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex h-13 w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-primary/5"
                  >
                    WhatsApp Us
                  </a>

                  <a
                    href="/contact"
                    className="flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold text-muted-foreground transition hover:text-foreground"
                  >
                    Talk to Experts →
                  </a>
                </div>

                <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
                  This is an estimate. For 11+ stores, contact us for a
                  customised plan.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {!summaryVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 py-3 pr-24 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Estimated total
              </p>
              <p className="mt-0.5 text-xl font-semibold text-foreground">
                ₹{estimatedTotal.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-foreground">
                {selectedPlan.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {selectedPlan.serviceMonths} months
                {creativePack ? " · Creative Pack" : ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
