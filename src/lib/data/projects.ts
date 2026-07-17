import { ProjectsPageData } from "@/types";

/**
 * Données de la page projets - Version Française
 * 
 * Structure de la galerie de projets avec :
 * - En-tête de page (tag + titre)
 * - Liste des projets avec leurs métadonnées
 * - Chaînes UI pour l'interface (labels, statuts, placeholders)
 */

export const projectsPageDataFR: ProjectsPageData = {
  // En-tête de la page
  header: { 
    tag: "Portfolio",           // Label au-dessus du titre
    title: "Projets récents"    // Titre principal
  },

  // Liste des projets
  projects: [
    { 
      id: "najohair",
      title: "NAJOHAIR",
      description: "Boutique e-commerce dédiée aux soins capillaires, avec une expérience d'achat fluide et un design élégant pensé pour la conversion.",
      year: 2026,
      tags: ["Shopify", "Liquid", "E-commerce", "UX Design", "Optimisation"],
      link: "https://najohair.com",
      image: "/images/najohair.png"
    },
    { 
      id: "familiz",
      title: "FAMILIZ",
      description: "Application de gestion pour grandes familles et communautés. Suivi des membres (inscriptions), gestion des contributions financières (entrées d'argent) et organisation des événements (mariages, baptêmes, sorties). Un outil pour garder une trace claire de la vie organisative du village familial.",
      year: 2026,
      tags: ["Go", "SQLite", "Gestion communautaire", "Suivi financier", "Événementiel"],
      image: "/images/familiz.png"
    },
    { 
      id: "koogit",
      title: "KOOGIT",
      description: "Plateforme SaaS pour artisans qui vendent en live sur TikTok, Facebook et autres réseaux. Koogit loue une page de vente dédiée où les artisans listent leurs produits, permettant à leurs clients habituels de visualiser et commander facilement, sans perdre de ventes en direct ni perdre de vue l'offre produits.",
      year: 2025,
      tags: ["Django", "Next.js", "SaaS", "Live Commerce", "Mobile Money", "Artisanat"],
      image: "/images/koogit.png"
    },
  ],

  // Chaînes UI pour l'affichage
  ui: { 
    backLabel: "Retour",
    noImageText: "Aperçu à venir"
  },
};

/**
 * Projects page data - English version
 * 
 * Structure for the project gallery with:
 * - Page header (tag + title)
 * - List of projects with their metadata
 * - UI strings for the interface (labels, statuses, placeholders)
 */

export const projectsPageDataEN: ProjectsPageData = {
  // Page header
  header: { 
    tag: "Portfolio",           // Label above title
    title: "Recent projects"    // Main title
  },

  // Projects list
  projects: [
    { 
      id: "najohair",
      title: "NAJOHAIR",
      description: "E-commerce store for hair care products, featuring a seamless shopping experience and elegant design optimized for conversions.",
      year: 2026,
      tags: ["Shopify", "Liquid", "E-commerce", "UX Design", "Conversion"],
      link: "https://najohair.com",
      image: "/images/najohair.png"
    },
    { 
      id: "familiz",
      title: "FAMILIZ",
      description: "Management app for large families and communities. Track members (registrations), manage financial contributions (income), and organize events (weddings, baptisms, expenses). A tool to maintain clear records of community life and organization.",
      year: 2026,
      tags: ["Go", "SQLite", "Community Management", "Financial Tracking", "Event Planning"],
      image: "/images/familiz.png"
    },
    { 
      id: "koogit",
      title: "KOOGIT",
      description: "SaaS platform for artisans selling live on TikTok, Facebook, and other social networks. Koogit provides a dedicated sales page where artisans list their products, allowing regular customers to browse and order easily – without losing live sales or losing sight of product availability.",
      year: 2025,
      tags: ["Django", "Next.js", "SaaS", "Live Commerce", "Mobile Money", "Artisan"],
      image: "/images/koogit.png"
    },
  ],

  // UI strings for display
  ui: { 
    backLabel: "Back",
    noImageText: "Preview coming soon"
  },
};