import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";
import { selectedWork } from "@/data/selectedWork";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.portfolio,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    ...selectedWork.map(({ slug }) => ({
      url: `${siteConfig.portfolio}projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
