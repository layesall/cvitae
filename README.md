# README.md — version épurée

Le README d'un repo sert à **documenter le projet**, pas à refaire le pitch commercial (qui est déjà sur le site). Voici la version stricte.

```markdown
# Layesall

Portfolio freelance — [layesall.com](https://layesall.com)

Site vitrine présentant mes services de développement web et de conseil IT.
Cible : indépendants, PME et entreprises cherchant un développeur freelance.

---

## Stack

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Validation** : Zod
- **Email** : Brevo (API transactionnelle)
- **Hébergement** : GitHub Pages (statique) + Route Handler Next.js (contact)

---

## Structure

```
src/
├── app/              # Pages (App Router)
│   ├── page.tsx      # Home
│   ├── projects/     # Showcase projets
│   ├── legal/        # Mentions légales
│   └── api/contact/  # Route Handler Brevo
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, Services, Process, FAQ, FinalCTA…
│   ├── projects/     # Showcase, CTA projets
│   └── legal/        # TOC, contenu
├── context/          # I18nProvider
├── hooks/            # useHomeData, useProjectsData
├── lib/
│   ├── data/fr/      # Contenu FR
│   ├── data/en/      # Contenu EN
│   ├── email/        # Templates email (HTML + texte)
│   └── utils.ts      # Schémas Zod, helpers
└── types/            # Types partagés
```

---

## Développement

```bash
# Installation
pnpm install

# Variables d'environnement
cp .env.example .env.local
# → renseigner BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME, CONTACT_RECEIVER_EMAIL

# Serveur de dev
pnpm dev

# Build production
pnpm build
```

---

## i18n

Le contenu est séparé par locale et par domaine :

- `src/lib/data/fr/home.ts` · `src/lib/data/en/home.ts`
- `src/lib/data/fr/projects.ts` · `src/lib/data/en/projects.ts`
- `src/lib/data/fr/legal.ts` · `src/lib/data/en/legal.ts`

Le point d'entrée `src/lib/data/index.ts` agrège tout et expose `DATA[locale][domain]`.
Le toggle FR/EN se fait via `I18nContext` (`useI18n()`).

---

## Contact

Formulaire sur `/#contact` → API Brevo transactionnelle (pas de stockage en base).