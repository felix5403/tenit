import type { MetadataRoute } from "next";
import { solutions } from "@/data/solutions";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/solutions`, changeFrequency: "monthly", priority: 0.9 },
    ...solutions.map((s) => ({
      url: `${base}/solutions/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/service`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/voucher`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
