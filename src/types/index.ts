export type Industry = {
  slug: string;
  name: string;
  description: string;
  heroHeadline: string;
  heroDescription: string;
  painPoints: { title: string; description: string }[];
  useCases: string[];
  benefits: { title: string; description: string }[];
  whatsappMessage: string;
  ctaText: string;
};

export type PricingPlan = {
  name: string;
  price: number;
  unit: string;
  trialDays?: number;
  features: string[];
  highlighted?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type NavLink = {
  label: string;
  href: string;
};
