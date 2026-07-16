"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Locale = "fr" | "en";

interface I18nContextType {
  locale: Locale;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <I18nContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}