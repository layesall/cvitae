"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LocaleToggle from "@/components/ui/LocaleToggle";
import Footer from "./Footer";
import { useHomeData } from "@/hooks/useLocaleData";

interface PageTemplateProps {
  title: string;
  backLabel?: string;
  backHref?: string; // par défaut "/"
  children: React.ReactNode;
  className?: string;
}

export function PageTemplate({
  title,
  backLabel,
  backHref = "/",
  children,
  className = "",
}: PageTemplateProps) {

  const { footer } = useHomeData();

  return (
    <main className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
      {/* Locale toggle en position fixe */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <LocaleToggle />
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto w-full flex-1 pt-10 sm:pt-0">
        {/* En-tête commun */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold">
            {title}
          </h1>
          {backLabel && (
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
          )}
        </div>

        {/* Contenu spécifique à la page */}
        <div className={className}>{children}</div>
      </div>
      {/* BOTTOM : footer */}
        <div className="max-w-6xl mx-auto w-full pt-4">
          <Footer data={footer} />
        </div>
    </main>
  );
}