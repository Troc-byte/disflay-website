import { CTASection } from "@/components/shared/cta-section";

export function PricingCTA() {
  return (
    <CTASection
      title="Ready to get started?"
      subtitle={
        <>
          <span className="font-semibold text-primary">60 days free</span>. No
          credit card required.
        </>
      }
      source="pricing"
    />
  );
}
