"use client";

import { useI18n } from "@/context/I18nContext";
import { legalDataFR, legalDataEN } from "@/lib/data";
import { LegalData } from "@/types";

export function useLegalData(): LegalData {
  const { locale } = useI18n();
  return locale === "fr" ? legalDataFR : legalDataEN;
}