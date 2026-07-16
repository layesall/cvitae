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
  description: string;
  image: {
    src: string;
    alt: string;
  };
  services: ServiceItem[];
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
  stack: string[];
}

export interface StatItem {
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
    statusLabels: Record<string, string>;
    noImageText: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'development';
  year: number;
  tags: string[];
  image?: string;
  link?: string;
}