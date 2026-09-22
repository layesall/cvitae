import type { Locale } from "@/context/I18nContext";

// ── FR ──
import { homeDataFR } from "./fr/home";
import { projectsPageDataFR } from "./fr/projects";
import { legalDataFR } from "./fr/legal";

// ── EN ──
import { homeDataEN } from "./en/home";
import { projectsPageDataEN } from "./en/projects";
import { legalDataEN } from "./en/legal";

/**
 * Agrégation par locale — point d'entrée unique pour toute l'app.
 */
export const DATA = {
  fr: {
    home: homeDataFR,
    projects: projectsPageDataFR,
    legal: legalDataFR,
  },
  en: {
    home: homeDataEN,
    projects: projectsPageDataEN,
    legal: legalDataEN,
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

// Re-exports nominatifs (pratique si un composant serveur en a besoin)
export {
  homeDataFR,
  homeDataEN,
  projectsPageDataFR,
  projectsPageDataEN,
  legalDataFR,
  legalDataEN,
};