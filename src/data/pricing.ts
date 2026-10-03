import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Disflay Signage",
    price: 299,
    unit: "per screen/month",
    trialDays: 60,
    highlighted: true,
    features: [
      "60 days free trial",
      "Unlimited content uploads",
      "Schedule content in advance",
      "Remote screen management",
      "Works on any Screen or monitor",
      "Offline playback support",
      "WhatsApp-based support",
    ],
  },
  {
    name: "Content Starter Pack",
    price: 1999,
    unit: "one-time",
    features: [
      "Custom-designed content for your business",
      "Up to 10 slides/creatives",
      "Brand colours and logo integration",
      "Ready-to-display format",
      "One round of revisions included",
    ],
  },
];

export const comparisonData = {
  headers: ["Feature", "Traditional Signage", "Disflay"],
  rows: [
    ["Update content", "Reprint every time", "Instant, from your phone"],
    ["Cost per change", "₹500–₹2000 per print", "₹0 — included"],
    ["Time to update", "Days", "Seconds"],
    ["Multiple locations", "Manage each separately", "Update all at once"],
    ["Dynamic content", "Not possible", "Schedules, videos, live info"],
    ["Offline support", "N/A", "Content plays without internet"],
  ],
};
