import { HomeData } from "@/types";

/* ─────────────────────────────────────────────
   FRANÇAIS
   ───────────────────────────────────────────── */

export const homeDataFR: HomeData = {
  id: "home",

  badge: {
    text: "Freelance disponible • Remote / Bruxelles",
    variant: "success",
  },

  identity: {
    name: "Layesall.",
  },

  title: {
    main: "Sites web qui",
    highlight: "travaillent pour vous.",
  },

  subtitle: "Je conçois, je code, je livre. Sans intermédiaire.",

  heroBadges: {
    availability: "Dispo immédiate",
    quote: "Devis en 48h",
  },

  image: {
    src: "/images/meprofile.png",
    alt: "Layesall — Développeur web freelance",
    flipX: true,
  },
  services: [
    {
      id: "web",
      icon: "Globe",
      title: "Projet Web",
      subtitle: "Site vitrine, boutique, outil métier",
      description:
        "Vous avez un projet à construire. Ensemble, on définit le périmètre, les priorités et le planning. Je m'occupe du reste, de la maquette à la mise en ligne.",
      deliverables: [
        "Cadrage & devis en 48h",
        "Design sur mesure",
        "Développement & intégration",
        "Mise en ligne + 30j support",
      ],
      price: "Dès 800€",
      duration: "2 à 4 semaines",
      ctaText: "Discuter du projet",
      ctaHref: "#contact", // TODO : Meetus
      accent: "accent",
    },
    {
      id: "consulting",
      icon: "Compass",
      title: "Conseil & Expertise IT",
      subtitle: "Audit, débogage, optimisation",
      description:
        "Votre projet existe mais coince quelque part ? Je viens mettre les mains dans le code, identifier ce qui freine et vous aider à aller plus vite, plus proprement.",
      deliverables: [
        "Audit technique complet",
        "Identification des blocages",
        "Correctifs & optimisations",
        "Plan d'évolution clair",
      ],
      price: "75€/h",
      duration: "Sur devis",
      ctaText: "Décrire mon besoin",
      ctaHref: "#contact", // TODO : Meetus
      accent: "accent-2",
    },
  ],

  process: {
    eyebrow: "Process",
    titleMain: "Comment on",
    titleHighlight: "travaille ensemble.",
    subtitle:
      "Quatre étapes claires, du premier contact à la mise en ligne. Zéro surprise, zéro jargon.",
    steps: [
      {
        number: "01",
        icon: "MessageCircle",
        title: "Appel découverte",
        duration: "15 min · Gratuit",
        description:
          "On clarifie votre besoin, vos objectifs et votre budget. Vous repartez avec une vision claire, sans engagement.",
      },
      {
        number: "02",
        icon: "FileText",
        title: "Devis & cadrage",
        duration: "Sous 48h",
        description:
          "Je vous envoie une proposition nette : périmètre précis, prix fixe, planning détaillé. Pas de zones floues.",
      },
      {
        number: "03",
        icon: "Code2",
        title: "Développement",
        duration: "2 à 4 semaines",
        description:
          "Je construis votre projet et vous validez chaque étape. Aucun travail caché, aucun intermédiaire.",
      },
      {
        number: "04",
        icon: "Rocket",
        title: "Mise en ligne",
        duration: "Jour J + 30j support",
        description:
          "Déploiement, formation courte pour prendre la main, et 30 jours de support inclus. Vous restez autonome.",
      },
    ],
  },

  featuredProjects: {
    eyebrow: "Projets",
    titleMain: "Quelques",
    titleHighlight: "réalisations.",
    subtitle:
      "Une sélection de projets récents — outils internes, sites clients, expérimentations open source.",
    ctaText: "Voir tous les projets",
    ctaHref: "/projects",
    items: [
      {
        id: "meetus",
        title: "Meetus",
        description:
          "Outil de prise de rendez-vous pensé pour les indépendants. Créneaux, confirmations, rappels — le tout sans dépendre d'un service tiers.",
        year: 2026,
        category: "SaaS · En cours",
        tags: ["Next.js", "PostgreSQL", "Cal.com API"],
        image: "/images/meetus.png", // TODO
        link: "#", // TODO : URL publique quand prêt
      },
      {
        id: "portfolio",
        title: "Layesall",
        description:
          "Le site que vous êtes en train de lire. Design sombre, animations discrètes, i18n FR/EN et zéro dépendance à un template.",
        year: 2026,
        category: "Site personnel",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        image: "/images/portfolio.png", // TODO
        link: "#",
      },
      {
        id: "najohair",
        title: "Najohair",
        description:
          "Boutique e-commerce dédiée aux soins capillaires, avec une expérience d'achat fluide et un design élégant pensé pour la conversion.",
        year: 2025,
        category: "E-Commerce",
        tags: ["Shopify", "Liquid", "Optimisation"],
        image: "/images/najohair.png", // TODO
        link: "https://najohair.com/",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    titleMain: "Questions",
    titleHighlight: "fréquentes.",
    subtitle:
      "Les réponses aux questions que les clients me posent avant de démarrer. Si la vôtre n'est pas là, écrivez-moi.",
    items: [
      {
        id: "price",
        question: "Combien coûte un projet web ?",
        answer:
          "Un site vitrine 5 pages démarre à 800€. Une boutique en ligne à partir de 1 500€. Un outil métier ou une application SaaS, à partir de 3 000€. Chaque devis est établi après un appel découverte gratuit — vous recevez un prix fixe, sans surprise.",
      },
      {
        id: "timeline",
        question: "Combien de temps pour livrer ?",
        answer:
          "Un site vitrine : 2 à 3 semaines. Une boutique : 3 à 5 semaines. Un outil métier : 4 à 8 semaines selon le périmètre. Le planning est posé dès le devis et respecté — chaque étape est validée ensemble.",
      },
      {
        id: "remote",
        question: "Travaillez-vous uniquement à distance ?",
        answer:
          "Oui, 100% à distance. Je travaille avec des clients en Belgique, en France et ailleurs en Europe. Visios, e-mails, Slack — tous les échanges sont simples et rapides, quel que soit votre fuseau.",
      },
      {
        id: "payment",
        question: "Comment se passe le paiement ?",
        answer:
          "30% à la signature pour réserver le créneau, 40% à mi-parcours, 30% à la livraison. Virement bancaire ou Stripe. Pas de frais cachés, pas de surprise en fin de projet.",
      },
      {
        id: "ownership",
        question: "Est-ce que je deviens propriétaire du code ?",
        answer:
          "Oui. À la livraison finale, vous recevez le code source complet, les accès à votre hébergement et à votre nom de domaine. Vous n'êtes dépendant de personne — pas même de moi.",
      },
      {
        id: "support",
        question: "Que se passe-t-il après la livraison ?",
        answer:
          "30 jours de support inclus : corrections de bugs, ajustements mineurs, réponses à vos questions. Passé ce délai, vous pouvez souscrire à un forfait maintenance mensuel ou me solliciter ponctuellement à l'heure.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Un projet en tête ?",
    titleLine1: "Travaillons",
    titleLine2: "ensemble.",
    titleHighlight: "ensemble.",
    subtitle:
      "Décrivez votre projet en quelques lignes. Je vous réponds sous 24h avec une première lecture claire — sans engagement.",

    formTitle: "Écrivez-moi directement.",
    formSubtitle:"Pas d'intermédiaire, pas de formulaire qui part dans le vide. Je lis chaque message et je réponds moi-même.",

    reassurance: [
      "Réponse sous 24h",
      "Devis gratuit en 48h",
      "Sans engagement",
    ],
  },

  contactForm: {
    labels: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
    },
    placeholders: {
      firstName: "Camara",
      lastName: "Laye",
      email: "camara.laye@exemple.com",
      message: "Décrivez votre projet en quelques lignes…",
    },
    subjects: {
      web: "Projet Web",
      consulting: "Conseil & Expertise IT",
      freelance: "Freelance / Mission",
      other: "Autre demande",
    },
    button: {
      idle: "Envoyer le message",
      loading: "Envoi en cours…",
    },
    feedback: {
      success: "Message envoyé ! Je vous réponds sous 24h.",
      error: "Une erreur est survenue. Contactez-moi à hello@layesall.dev",
    },
    schemaMessages: {
      firstNameMin: "Le prénom doit contenir au moins 2 caractères.",
      firstNameMax: "Le prénom ne peut pas dépasser 50 caractères.",
      lastNameMin: "Le nom doit contenir au moins 2 caractères.",
      lastNameMax: "Le nom ne peut pas dépasser 50 caractères.",
      emailInvalid: "Adresse email invalide.",
      emailMax: "L'email ne peut pas dépasser 255 caractères.",
      subjectInvalid: "Veuillez sélectionner un sujet valide.",
      messageMin: "Le message doit contenir au moins 10 caractères.",
      messageMax: "Le message ne peut pas dépasser 2000 caractères.",
      messageUnsafe: "Le message contient des caractères non autorisés.",
    },
  },

  actions: {
    primary: {
      text: "Me contacter",
      href: "#", // TODO : URL Meetus
      variant: "secondary" as const,
      icon: true,
    },
    secondary: {
      text: "Voir les projets",
      href: "/projects",
      variant: "secondary" as const,
    },
  },

  footer: {
    tagline: "Freelance web & IT — sites, boutiques, outils sur mesure.",
    copyright: "© 2026 Layesall. Tous droits réservés.",
    email: "",
    socials: [
      { id: "github",   label: "GitHub",   href: "https://github.com/layesall" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/layesall" },
    ],
    pagesLabel: "Pages",
    pages: [
      { id: "home",     label: "Accueil",  href: "/" },
      { id: "services", label: "Services", href: "/#services" },
      { id: "projects", label: "Projets",  href: "/projects" },
      { id: "contact",  label: "Contact",  href: "/#contact" },
    ],
    quickCta: {
      title: "Un projet ?",
      description: "Réponse sous 24h. Devis gratuit en 48h.",
      buttonText: "Parlons-en",
    },
    madeIn: "Fait à Bruxelles",
    legalLink: { label: "Mentions légales", href: "/legal" },
  },
};

/* ─────────────────────────────────────────────
   ENGLISH
   ───────────────────────────────────────────── */

export const homeDataEN: HomeData = {
  id: "home",

  badge: {
    text: "Freelance available • Remote / Brussels",
    variant: "success",
  },

  identity: {
    name: "Layesall.",
  },

  title: {
    main: "Websites that",
    highlight: "work for you.",
  },

  subtitle: "I design, I code, I ship. No middleman.",

  heroBadges: {
    availability: "Available now",
    quote: "Quote in 48h",
  },

  image: {
    src: "/images/meprofile.png",
    alt: "Layesall — Freelance web developer",
    flipX: true,
  },

  services: [
    {
      id: "web",
      icon: "Globe",
      title: "Web Project",
      subtitle: "Website, online store, internal tool",
      description:
        "You have a project to build. Together we define the scope, priorities and timeline. I handle the rest, from mockup to going live.",
      deliverables: [
        "Scoping & quote in 48h",
        "Custom design",
        "Development & integration",
        "Go-live + 30d support",
      ],
      price: "From €800",
      duration: "2 to 4 weeks",
      ctaText: "Discuss the project",
      ctaHref: "#", // TODO: Meetus
      accent: "accent",
    },
    {
      id: "consulting",
      icon: "Compass",
      title: "IT Consulting & Expertise",
      subtitle: "Audit, debugging, optimization",
      description:
        "Your project exists but is stuck somewhere? I dive into the code, identify what's slowing you down and help you move faster, cleaner.",
      deliverables: [
        "Full technical audit",
        "Bottleneck identification",
        "Fixes & optimizations",
        "Clear roadmap forward",
      ],
      price: "€75/h",
      duration: "On quote",
      ctaText: "Describe my need",
      ctaHref: "#", // TODO: Meetus
      accent: "accent-2",
    },
  ],
  
  process: {
    eyebrow: "Process",
    titleMain: "How we",
    titleHighlight: "work together.",
    subtitle:
      "Four clear steps, from first contact to going live. Zero surprises, zero jargon.",
    steps: [
      {
        number: "01",
        icon: "MessageCircle",
        title: "Discovery call",
        duration: "15 min · Free",
        description:
          "We clarify your needs, goals and budget. You leave with a clear vision, no commitment.",
      },
      {
        number: "02",
        icon: "FileText",
        title: "Quote & scoping",
        duration: "Within 48h",
        description:
          "I send you a clean proposal: precise scope, fixed price, detailed timeline. No fuzzy areas.",
      },
      {
        number: "03",
        icon: "Code2",
        title: "Development",
        duration: "2 to 4 weeks",
        description:
          "I build your project and you approve every step. No hidden work, no middleman.",
      },
      {
        number: "04",
        icon: "Rocket",
        title: "Go live",
        duration: "D-day + 30d support",
        description:
          "Deployment, quick onboarding so you're in control, and 30 days of support included.",
      },
    ],
  },

  featuredProjects: {
    eyebrow: "Projects",
    titleMain: "Selected",
    titleHighlight: "work.",
    subtitle:
      "A selection of recent projects — internal tools, client websites, and open source experiments.",
    ctaText: "View all projects",
    ctaHref: "/projects",
    items: [
      {
        id: "meetus",
        title: "Meetus",
        description:
          "A booking tool built for freelancers. Slots, confirmations, reminders — all without depending on a third-party service.",
        year: 2026,
        category: "SaaS · In progress",
        tags: ["Next.js", "PostgreSQL", "Cal.com API"],
        image: "/images/meetus.png",
        link: "#",
      },
      {
        id: "portfolio",
        title: "Layesall",
        description:
          "The site you're reading. Dark design, subtle animations, FR/EN i18n, and zero template dependency.",
        year: 2026,
        category: "Personal site",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        image: "/images/portfolio.png",
        link: "#",
      },
      {
        id: "najohair",
        title: "Najohair",
        description:
          "E-commerce store for hair care products, featuring a seamless shopping experience and elegant design optimized for conversions.",
        year: 2025,
        category: "E-commerce",
        tags: ["Shopify", "Liquid", "Conversion"],
        image: "/images/najohair.png",
        link: "https://najohair.com/",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    titleMain: "Frequently",
    titleHighlight: "asked.",
    subtitle:
      "Answers to the questions clients ask before we start. If yours isn't here, just email me.",
    items: [
      {
        id: "price",
        question: "How much does a web project cost?",
        answer:
          "A 5-page showcase site starts at €800. An online store from €1,500. A custom tool or SaaS app from €3,000. Every quote is prepared after a free discovery call — you get a fixed price, no surprises.",
      },
      {
        id: "timeline",
        question: "How long does delivery take?",
        answer:
          "Showcase site: 2 to 3 weeks. Online store: 3 to 5 weeks. Custom tool: 4 to 8 weeks depending on scope. The timeline is set in the quote and respected — every step is validated together.",
      },
      {
        id: "remote",
        question: "Do you only work remotely?",
        answer:
          "Yes, 100% remote. I work with clients in Belgium, France and across Europe. Video calls, email, Slack — everything is simple and fast, regardless of your timezone.",
      },
      {
        id: "payment",
        question: "How does payment work?",
        answer:
          "30% on signature to book the slot, 40% midway, 30% on delivery. Bank transfer or Stripe. No hidden fees, no end-of-project surprises.",
      },
      {
        id: "ownership",
        question: "Do I own the code?",
        answer:
          "Yes. On final delivery, you receive the full source code, access to your hosting and your domain. You're dependent on no one — not even me.",
      },
      {
        id: "support",
        question: "What happens after delivery?",
        answer:
          "30 days of support included: bug fixes, minor adjustments, answers to your questions. After that, you can subscribe to a monthly maintenance plan or reach out on an hourly basis.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Got a project in mind?",
    titleLine1: "Let's work",
    titleLine2: "together.",
    titleHighlight: "together.",
    subtitle:
      "Describe your project in a few lines. I'll get back to you within 24 hours with a clear first read — no commitment.",

    formTitle: "Write to me directly.",
    formSubtitle:"No middleman, no form lost in the void. I read every message and reply myself.",
    reassurance: [
      "Reply within 24h",
      "Free quote in 48h",
      "No commitment",
    ],
  },

  contactForm: {
    labels: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    placeholders: {
      firstName: "Kunta",
      lastName: "Kinte",
      email: "kunta.kinte@example.com",
      message: "Describe your project in a few lines…",
    },
    subjects: {
      web: "Web project",
      consulting: "IT Consulting",
      freelance: "Freelance / Mission",
      other: "Other request",
    },
    button: {
      idle: "Send message",
      loading: "Sending…",
    },
    feedback: {
      success: "Message sent! I'll get back to you within 24h.",
      error: "Something went wrong. Contact me at hello@layesall.dev",
    },
    schemaMessages: {
      firstNameMin: "First name must be at least 2 characters.",
      firstNameMax: "First name cannot exceed 50 characters.",
      lastNameMin: "Last name must be at least 2 characters.",
      lastNameMax: "Last name cannot exceed 50 characters.",
      emailInvalid: "Invalid email address.",
      emailMax: "Email cannot exceed 255 characters.",
      subjectInvalid: "Please select a valid subject.",
      messageMin: "Message must be at least 10 characters.",
      messageMax: "Message cannot exceed 2000 characters.",
      messageUnsafe: "Message contains unauthorized characters.",
    },
  },
  
  actions: {
    primary: {
      text: "Get in touch",
      href: "#contact", // TODO: Meetus URL
      variant: "secondary" as const,
      icon: true,
    },
    secondary: {
      text: "View projects",
      href: "/projects",
      variant: "secondary" as const,
    },
  },

  footer: {
    tagline: "Freelance web & IT — websites, stores, custom tools.",
    copyright: "© 2026 Layesall. All rights reserved.",
    email: "",
    socials: [
      { id: "github",   label: "GitHub",   href: "https://github.com/layesall" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/layesall" },
    ],
    pagesLabel: "Pages",
    pages: [
      { id: "home",     label: "Home",     href: "/" },
      { id: "services", label: "Services", href: "/#services" },
      { id: "projects", label: "Projects", href: "/projects" },
      { id: "contact",  label: "Contact",  href: "/#contact" },
    ],
    quickCta: {
      title: "Got a project?",
      description: "Reply within 24h. Free quote in 48h.",
      buttonText: "Let's talk",
    },
    madeIn: "Made in Brussels",
    legalLink: { label: "Legal notice", href: "/legal" },
  },
};