// types/index.ts — VERSION FINALE

import { ButtonVariant } from "@/components/ui/Button";
import { BadgeVariant } from "@/components/ui/Badge";

export interface HomeData {
  id: string;
  badge: {
    text: string;
    variant: BadgeVariant;
  };
  identity: {
    name: string;
  };
  title: {
    main: string;
    highlight: string;
  };
  image: {
    src: string;
    alt: string;
  };
  services: ServiceItem[];
  serviceCtaLabel?: string;
  stats: StatItem[];
  actions: {
    primary: ActionButton;
    secondary: ActionButton;
  };
  footer: FooterData;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description?: string;
  calSlug?: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface ActionButton {
  text: string;
  href: string;
  variant: ButtonVariant;
  icon?: boolean;
}

export interface FooterData {
  copyright: string;
  socials: SocialLink[];
  legalLink?: { label: string; href: string };
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface ProjectsPageData {
  header: {
    tag: string;
    title: string;
  };
  projects: Project[];
  ui: {
    backLabel: string;
    noImageText: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  tags: string[];
  image?: string;
  link?: string;
}

// --- Legal Mentions ---
export interface LegalItem {
  id: string;
  content: string; // peut contenir du HTML simple (balises <strong>, <a>, etc.)
}

export interface LegalSection {
  id: string;
  title: string;
  items: LegalItem[];
}

export interface LegalData {
  title: string;
  backLabel: string;
  sections: LegalSection[];
}