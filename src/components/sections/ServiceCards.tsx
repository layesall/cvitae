"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Compass } from "lucide-react";
import { ServiceItem } from "@/types";
import { useCalUrl } from "@/hooks/useLocaleData";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Compass,
};

interface ServiceCardsProps {
  services: ServiceItem[];
}

export default function ServiceCards({ services }: ServiceCardsProps) {
  const getCalUrl = useCalUrl();

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon];
        const calUrl = service.calSlug ? getCalUrl(service.calSlug) : undefined;
        
        const CardContent = (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
            className={`
              flex-1 bg-bg-card border border-border rounded-xl p-3 sm:p-4 
              transition-all duration-300
              ${calUrl 
                ? "hover:border-text/30 hover:bg-text/[0.02] cursor-pointer group" 
                : ""
              }
            `}
          >
            <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-muted" />
              </div>
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-display)] text-xs sm:text-sm font-semibold leading-tight truncate">
                  {service.title}
                </h3>
                <p className="text-text-dim text-[10px] sm:text-xs truncate">{service.subtitle}</p>
              </div>
            </div>
            
            <p className="text-text-muted text-[10px] sm:text-xs leading-relaxed mb-1.5 sm:mb-2 line-clamp-2">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] sm:text-[10px] text-text-dim bg-bg-elevated border border-border/50 px-1.5 sm:px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {calUrl && (
              <div className="mt-2 flex items-center gap-1 text-[10px] text-text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Réserver un appel</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            )}
          </motion.div>
        );

        if (calUrl) {
          return (
            <a
              key={service.id}
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              aria-label={`Réserver un appel pour ${service.title}`}
            >
              {CardContent}
            </a>
          );
        }

        return (
          <div key={service.id} className="flex-1">
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}