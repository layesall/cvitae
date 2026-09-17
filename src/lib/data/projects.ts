import { ProjectsPageData } from "@/types";

/**
 * Données de la page projets — Version Française
 */

export const projectsPageDataFR: ProjectsPageData = {
  header: {
    tag: "Portfolio",
    title: "Projets récents",
  },

  projects: [
    {
      id: "najohair",
      title: "NAJOHAIR",
      subtitle: "Boutique e-commerce soins capillaires",
      description:
        "Boutique en ligne dédiée aux soins capillaires. Design épuré, tunnel d'achat optimisé, gestion produits propre. L'objectif : transformer les visiteurs en clients dès la première visite.",
      year: 2026,
      category: "E-commerce",
      role: "Design, Développement, Mise en ligne",
      duration: "4 semaines",
      status: "Live",
      tags: ["Shopify", "Liquid", "E-commerce", "UX Design", "Optimisation"],
      link: "https://najohair.com",
      image: "/images/najohair.png",
      featured: true,
    },
    {
      id: "koogit",
      title: "KOOGIT",
      subtitle: "SaaS pour artisans du live commerce",
      description:
        "Plateforme SaaS pour artisans qui vendent en live sur TikTok et Facebook. Une page de vente dédiée où les clients réguliers retrouvent l'offre produits et commandent sans friction, même après la fin du live.",
      year: 2025,
      category: "SaaS",
      role: "Product, Design, Développement",
      duration: "En cours",
      status: "En développement",
      tags: ["Django", "Next.js", "SaaS", "Live Commerce", "Mobile Money"],
      image: "/images/koogit.png",
    },
    {
      id: "familiz",
      title: "FAMILIZ",
      subtitle: "App de gestion communautaire",
      description:
        "Application de gestion pour grandes familles et communautés. Suivi des membres, contributions financières, organisation d'événements. Un outil clair pour garder la trace de la vie du groupe.",
      year: 2026,
      category: "Application interne",
      role: "Architecture, Backend, Frontend",
      duration: "En cours",
      status: "En développement",
      tags: ["Go", "SQLite", "Gestion", "Suivi financier", "Événementiel"],
      image: "/images/familiz.png",
    },
    {
      id: "meetus",
      title: "MEETUS",
      subtitle: "Outil de prise de rendez-vous pour indépendants",
      description:
        "Outil de booking pensé pour les freelances. Créneaux, confirmations, rappels — sans dépendre d'un service tiers. Conçu pour remplacer les solutions SaaS coûteuses par un outil simple, maîtrisé et évolutif.",
      year: 2026,
      category: "SaaS",
      role: "Product, Design, Développement",
      duration: "En cours",
      status: "En développement",
      tags: ["Next.js", "PostgreSQL", "Booking", "SaaS"],
      image: "/images/meetus.png",
    },
    {
      id: "layesall",
      title: "LAYESALL",
      subtitle: "Site personnel conçu comme un produit",
      description:
        "Le site que vous êtes en train de lire. Design sombre, animations discrètes, i18n FR/EN, formulaire de contact. Zéro template — tout est fait main, de la structure au pixel.",
      year: 2026,
      category: "Site personnel",
      role: "Design, Développement",
      duration: "2 semaines",
      status: "Live",
      tags: ["Next.js", "Tailwind", "Framer Motion", "i18n"],
      link: "#",
      image: "/images/portfolio.png",
    },
  ],

  ui: {
    backLabel: "Retour",
    noImageText: "Aperçu à venir",
  },
};

/**
 * Projects page data — English version
 */

export const projectsPageDataEN: ProjectsPageData = {
  header: {
    tag: "Portfolio",
    title: "Recent projects",
  },

  projects: [
    {
      id: "najohair",
      title: "NAJOHAIR",
      subtitle: "Hair care e-commerce store",
      description:
        "Online store dedicated to hair care products. Clean design, optimized checkout, tidy product management. The goal: turn visitors into customers from the first visit.",
      year: 2026,
      category: "E-commerce",
      role: "Design, Development, Go-live",
      duration: "4 weeks",
      status: "Live",
      tags: ["Shopify", "Liquid", "E-commerce", "UX Design", "Conversion"],
      link: "https://najohair.com",
      image: "/images/najohair.png",
      featured: true,
    },
    {
      id: "koogit",
      title: "KOOGIT",
      subtitle: "SaaS for live commerce artisans",
      description:
        "SaaS platform for artisans selling live on TikTok and Facebook. A dedicated sales page where regular customers find the product lineup and order friction-free, even after the live ends.",
      year: 2025,
      category: "SaaS",
      role: "Product, Design, Development",
      duration: "In progress",
      status: "Building",
      tags: ["Django", "Next.js", "SaaS", "Live Commerce", "Mobile Money"],
      image: "/images/koogit.png",
    },
    {
      id: "familiz",
      title: "FAMILIZ",
      subtitle: "Community management app",
      description:
        "Management app for large families and communities. Member tracking, financial contributions, event organization. A clear tool to keep track of the group's life and activity.",
      year: 2026,
      category: "Internal app",
      role: "Architecture, Backend, Frontend",
      duration: "In progress",
      status: "Building",
      tags: ["Go", "SQLite", "Management", "Financial tracking", "Events"],
      image: "/images/familiz.png",
    },
    {
      id: "meetus",
      title: "MEETUS",
      subtitle: "Booking tool for freelancers",
      description:
        "A booking tool built for freelancers. Slots, confirmations, reminders — without depending on a third-party service. Built to replace expensive SaaS tools with something simple, controlled and scalable.",
      year: 2026,
      category: "SaaS",
      role: "Product, Design, Development",
      duration: "In progress",
      status: "Building",
      tags: ["Next.js", "PostgreSQL", "Booking", "SaaS"],
      image: "/images/meetus.png",
    },
    {
      id: "layesall",
      title: "LAYESALL",
      subtitle: "Personal site built like a product",
      description:
        "The site you're reading right now. Dark design, subtle animations, FR/EN i18n, contact form. Zero template — everything handmade, from structure to pixel.",
      year: 2026,
      category: "Personal site",
      role: "Design, Development",
      duration: "2 weeks",
      status: "Live",
      tags: ["Next.js", "Tailwind", "Framer Motion", "i18n"],
      link: "#",
      image: "/images/portfolio.png",
    },
  ],

  ui: {
    backLabel: "Back",
    noImageText: "Preview coming soon",
  },
};