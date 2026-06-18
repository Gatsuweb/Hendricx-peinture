import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { baseLocalBusinessSchema, siteUrl } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hendricx Peinture | Artisan peintre a Paule, Carhaix et Rostrenen",
    template: "%s | Hendricx Peinture",
  },
  description:
    "Hendricx Peinture, artisan peintre a Paule en Centre Bretagne : peinture interieure, exterieure, renovation et fresques murales autour de Carhaix, Rostrenen, Gourin et Huelgoat.",
  applicationName: "Hendricx Peinture",
  authors: [{ name: "Hendricx Peinture" }],
  creator: "Hendricx Peinture",
  publisher: "Hendricx Peinture",
  category: "Artisan peintre",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hendricx Peinture | Artisan peintre en Centre Bretagne",
    description:
      "Peinture interieure, exterieure, renovation et fresques murales a Paule, Carhaix-Plouguer, Rostrenen, Gourin et Huelgoat.",
    url: "/",
    siteName: "Hendricx Peinture",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/test-hero-hendricx.jpg",
        width: 1200,
        height: 630,
        alt: "Fresque murale et peinture artisanale Hendricx Peinture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hendricx Peinture | Artisan peintre en Centre Bretagne",
    description:
      "Peinture interieure, exterieure, renovation et fresques murales autour de Carhaix et Rostrenen.",
    images: ["/test-hero-hendricx.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-hendricx.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={baseLocalBusinessSchema} />
        {children}
      </body>
    </html>
  );
}
