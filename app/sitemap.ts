import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {  
  return [
    // Homepage
    {
      url: "https://yogeshdhengale.vercel.app",
      lastModified: new Date("2025-10-12"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
