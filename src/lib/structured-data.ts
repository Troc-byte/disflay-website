import { SITE_NAME, SITE_URL, EMAIL, WHATSAPP_NUMBER } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: "Digital signage solution for Indian businesses",
    url: SITE_URL,
    email: EMAIL,
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: "₹299-₹1999",
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/logo.svg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "sales",
      email: EMAIL,
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Screeno Digital Signage",
    description:
      "Turn any TV into a smart business display. 60 days free trial.",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
      logo: `${SITE_URL}/logo.svg`,
    },
    offers: [
      {
        "@type": "Offer",
        name: "Screeno Signage",
        price: "299",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        description: "60 days free trial, then ₹299/screen/month",
      },
      {
        "@type": "Offer",
        name: "Content Starter Pack",
        price: "1999",
        priceCurrency: "INR",
        description: "One-time content design package",
      },
    ],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
