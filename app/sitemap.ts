import type { MetadataRoute } from "next";

const baseUrl = "https://ns-international-machinery.vercel.app";

const pages = [
  "",
  "/products",
  "/services",
  "/faq",
  "/gallery",
  "/contact",
];

const products = [
  "water-treatment-plant-ro",
  "water-bottle-filling-machine",
  "water-bottle-blowing-machine",
  "juice-plant",
  "cold-drink-plant",
  "wrapping-machine",
  "injection-moulding-machine",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const productPages = products.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}