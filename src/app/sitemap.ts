import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // UPDATED: Your new Vercel domain
  const baseUrl = "https://ahmed-omran-portfolio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
