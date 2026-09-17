"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Compass } from "lucide-react";
import { ServiceItem } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Compass,
};

interface ServiceCardsProps {
  services: ServiceItem[];
}

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <div className="flex flex-col gap-6 w-full lg:max-w-[520px] lg:ml-auto">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon];

        return (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
            className="
              bg-bg-card border border-border rounded-xl
              p-3 sm:p-3.5
              flex flex-col
            "
          >
            {/* Header — icône + titre + sous-titre */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-text-muted" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="t-svc-t font-[family-name:var(--font-display)] font-semibold leading-tight truncate">
                  {service.title}
                </h3>
                <p className="t-svc-d text-text-dim truncate">
                  {service.subtitle}
                </p>
              </div>
            </div>

            {/* Description : visible partout, pas de restriction */}
            {service.description && (
              <p className="text-text-muted text-base leading-relaxed mt-2">
                {service.description}
              </p>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}