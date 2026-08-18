/** Design reminder — Desert Shield Calm: SEO should be useful, precise and locally specific, never stuffed or sensational. */
import { useEffect } from "react";
import { brand } from "@/data/siteData";

type SeoProps = {
  title: string;
  description: string;
  schema?: Record<string, unknown>;
};

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.text = JSON.stringify(data);
}

export function Seo({ title, description, schema }: SeoProps) {
  useEffect(() => {
    const canonical = window.location.href.split("#")[0];
    const image = new URL(brand.hero, window.location.origin).href;
    document.title = `${title} | درع الأثر`;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    upsertMeta('meta[property="og:title"]', "property", "og:title", `${title} | درع الأثر`);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", "ar_SA");
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[property="og:image"]', "property", "og:image", image);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", `${title} | درع الأثر`);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertLink("canonical", canonical);
    upsertJsonLd("dera-alathar-page-schema", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${title} | درع الأثر`,
      description,
      inLanguage: "ar-SA",
      url: canonical,
      isPartOf: { "@type": "WebSite", name: "درع الأثر", url: window.location.origin },
      about: schema ?? { "@type": "Service", name: "حلول وقاية ومكافحة آفات", areaServed: { "@type": "Country", name: "المملكة العربية السعودية" } },
    });
  }, [description, schema, title]);

  return null;
}
