"use client";

import { useI18n } from "@/context/I18nContext";
import { cn } from "@/lib/utils";

export default function LocaleToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-0 text-xs font-semibold uppercase tracking-wider"
      aria-label={`Switch to ${locale === "fr" ? "English" : "French"}`}
    >
      <span className={cn(
        "px-2.5 py-1 rounded-l-full transition-colors",
        locale === "fr" ? "bg-text text-bg" : "bg-bg-card text-text-dim border border-r-0 border-border hover:text-text"
      )}>FR</span>
      <span className={cn(
        "px-2.5 py-1 rounded-r-full transition-colors",
        locale === "en" ? "bg-text text-bg" : "bg-bg-card text-text-dim border border-l-0 border-border hover:text-text"
      )}>EN</span>
    </button>
  );
}