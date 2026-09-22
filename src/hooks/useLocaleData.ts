"use client";

import { useI18n } from "@/context/I18nContext";
import { DATA } from "@/lib/data";
import type { HomeData, ProjectsPageData, LegalData} from "@/types";

export function useHomeData(): HomeData {
  const { locale } = useI18n();
  return DATA[locale].home;
}

export function useProjectsData(): ProjectsPageData {
  const { locale } = useI18n();
  return DATA[locale].projects;
}

export function useLegalData(): LegalData {
  const { locale } = useI18n();
  return DATA[locale].legal;
}