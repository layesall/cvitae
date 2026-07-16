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
  const { badge, identity, title, description, image, services, stats, actions, footer } = useHomeData();

  return (
    <main className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
      {/* Locale Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <LocaleToggle />
      </div>

      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center gap-4 sm:gap-6 pt-10 sm:pt-0">
        
        {/* TOP: Avatar + Identity + Content */}
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          
          {/* LEFT: Avatar */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 shrink-0">
            <Avatar src={image.src} alt={image.alt} size={280} />
          </div>
          
          {/* RIGHT: Identity + Hero + Stats + Actions */}
          <div className="flex flex-col gap-2 sm:gap-3 min-w-0 flex-1 items-center lg:items-start text-center lg:text-left">
            <Identity data={{ badge, identity }} />
            <HeroContent data={{ title, description }} />
            <Stats stats={stats} />
            <div className="flex flex-row gap-2 sm:gap-3 mt-2">
              <ActionButtons data={actions} />
            </div>
          </div>
        </div>

        {/* MIDDLE: Services */}
        <div className="w-full">
          <ServiceCards services={services} />
        </div>
      </div>

      {/* BOTTOM: Footer */}
      <div className="max-w-5xl mx-auto w-full pt-4 sm:pt-6">
        <Footer data={footer} />
      </div>
    </main>
  );
}