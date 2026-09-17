"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Compass, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ServiceItem } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Compass,
};

interface ServicesProps {
  services: ServiceItem[];
  eyebrow?: string;
  titleMain?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function Services({
  services,
  eyebrow = "Services",
  titleMain = "Ce que je",
  titleHighlight = "propose.",
  subtitle,
}: ServicesProps) {
  return (
    <section id="services" className="relative section-pad border-t border-border/60">
      <div className="container-page">

        {/* ── En-tête de section ── */}
        <div className="flex flex-col gap-6 mb-16 lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-eyebrow">
              <span className="text-accent">02</span>
              <span className="w-8 h-[1px] bg-text-dim/40" />
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="t-h2 font-[family-name:var(--font-display)] font-semibold"
          >
            {titleMain}{" "}
            <span className="text-text-muted">{titleHighlight}</span>
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="t-body-lg text-text-muted max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* ── Cards services ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const accentVar =
              service.accent === "accent-2" ? "var(--color-accent-2)" : "var(--color-accent)";
            const accentHex =
              service.accent === "accent-2" ? "#6366f1" : "#f0ebe0";

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="
                  relative flex flex-col
                  bg-bg-card border border-border rounded-3xl
                  p-7 sm:p-9
                  overflow-hidden
                  transition-colors
                  hover:border-border-strong
                "
              >
                {/* Liseré accent en haut */}
                <div
                  className="absolute top-0 left-7 right-7 h-[2px] rounded-full opacity-60"
                  style={{ background: accentVar }}
                />

                {/* Halo discret */}
                <div
                  className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                  style={{ background: `${accentHex}10` }}
                />

                {/* En-tête card : icône + numéro */}
                <div className="relative flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${accentHex}1a` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: accentVar }}
                    />
                  </div>
                  <span className="t-mono-sm text-text-dim">
                    0{i + 1}
                  </span>
                </div>

                {/* Titre + sous-titre */}
                <h3 className="t-h3 font-[family-name:var(--font-display)] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="t-mono-sm text-text-dim mb-5">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="t-body text-text-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Livrables */}
                <div className="border-t border-border/60 pt-6 mb-8">
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: `${accentHex}1a` }}
                        >
                          <Check
                            className="w-2.5 h-2.5"
                            style={{ color: accentVar }}
                            strokeWidth={3}
                          />
                        </span>
                        <span className="t-body text-text/90 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prix + durée */}
                <div className="mt-auto flex items-end justify-between border-t border-border/60 pt-6 mb-6">
                  <div>
                    <div className="t-mono-sm text-text-dim uppercase mb-1">
                      Tarif
                    </div>
                    <div className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                      {service.price}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="t-mono-sm text-text-dim uppercase mb-1">
                      Délai
                    </div>
                    <div className="t-body text-text-muted">
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={service.ctaHref}
                  className="
                    inline-flex items-center justify-between
                    w-full px-5 py-3.5 rounded-2xl
                    bg-bg-elevated border border-border
                    hover:border-border-strong hover:bg-bg-card
                    transition-colors
                    group
                  "
                >
                  <span className="font-medium text-sm">
                    {service.ctaText}
                  </span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ background: `${accentHex}1a` }}
                  >
                    <ArrowUpRight
                      className="w-3.5 h-3.5"
                      style={{ color: accentVar }}
                    />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* ── Note de bas de section ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center t-mono-sm text-text-dim mt-12"
        >
          ✦ Devis gratuit sous 48h — sans engagement
        </motion.p>
      </div>
    </section>
  );
}