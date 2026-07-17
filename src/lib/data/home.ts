import { HomeData } from "@/types";

/**
 * Données de la page d'accueil - Version Française
 * 
 * Structure complète de la page d'accueil avec :
 * - Identité du freelance
 * - Services proposés (SaaS, Web, Consulting)
 * - Compétences techniques
 * - Actions principales (CTA)
 * - Pied de page avec liens sociaux et légaux
 */

export const homeDataFR: HomeData = {
  // Identifiant unique de la section
  id: "home",

  // Badge de statut affiché en haut de page
  // variant: "success" = disponible, "warning" = occupé, "info" = info
  badge: { 
    text: "Freelance disponible • Remote / Bruxelles", 
    variant: "success" 
  },

  // Identité - Nom affiché
  identity: { 
    name: "Layesall." 
  },

  // Titre principal avec mise en avant d'une partie
  // main: partie principale, highlight: partie mise en avant visuellement
  title: { 
    main: "Produit web. SaaS. Shopify.", 
    highlight: "De l'idée au produit, je suis là pour vous aider." 
  },

  // Photo de profil
  image: { 
    src: "/images/meprofile.png", 
    alt: "Layesall — Développeur produits web" 
  },

  // Liste des services proposés
  services: [
    { 
      id: "saas",
      icon: "Code2",
      title: "Applications & SaaS",
      subtitle: "Next.js / Django / PostgreSQL",
      description: "Création sur mesure d'applications web et SaaS, de l'architecture robuste au déploiement. Je construis des solutions qui grandissent avec votre activité.",
      calSlug: "saas-project",
    },
    { 
      id: "web",
      icon: "Globe",
      title: "Sites Web & E-commerce",
      subtitle: "WordPress / Shopify / SEO",
      description: "Sites vitrines élégants et boutiques en ligne performantes. WordPress, Shopify ou sur mesure : je crée des expériences qui transforment les visiteurs en clients.",
      calSlug: "web-project",
    },
    { 
      id: "consulting",
      icon: "Compass",
      title: "Conseil Technique",
      subtitle: "Audit / Backend / DevOps",
      description: "Accompagnement stratégique pour structurer, optimiser et faire évoluer vos produits digitaux. Je vous aide à prendre les bonnes décisions techniques à chaque étape.",
      calSlug: "consulting-project",
    },
  ],
  serviceCtaLabel: "Réserver un appel",

  // Compétences techniques affichées en bas de la section hero
  stats: [
    { icon: "Server", value: "Backend & Architecture", label: "Python, Django, Node.js" },
    { icon: "Code", value: "Frontend & Expérience", label: "React, Next.js, TypeScript, Tailwind" },
    { icon: "Cloud", value: "Infrastructure & Data", label: "PostgreSQL, SQLite, Docker, DevOps" },
  ],

  // Appels à l'action
  actions: {
    // Bouton primaire - réservation d'appel
    primary: { 
      text: "Appel découverte • 20 min", 
      href: "https://cal.eu/layesall/discovery-call", 
      variant: "primary" as const,  // Style principal
      icon: true                     // Affiche l'icône calendrier
    },
    // Bouton secondaire - voir les projets
    secondary: { 
      text: "Voir les projets", 
      href: "/projects", 
      variant: "secondary" as const 
    },
  },

  // Pied de page
  footer: {
    copyright: "© 2026 Layesall. Tous droits réservés.",
    socials: [
      { id: "github", label: "GitHub", href: "https://github.com/layesall" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/layesall" },
    ],
    legalLink: { label: "Mentions légales", href: "/legal" },
  },
};

/**
 * Home page data - English version
 * 
 * Complete structure for the home page with:
 * - Freelancer identity
 * - Offered services (SaaS, Web, Consulting)
 * - Technical skills
 * - Main actions (CTAs)
 * - Footer with social and legal links
 */

export const homeDataEN: HomeData = {
  // Unique section identifier
  id: "home",

  // Status badge displayed at the top
  // variant: "success" = available, "warning" = busy, "info" = info
  badge: { 
    text: "Freelance available • Remote / Brussels", 
    variant: "success" 
  },

  // Identity - Display name
  identity: { 
    name: "Layesall." 
  },

  // Main title with highlighted part
  // main: main part, highlight: visually emphasized part
  title: { 
    main: "Web products. SaaS. Shopify.", 
    highlight: "From idea to product, I'm here to help." 
  },

  // Profile picture
  image: { 
    src: "/images/meprofile.png", 
    alt: "Layesall — Web developer" 
  },

  // List of offered services
  services: [
    { 
      id: "saas",
      icon: "Code2",
      title: "Custom Apps & SaaS",
      subtitle: "Next.js / Django / PostgreSQL",
      description: "End-to-end development of tailor-made web apps and SaaS products. From robust architecture to seamless deployment, I build solutions that grow with your business.",
      calSlug: "saas-project",
    },
    { 
      id: "web",
      icon: "Globe",
      title: "Websites & E-commerce",
      subtitle: "WordPress / Shopify / SEO",
      description: "Elegant brand websites and high-performance online stores. Whether it's WordPress, Shopify, or a custom solution, I craft experiences that convert visitors into customers.",
      calSlug: "web-project",
    },
    { 
      id: "consulting",
      icon: "Compass",
      title: "Technical Consulting",
      subtitle: "Audit / Backend / DevOps",
      description: "Strategic guidance to structure, optimize, and scale your digital products. I help you make the right technical decisions at every stage of your product journey.",
      calSlug: "consulting-project",
    },
  ],
  serviceCtaLabel: "Book a call",

  // Technical skills displayed at the bottom of the hero section
  stats: [
    { icon: "Server", value: "Backend & Architecture", label: "Backend & APIs" },
    { icon: "Code", value: "Frontend & Experience", label: "React, Next.js, TypeScript, Tailwind" },
    { icon: "Cloud", value: "Infrastructure & Data", label: "PostgreSQL, SQLite, Docker, DevOps" },
  ],

  // Call to actions
  actions: {
    // Primary button - book a call
    primary: { 
      text: "Discovery call • 20min", 
      href: "https://cal.eu/layesall/discovery-call", 
      variant: "primary" as const,  // Primary style
      icon: true                     // Show calendar icon
    },
    // Secondary button - view projects
    secondary: { 
      text: "View projects", 
      href: "/projects", 
      variant: "secondary" as const 
    },
  },

  // Footer
  footer: {
    copyright: "© 2026 Layesall. All rights reserved.",
    socials: [
      { id: "github", label: "GitHub", href: "https://github.com/layesall" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/layesall" },
    ],
    legalLink: { label: "Legal notice", href: "/legal" },
  },
};