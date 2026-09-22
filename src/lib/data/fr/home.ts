import { HomeData } from "@/types";

export const homeDataFR: HomeData = {
  id: "home",
  badge: {
    text: "Freelance disponible • Remote / Bruxelles",
    variant: "success",
  },
  identity: {
    name: "Layesall",
  },
  title: {
    main: "Transformez vos visiteurs",
    highlight: "en clients.",
  },
  subtitle: "Design, code, mise en ligne — en semaines, pas en mois.",
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
        price: "Dès 800€ HTVA",
        note: "Domaine et hébergement à votre charge",
        duration: "2 à 4 semaines",
        ctaText: "Discuter du projet",
        ctaHref: "/#contact",
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
        price: "35€/h HTVA",
        note: "Session facturée à l'heure entamée",
        duration: "Sur devis",
        ctaText: "Décrire mon besoin",
        ctaHref: "/#contact",
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
        tags: ["Next.js", "PostgreSQL", "Booking"],
        image: "/images/meetus.png",
        link: "#",
      },
      {
        id: "layesall",
        title: "Layesall",
        description:
          "Le site que vous êtes en train de lire. Design sombre, animations discrètes, i18n FR/EN et zéro dépendance à un template.",
        year: 2026,
        category: "Site personnel",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        image: "/images/layesall.png",
        link: "/",
      },
      {
        id: "najohair",
        title: "Najohair",
        description:
          "Boutique e-commerce dédiée aux soins capillaires, avec une expérience d'achat fluide et un design élégant pensé pour la conversion.",
        year: 2025,
        category: "E-Commerce",
        tags: ["Shopify", "Liquid", "Optimisation"],
        image: "/images/najohair.png",
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
            "Un site vitrine 5 pages démarre à 800€ HTVA. Une boutique en ligne à partir de 1 500€ HTVA. Un outil métier ou une application SaaS, à partir de 3 000€ HTVA. Chaque devis est établi après un appel découverte gratuit — vous recevez un prix fixe, sans surprise.",
        },
        {
            id: "vat",
            question: "Vos tarifs sont-ils TTC ou HTVA ?",
            answer:
            "Tous les tarifs affichés sont hors TVA. La TVA belge de 21 % s'applique sur les prestations de développement et de conseil IT. Pour les clients professionnels établis dans l'UE hors Belgique, la TVA est autoliquidée par le preneur (mention « TVA due par le preneur »).",
        },
        {
            id: "payment",
            question: "Comment se passe le paiement ?",
            answer:
            "Le règlement se fait en trois étapes : 40 % à la signature pour lancer le projet, 30 % à mi-parcours après validation d'une première version, 30 % avant la mise en ligne. Virement bancaire ou Stripe. Le domaine, l'hébergement et les services tiers restent à votre charge et sont souscrits directement à votre nom. Aucun frais caché.",
        },
        {
            id: "guarantee",
            question: "Et si je ne suis pas satisfait du résultat ?",
            answer:
            "Vous validez chaque étape avant qu'on avance : wireframes, maquettes, puis développement. Si quelque chose ne correspond pas au périmètre défini au départ, je corrige jusqu'à validation. Le solde final n'est dû qu'après votre validation en preview — vous ne payez jamais pour quelque chose que vous n'avez pas approuvé.",
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
    formSubtitle:
      "Pas d'intermédiaire, pas de formulaire qui part dans le vide. Je lis chaque message et je réponds moi-même.",
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
      error: "Une erreur est survenue. Contactez-moi à contact@layesall.com",
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
      href: "/#contact",
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