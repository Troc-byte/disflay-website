import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/pricing`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/industries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/industries/${industry.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...industryPages];
}
