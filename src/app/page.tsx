"use client";

import Avatar from "@/components/ui/Avatar";
import Identity from "@/components/sections/Identity";
import ActionButtons from "@/components/sections/ActionButtons";
import HeroContent from "@/components/sections/HeroContent";
import ServiceCards from "@/components/sections/ServiceCards";
import Stats from "@/components/sections/Stats";
import Footer from "@/components/layout/Footer";
import LocaleToggle from "@/components/ui/LocaleToggle";
import { useHomeData } from "@/hooks/useLocaleData";

export default function HomePage() {
  const { 
    badge, identity, title, image, 
    services, serviceCtaLabel, stats, actions, footer 
  } = useHomeData();

  return (
    <main className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
      {/* Locale Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <LocaleToggle />
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center pt-10 sm:pt-0">
        {/* Grille LEFT / RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10">
          
          {/* LEFT : identité */}
          <div className="flex flex-col items-center lg:items-center text-center lg:text-left gap-3 justify-center">
            <Avatar src={image.src} alt={image.alt} size={180} />
            <Identity data={{ badge, identity }} />
            <HeroContent data={{ title }} />
            <Stats stats={stats} />
          </div>

          {/* RIGHT : services */}
          <div className="flex flex-col justify-center gap-3 lg:items-end">
            <div className="flex flex-row gap-2 mt-2 lg:justify-end">
              <ActionButtons data={actions} />
            </div>
            <ServiceCards services={services} ctaLabel={serviceCtaLabel} />
          </div>
        </div>
      </div>

      {/* BOTTOM : footer */}
      <div className="max-w-6xl mx-auto w-full pt-4">
        <Footer data={footer} />
      </div>
    </main>
  );
}