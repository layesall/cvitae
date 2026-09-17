"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import LocaleToggle from "@/components/ui/LocaleToggle";
import { useHomeData } from "@/hooks/useLocaleData";
import { useI18n } from "@/context/I18nContext";

export default function HomePage() {
  const {
    badge,
    identity,
    title,
    subtitle,
    image,
    services,
    process,
    featuredProjects,
    faq,
    finalCta,
    actions,
    heroBadges,
  } = useHomeData();

  const { locale } = useI18n();

  const servicesCopy =
    locale === "fr"
      ? {
          eyebrow: "Services",
          titleMain: "Ce que je",
          titleHighlight: "propose.",
          subtitle:
            "Deux offres, deux façons de travailler ensemble. Choisissez celle qui correspond à votre situation.",
        }
      : {
          eyebrow: "Services",
          titleMain: "What I",
          titleHighlight: "offer.",
          subtitle:
            "Two offerings, two ways to work together. Pick the one that fits your situation.",
        };

  return (
    <main className="relative min-h-[100svh] flex flex-col">

      {/* Top-bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/60 border-b border-border/60">
        <div className="container-page flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
          >
            {identity.name.replace(".", "")}
            <span className="dot-accent">.</span>
          </Link>

          <div className="flex items-center gap-3">
            <LocaleToggle />
            {actions.primary && (
              <Link
                href={actions.primary.href}
                className="hidden sm:inline-flex btn-accent !py-2 !px-4 !text-xs"
              >
                {actions.primary.text}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <Hero data={{ badge, title, subtitle, image, actions, heroBadges }} />

      {/* Services */}
      <Services
        services={services}
        eyebrow={servicesCopy.eyebrow}
        titleMain={servicesCopy.titleMain}
        titleHighlight={servicesCopy.titleHighlight}
        subtitle={servicesCopy.subtitle}
      />

      {/* Process */}
      <Process
        eyebrow={process.eyebrow}
        titleMain={process.titleMain}
        titleHighlight={process.titleHighlight}
        subtitle={process.subtitle}
        steps={process.steps}
      />

      {/* Projets */}
      <FeaturedProjects
        eyebrow={featuredProjects.eyebrow}
        titleMain={featuredProjects.titleMain}
        titleHighlight={featuredProjects.titleHighlight}
        subtitle={featuredProjects.subtitle}
        ctaText={featuredProjects.ctaText}
        ctaHref={featuredProjects.ctaHref}
        items={featuredProjects.items}
      />

      {/* FAQ */}
      <FAQ
        eyebrow={faq.eyebrow}
        titleMain={faq.titleMain}
        titleHighlight={faq.titleHighlight}
        subtitle={faq.subtitle}
        items={faq.items}
      />

      {/* Final CTA */}
      <FinalCTA
        data={finalCta}
        avatarSrc={image.src}
        avatarAlt={image.alt}
      />
    </main>
  );
}