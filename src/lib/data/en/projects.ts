import { ProjectsPageData } from "@/types";

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
      title: "LAYESALL.COM",
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
      image: "/images/layesall.png",
    },
  ],

  ui: {
    backLabel: "Back",
    noImageText: "Preview coming soon",
  },
};