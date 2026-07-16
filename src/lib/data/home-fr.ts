import { HomeData } from "@/types";

export const homeDataFR: HomeData = {
  id: "home",
  badge: { text: "Freelance disponible • Remote / Bruxelles", variant: "success" },
  identity: { name: "Layesall." },
  title: { main: "Produit web. SaaS. Shopify.", highlight: "De l'idée au produit." },
  description: "Je vous accompagne dans la création de produits digitaux simples, rapides et utiles.",
  image: { src: "/images/meprofile.png", alt: "Layesall — Développeur produits web" },
  services: [
    { 
      id: "saas", 
      icon: "Code2", 
      title: "Applications & SaaS", 
      subtitle: "Web apps sur mesure", 
      description: "Applications web et SaaS conçues sur mesure, de l'architecture au déploiement.", 
      stack: ["Next.js", "Django", "PostgreSQL"],
      calSlug: "saas-project",
    },
    { 
      id: "web", 
      icon: "Globe", 
      title: "Sites Web & E-commerce", 
      subtitle: "Vitrines & Boutiques", 
      description: "Sites vitrines élégants et boutiques en ligne performantes. WordPress, Shopify ou sur mesure.", 
      stack: ["WordPress", "Shopify", "SEO"],
      calSlug: "web-project",
    },
    { 
      id: "consulting", 
      icon: "Compass", 
      title: "Conseil Technique", 
      subtitle: "Audit & architecture", 
      description: "Accompagnement technique pour structurer, optimiser et faire évoluer vos produits.", 
      stack: ["Audit", "Backend", "DevOps"],
      calSlug: "discovery-call",
    },
  ],
  stats: [
    { value: "Python / Django", label: "Backend & APIs" },
    { value: "React / Next.js", label: "Frontend & UI" },
    { value: "SQL & Data", label: "Bases de données" },
  ],
  actions: {
    primary: { text: "Réserver un appel", href: "https://cal.eu/layesall", variant: "primary" as const, icon: true },
    secondary: { text: "Voir les projets", href: "/projects", variant: "secondary" as const },
  },
  footer: {
    copyright: "© 2026 Layesall. Tous droits réservés.",
    socials: [
      { id: "github", label: "GitHub", href: "https://github.com/layesall" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/layesall" },
    ],
  },
};