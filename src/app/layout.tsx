import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/context/I18nContext";

// Metadata dynamique selon la locale
const metadataByLocale = {
  fr: {
    title: "Layesall — Produits web, SaaS & Shopify | Développeur freelance",
    description: "Je conçois et développe des produits web modernes : SaaS, boutiques Shopify et applications sur mesure. Développeur freelance disponible en remote / Bruxelles.",
    keywords: [
      "développeur freelance",
      "création SaaS",
      "développement Shopify",
      "applications web sur mesure",
      "React Next.js",
      "Python Django",
      "backend API",
      "consultant Shopify",
      "freelance développement web",
      "site web professionnel"
    ],
    openGraph: {
      title: "Layesall — Produits web, SaaS & Shopify",
      description: "SaaS, Shopify et applications web modernes conçues pour être rapides, simples et évolutives.",
      locale: "fr_BE",
    },
    twitter: {
      title: "Layesall — Produits web, SaaS & Shopify",
      description: "Développement de SaaS, Shopify et applications web modernes. Freelance disponible.",
    },
  },
  en: {
    title: "Layesall — Web Products, SaaS & Shopify | Freelance Developer",
    description: "I design and build modern web products: SaaS, Shopify stores and custom applications. Freelance developer available remote / Brussels.",
    keywords: [
      "freelance developer",
      "SaaS development",
      "Shopify development",
      "custom web applications",
      "React Next.js",
      "Python Django",
      "backend API",
      "Shopify consultant",
      "web development freelance",
      "professional website"
    ],
    openGraph: {
      title: "Layesall — Web Products, SaaS & Shopify",
      description: "Modern SaaS, Shopify and web applications designed to be fast, simple and scalable.",
      locale: "en_US",
    },
    twitter: {
      title: "Layesall — Web Products, SaaS & Shopify",
      description: "SaaS, Shopify and modern web application development. Freelance available.",
    },
  },
};

// On exporte les metadata FR par défaut (Next.js les met à jour côté client)
export const metadata: Metadata = {
  title: metadataByLocale.fr.title,
  description: metadataByLocale.fr.description,
  keywords: metadataByLocale.fr.keywords,
  authors: [{ name: "Layesall" }],
  openGraph: {
    ...metadataByLocale.fr.openGraph,
    type: "website",
    siteName: "Layesall",
  },
  twitter: {
    ...metadataByLocale.fr.twitter,
    card: "summary_large_image",
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}