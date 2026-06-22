import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ValuePropsSection } from "@/components/home/value-props-section";
import { IndustryShowcase } from "@/components/home/industry-showcase";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { FinalCTASection } from "@/components/home/final-cta-section";
import { localBusinessSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <HeroSection />
      <HowItWorksSection />
      <ValuePropsSection />
      <IndustryShowcase />
      <PricingTeaser />
      <FinalCTASection />
    </>
  );
}
