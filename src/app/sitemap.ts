import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const PAGES = ["", "/soirees", "/histoire", "/contact", "/mentions-legales", "/confidentialite", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/soirees" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/soirees" ? 0.9 : 0.5,
  }));
}
