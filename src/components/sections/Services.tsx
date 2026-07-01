"use client";

import { motion } from "framer-motion";
import { Layers3, Database, Compass } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Layers3,
  Database,
  Compass,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Ce que je fais"
          title="Services sur mesure"
          description="Des solutions techniques adaptées à vos besoins métier"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-card border border-border rounded-2xl p-8 card-hover group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6 text-text-muted" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}