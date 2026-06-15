import type { MetadataRoute } from "next";
import { publishedLocalSlugs, siteUrl } from "./seo";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/services/renovation", priority: 0.85 },
  { path: "/services/fresque", priority: 0.85 },
  { path: "/realisations", priority: 0.8 },
  { path: "/a-propos", priority: 0.7 },
  { path: "/contact", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const localRoutes = publishedLocalSlugs.map((slug) => ({
    path: `/${slug}`,
    priority: 0.95,
  }));

  return [...staticRoutes, ...localRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
