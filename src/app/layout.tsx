import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layesall — Produits web, SaaS & Shopify | Développeur freelance à Bruxelles",
  description:
    "Je conçois et développe des produits web modernes : SaaS, boutiques Shopify et applications sur mesure. Développeur freelance basé à Bruxelles, disponible pour missions web, backend et conseil technique.",

  keywords: [
    "développeur freelance Bruxelles",
    "création SaaS",
    "développement Shopify",
    "applications web sur mesure",
    "développeur React Next.js",
    "développeur Python Django",
    "backend API",
    "consultant Shopify",
    "freelance développement web",
    "création site web professionnel"
  ],

  authors: [{ name: "Layesall" }],

  openGraph: {
    title: "Layesall — Produits web, SaaS & Shopify",
    description:
      "SaaS, Shopify et applications web modernes conçues pour être rapides, simples et évolutives.",
    type: "website",
    locale: "fr_BE",
    siteName: "Layesall",
  },

  twitter: {
    card: "summary_large_image",
    title: "Layesall — Produits web, SaaS & Shopify",
    description:
      "Développement de SaaS, Shopify et applications web modernes. Freelance à Bruxelles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}