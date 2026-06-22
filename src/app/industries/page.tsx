import type { Metadata } from "next";
import { IndustriesHero } from "@/components/industries/industries-hero";
import { IndustryGrid } from "@/components/industries/industry-grid";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Digital Signage for Every Industry",
  description:
    "Screeno powers digital signage for hospitals, restaurants, retail stores, gyms, hotels, schools, and more. See how your industry benefits.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustryGrid />
      <CTASection
        title="Don't see your industry?"
        subtitle="Screeno works for any business with a screen. Talk to us."
        source="industries"
      />
    </>
  );
}
