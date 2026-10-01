import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact";

export const siteUrl = "https://www.hendricx-peinture.com";

export const serviceArea = [
  "Paule",
  "Carhaix-Plouguer",
  "Rostrenen",
  "Gourin",
  "Huelgoat",
  "Callac",
  "Mael-Carhaix",
  "Glomel",
  "Chateauneuf-du-Faou",
  "Poullaouen",
  "Cleden-Poher",
  "Motreff",
  "Treogan",
];

export const localPagePublicationDates: Record<string, string> = {
  "peintre-carhaix-plouguer": "2026-10-01",
  "peintre-rostrenen": "2026-10-08",
};

export const publishedLocalSlugs = ["peintre-carhaix-plouguer"];

export const scheduledLocalSlugs = [
  "peintre-rostrenen",
  "peintre-gourin",
  "peintre-huelgoat",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  noindex = false,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Hendricx Peinture",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/photos/661744embeddedImage.jpg",
          width: 1200,
          height: 630,
          alt: "Hendricx Peinture, artisan peintre en Centre Bretagne",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/photos/661744embeddedImage.jpg"],
    },
  };
}

export const baseLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "PaintingService"],
  "@id": `${siteUrl}/#hendricx-peinture`,
  name: "Hendricx Peinture",
  url: siteUrl,
  image: absoluteUrl("/photos/661744embeddedImage.jpg"),
  logo: absoluteUrl("/logo-hendricx.png"),
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE.schemaValue,
  vatID: "FR89839592094",
  taxID: "839592094",
  description:
    "Hendricx Peinture est un artisan peintre base a Paule, specialise en peinture interieure, peinture exterieure, renovation et fresques murales artistiques en Centre Bretagne.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Keroullaire",
    addressLocality: "Paule",
    postalCode: "22340",
    addressCountry: "FR",
  },
  areaServed: serviceArea.map((name) => ({ "@type": "City", name })),
  priceRange: "Devis sur mesure",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peinture interieure" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peinture exterieure" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation interieure" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fresque murale artistique" } },
  ],
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
