import { Project, Service, ProcessStep, NavLink, Stat } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projets' },
  { label: 'Processus', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { value: 'Python / Django', label: 'Backend & APIs' },
  { value: 'React / Next.js', label: 'Frontend & UI' },
  { value: 'SQL & Data', label: 'Bases de données' },
];

export const services: Service[] = [
  {
    id: 'products',
    icon: 'Layers3',
    title: 'Produits web, SaaS & Shopify',
    description:
      'Développement d\'applications web, plateformes métier, SaaS et boutiques Shopify sur mesure. Des produits rapides, évolutifs et pensés pour offrir une expérience utilisateur claire et fluide.',
  },
  {
    id: 'backend',
    icon: 'Database',
    title: 'Backend, APIs & architecture',
    description:
      'Conception de backends robustes, APIs REST/GraphQL, automatisations et intégrations de services tiers. Une architecture propre et fiable pour accompagner la croissance de votre activité.',
  },
  {
    id: 'consulting',
    icon: 'Compass',
    title: 'Conseil & accompagnement technique',
    description:
      'Audit Shopify, optimisation de conversion, accompagnement technique et organisation digitale pour indépendants et PME. Parfois, améliorer un système existant est plus efficace que repartir de zéro.',
  },
];

export const projects: Project[] = [
  {
    id: 'familiz',
    title: 'FAMILIZ',
    description:
      'Application de gestion familiale permettant de centraliser les tâches, événements, finances et membres d\'une grande famille au sein d\'un espace unique.',
    status: 'active',
    year: 2026,
    tags: ['Go', 'HTML', 'SQLite'],
    image: '/images/familiz.png',
    note: 'Projet privé développé pour une famille spécifique',
  },
  {
    id: 'najohair',
    title: 'NAJOHAIR',
    description:
      'Boutique Shopify dédiée à l\'univers capillaire avec une expérience d\'achat moderne, un parcours fluide et une personnalisation avancée du thème et des fonctionnalités.',
    status: 'active',
    year: 2026,
    tags: ['Shopify', 'Liquid'],
    link: 'https://najohair.com',
    image: '/images/najohair.png',
  },
  {
    id: 'portfolio',
    title: 'Layesall Personal Homepage',
    description:
      'Portfolio minimaliste conçu pour présenter mes projets, mon approche produit et convertir les prises de contact avec une expérience rapide et fluide.',
    status: 'active',
    year: 2024,
    tags: ['NextJS', 'TypeScript', 'Tailwind'],
    image: '/images/portfolio.png',
    note: 'Vous êtes actuellement dessus',
  },
  {
    id: 'events',
    title: 'Zabani Event',
    description:
      'Plateforme de gestion d\'événements avec création, réservation, paiements Stripe et gestion des participants en temps réel.',
    status: 'development',
    year: 2025,
    tags: ['Python', 'Django', 'SQLite3', 'Stripe'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Découverte',
    description:
      'On échange autour de votre projet, de vos besoins et de vos objectifs afin de définir une direction claire et réaliste.',
  },
  {
    number: 2,
    title: 'Conception',
    description:
      'Structure du produit, choix techniques, expérience utilisateur et architecture. Chaque décision est pensée pour rester simple et évolutive.',
  },
  {
    number: 3,
    title: 'Développement',
    description:
      'Le projet avance étape par étape avec des échanges réguliers, des retours rapides et une visibilité continue sur l\'évolution du produit.',
  },
  {
    number: 4,
    title: 'Mise en ligne',
    description:
      'Déploiement, optimisations, accompagnement et suivi après livraison pour assurer un lancement stable et durable.',
  },
];

export const socialLinks = {
  github: 'https://github.com/layesall',
  linkedin: 'https://linkedin.com/in/layesall',
  email: 'mailto:ulayesall@gmail.com',
};

export const tva = 'BE 1037.988.189';