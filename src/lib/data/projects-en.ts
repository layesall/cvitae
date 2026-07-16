import { ProjectsPageData } from "@/types";

export const projectsPageDataEN: ProjectsPageData = {
  header: { tag: "Portfolio", title: "Recent projects" },
  projects: [
    { id: "najohair", title: "NAJOHAIR", description: "Shopify store for hair care products.", status: "active", year: 2026, tags: ["Shopify", "Liquid"], link: "https://najohair.com", image: "/images/najohair.png" },
    { id: "familiz", title: "FAMILIZ", description: "Complete family management app.", status: "active", year: 2026, tags: ["Go", "SQLite"], image: "/images/familiz.png" },
    { id: "dofa", title: "DOFA - Discover Of Africa", description: "Mobile app - Quiz about the African continent.", status: "active", year: 2021, tags: ["React-Native", "TypeScript"] },
    { id: "koogit", title: "KOOGIT", description: "SaaS platform for cosmetic artisans.", status: "development", year: 2025, tags: ["Django", "Next.js", "Mobile Money"] },
    { id: "events", title: "Zabani Event", description: "Event management with Stripe payments.", status: "development", year: 2025, tags: ["Python", "Django", "Stripe"] },
  ],
  ui: { backLabel: "Back", statusLabels: { active: "Live", development: "In progress" }, noImageText: "Preview coming soon" },
};