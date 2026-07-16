import { HomeData } from "@/types";

export const homeDataEN: HomeData = {
  id: "home",
  badge: { text: "Freelance available • Remote / Brussels", variant: "success" },
  identity: { name: "Layesall." },
  title: { main: "Web products. SaaS. Shopify.", highlight: "From idea to product." },
  description: "I help you create simple, fast, and useful digital products.",
  image: { src: "/images/meprofile.png", alt: "Layesall — Web developer" },
  services: [
    { 
      id: "saas", 
      icon: "Code2", 
      title: "Apps & SaaS", 
      subtitle: "Custom web apps", 
      description: "Custom web applications and SaaS, from architecture to deployment.", 
      calSlug: "saas-project", 
      stack: ["Next.js", "Django", "PostgreSQL"] 
    },
    { 
      id: "web", 
      icon: "Globe", 
      title: "Websites & E-commerce", 
      subtitle: "Showcases & Online Stores", 
      description: "Elegant websites and high-performing online stores. WordPress, Shopify or custom.", 
      calSlug: "web-project", 
      stack: ["WordPress", "Shopify", "SEO"] 
    },
    { 
      id: "consulting", 
      icon: "Compass", 
      title: "Tech Consulting", 
      subtitle: "Audit & architecture", 
      description: "Technical guidance to structure, optimize, and scale your products.", 
      calSlug: "consulting-project", 
      stack: ["Audit", "Backend", "DevOps"] 
    },
  ],
  stats: [
    { value: "Python / Django", label: "Backend & APIs" },
    { value: "React / Next.js", label: "Frontend & UI" },
    { value: "SQL & Data", label: "Databases" },
  ],
  actions: {
    primary: { text: "Book a call", href: "https://cal.eu/layesall", variant: "primary" as const, icon: true },
    secondary: { text: "View projects", href: "/projects", variant: "secondary" as const },
  },
  footer: {
    copyright: "© 2026 Layesall. All rights reserved.",
    socials: [
      { id: "github", label: "GitHub", href: "https://github.com/layesall" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/layesall" },
    ],
  },
};