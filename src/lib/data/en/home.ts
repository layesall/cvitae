import { HomeData } from "@/types";

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
        price: "From €800 (excl. VAT)",
        note: "Domain and hosting at your expense",
        duration: "2 to 4 weeks",
        ctaText: "Discuss the project",
        ctaHref: "/#contact",
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
        price: "€35/h (excl. VAT)",
        note: "Session billed per started hour",
        duration: "On quote",
        ctaText: "Describe my need",
        ctaHref: "/#contact",
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
        tags: ["Next.js", "PostgreSQL", "Booking"],
        image: "/images/meetus.png",
        link: "#",
      },
      {
        id: "layesall",
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
            "A 5-page showcase site starts at €800 excl. VAT. An online store from €1,500 excl. VAT. A custom tool or SaaS app from €3,000 excl. VAT. Every quote is prepared after a free discovery call — you get a fixed price, no surprises.",
        },
        {
            id: "vat",
            question: "Are your prices inclusive of VAT?",
            answer:
            "All prices shown are excluding VAT. Belgian VAT of 21% applies to web development and IT consulting services. For business clients established in the EU outside Belgium, VAT is reverse-charged by the buyer ('VAT due by the recipient').",
        },
        {
            id: "payment",
            question: "How does payment work?",
            answer:
            "Payment happens in three stages: 40% on signature to kick off the project, 30% midway after a first version is approved, 30% before going live. Bank transfer or Stripe. Domain, hosting and third-party services remain your responsibility and are subscribed directly in your name. No hidden fees.",
        },
        {
            id: "guarantee",
            question: "What if I'm not satisfied with the result?",
            answer:
            "You approve every stage before we move forward: wireframes, mockups, then development. If something doesn't match the scope defined at the start, I fix it until you approve. The final balance is only due after your preview approval — you never pay for something you haven't signed off on.",
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
    formSubtitle:
      "No middleman, no form lost in the void. I read every message and reply myself.",
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
      error: "Something went wrong. Contact me at contact@layesall.com",
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
      href: "/#contact",
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