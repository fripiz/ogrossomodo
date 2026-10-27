import type { MetadataRoute } from "next";
import { SHOW_DRAFT } from "@/lib/draft";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (SHOW_DRAFT) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
