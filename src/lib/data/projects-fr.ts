import { ProjectsPageData } from "@/types";

export const projectsPageDataFR: ProjectsPageData = {
  header: { tag: "Portfolio", title: "Projets récents" },
  projects: [
    { id: "najohair", title: "NAJOHAIR", description: "Boutique Shopify univers capillaire.", status: "active", year: 2026, tags: ["Shopify", "Liquid"], link: "https://najohair.com", image: "/images/najohair.png" },
    { id: "familiz", title: "FAMILIZ", description: "Gestion familiale complète.", status: "active", year: 2026, tags: ["Go", "SQLite"], image: "/images/familiz.png" },
    { id: "dofa", title: "DOFA - Discover Of Africa", description: "Application mobile - Quiz sur le continent Africain.", status: "active", year: 2021, tags: ["React-Native", "TypeScript"] },
    { id: "koogit", title: "KOOGIT", description: "Plateforme SaaS pour artisans cosmétiques.", status: "development", year: 2025, tags: ["Django", "Next.js", "Mobile Money"] },
    { id: "events", title: "Zabani Event", description: "Gestion d'événements avec Stripe.", status: "development", year: 2025, tags: ["Python", "Django", "Stripe"] },
  ],
  ui: { backLabel: "Retour", statusLabels: { active: "En ligne", development: "En cours" }, noImageText: "Aperçu à venir" },
};