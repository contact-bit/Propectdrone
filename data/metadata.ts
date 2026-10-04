import type { Metadata } from "next";
import { siteConfig } from "./site-config";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: siteConfig.url
      ? { canonical: new URL(path, siteConfig.url).href }
      : undefined,
    openGraph: {
      title: `${title} | ProspectDrone`,
      description,
      locale: "fr_FR",
      type: "website",
      siteName: siteConfig.companyName,
      ...(siteConfig.url ? { url: new URL(path, siteConfig.url).href } : {}),
    },
    twitter: { card: "summary", title, description },
  };
}
