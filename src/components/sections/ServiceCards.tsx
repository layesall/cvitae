"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Compass } from "lucide-react";
import { ServiceItem } from "@/types";
import { useCalUrl } from "@/hooks/useLocaleData";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Compass,
};

interface ServiceCardsProps {
  services: ServiceItem[];
  ctaLabel?: string;
}

export default function ServiceCards({ services, ctaLabel }: ServiceCardsProps) {
  const getCalUrl = useCalUrl();

  return (
    <div className="flex flex-col gap-2 w-full lg:max-w-[420px]">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon];
        const calUrl = service.calSlug ? getCalUrl(service.calSlug) : undefined;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
            className="bg-bg-card border border-border rounded-xl p-2.5 flex flex-col"
          >
            {/* En-tête : icône + titre + sous-titre - compact */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-text-muted" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xs sm:text-sm font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="text-text-dim text-[10px] sm:text-xs">
                  {service.subtitle}
                </p>
              </div>
            </div>

            {/* Description + Tags - compact */}
            <div className="flex-1">
              <p className="text-text-muted text-[10px] sm:text-xs leading-relaxed mb-1">
                {service.description}
              </p>
            </div>

            {/* Bouton en bas à droite - compact */}
            {calUrl && (
              <div className="flex justify-end">
                <Button
                  href={calUrl}
                  target="_blank"
                  variant="secondary"
                  icon
                  className="text-[10px] sm:text-xs px-2.5 py-1"
                >
                  {ctaLabel}
                </Button>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}