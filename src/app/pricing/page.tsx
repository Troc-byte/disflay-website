import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { PricingCTA } from "@/components/pricing/pricing-cta";
import { productSchema, faqSchema } from "@/lib/structured-data";
import { pricingFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free for 60 days. Disflay digital signage is just ₹299/screen/month. No contracts, no hidden fees. Content Starter Pack available at ₹1999.",
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(pricingFaq)),
        }}
      />
      <PricingHero />
      <PricingCards />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
