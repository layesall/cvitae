"use client";

import { useI18n } from "@/context/I18nContext";
import { homeDataFR, homeDataEN, projectsPageDataFR, projectsPageDataEN } from "@/lib/data";
import { HomeData, ProjectsPageData } from "@/types";

export function useHomeData(): HomeData {
  const { locale } = useI18n();
  return locale === "fr" ? homeDataFR : homeDataEN;
}

export function useProjectsData(): ProjectsPageData {
  const { locale } = useI18n();
  return locale === "fr" ? projectsPageDataFR : projectsPageDataEN;
}

// Helper to generate Cal.eu URL for a service
export function useCalUrl(): (slug: string) => string {
  const { locale } = useI18n();
  const base = "https://cal.eu/layesall";
  
  return (slug: string) => {
    return locale === "fr" ? `${base}/${slug}` : `${base}/${slug}?lng=en`;
  };
}