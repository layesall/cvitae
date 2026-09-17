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

  subtitle: string;

  heroBadges: {
    availability: string;
    quote: string;
  };

  image: {
    src: string;
    alt: string;
    flipX?: boolean;
  };

  services: ServiceItem[];

   process: {
    eyebrow: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    steps: ProcessStep[];
  };

  featuredProjects: {
    eyebrow: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    items: Project[];
  };

  faq: {
    eyebrow: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    items: FAQItem[];
  };

  finalCta: FinalCTA;

  contactForm: ContactFormData;

  actions: {
    primary: ActionButton;
    secondary?: ActionButton;
  };

  footer: FooterData;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  price: string;
  duration: string;
  ctaText: string;
  ctaHref: string;
  accent: "accent" | "accent-2";
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

// ── Process ─────────────────────────────────────
export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  duration: string;
  description: string;
}

/* ── Projets ──────────────────────────────────── */

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
  category?: string;
  image?: string;
  link?: string;
  subtitle?: string;
  role?: string;
  duration?: string;
  status?: string; 
  featured?: boolean;
}

// ── FAQ ────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ── CTA Final ──────────────────────────────────
export interface FinalCTA {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  subtitle: string;

  // Colonne gauche (pitch)
  formTitle: string;
  formSubtitle: string;
  reassurance: string[];
}

// ── Footer ─────────────────────────────────────
export interface FooterData {
  tagline: string;
  copyright: string;
  email: string;
  socials: SocialLink[];
  pagesLabel: string;
  pages: FooterLink[];
  quickCta: {
    title: string;
    description: string;
    buttonText: string;
  };
  madeIn: string;
  legalLink?: { label: string; href: string };
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}
/* ── Mentions légales ─────────────────────────── */

export interface LegalItem {
  id: string;
  content: string;
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

// ── Contact Form ───────────────────────────────
export interface ContactFormLabels {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormPlaceholders {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface ContactFormSubjects {
  web: string;
  consulting: string;
  freelance: string;
  other: string;
}

export interface ContactFormButton {
  idle: string;
  loading: string;
}

export interface ContactFormFeedback {
  success: string;
  error: string;
}

export interface ContactFormData {
  labels: ContactFormLabels;
  placeholders: ContactFormPlaceholders;
  subjects: ContactFormSubjects;
  button: ContactFormButton;
  feedback: ContactFormFeedback;
  schemaMessages: {
    firstNameMin: string;
    firstNameMax: string;
    lastNameMin: string;
    lastNameMax: string;
    emailInvalid: string;
    emailMax: string;
    subjectInvalid: string;
    messageMin: string;
    messageMax: string;
    messageUnsafe: string;
  };
}