"use client";

import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { FinalCTA as FinalCTAType } from "@/types";
import ContactForm from "@/components/sections/ContactForm";

interface FinalCTAProps {
  data: FinalCTAType;
  avatarSrc: string;
  avatarAlt: string;
}

export default function FinalCTA({ data, avatarSrc, avatarAlt }: FinalCTAProps) {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    titleHighlight,
    subtitle,
    formTitle,
    formSubtitle,
    reassurance,
  } = data;

  return (
    <section
      id="contact"
      className="relative section-pad border-t border-border/60 overflow-hidden"
    >
      {/* ── Grille subtile en arrière-plan ── */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/60 to-bg" />

      {/* ── Halo accent discret ── */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="relative container-page">

        {/* ═══════════════════════════════════════
            PARTIE 1 : Titre signature centré
            ═══════════════════════════════════════ */}
        <div className="flex flex-col items-center text-center gap-10 max-w-4xl mx-auto mb-20 lg:mb-24">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2.5"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            <span className="t-mono-sm text-text-muted uppercase tracking-[0.15em]">
              {eyebrow}
            </span>
          </motion.div>

          {/* Titre géant avec avatar inséré */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="
              font-[family-name:var(--font-display)]
              font-semibold
              text-text
              leading-[0.95]
              tracking-[-0.04em]
              text-[clamp(2.5rem,7vw+0.5rem,6rem)]
            "
          >
            <span className="block">{titleLine1}</span>

            <span className="relative block">
              {titleLine2.replace(titleHighlight, "").trim() && (
                <>
                  {titleLine2.replace(titleHighlight, "").trim()}
                  <span className="inline-block w-2" />
                </>
              )}

              {/* Avatar rond inséré inline */}
              <span
                className="
                  inline-block align-middle
                  -translate-y-[0.08em]
                  w-[0.85em] h-[0.85em]
                  rounded-full overflow-hidden
                  border-2 border-bg
                  ring-1 ring-border-strong
                  mx-[0.05em]
                  relative
                "
              >
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  className="w-full h-full object-cover object-top"
                />
              </span>

              <span className="text-accent">{titleHighlight}</span>
            </span>
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="t-body-lg text-text-muted max-w-xl"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ═══════════════════════════════════════
            PARTIE 2 : 2 colonnes — Pitch + Form
            ═══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">

          {/* ── Colonne gauche : pitch + email + réassurance ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 lg:pr-4 lg:sticky lg:top-28"
          >
            {/* Titre pitch */}
            <div className="flex flex-col gap-3">
              <h3 className="
                font-[family-name:var(--font-display)]
                font-semibold tracking-[-0.02em] leading-tight
                text-[clamp(1.35rem,1.5vw+1rem,1.75rem)]
              ">
                {formTitle}
              </h3>
              <p className="t-body text-text-muted leading-relaxed">
                {formSubtitle}
              </p>
            </div>

            {/* Liste réassurance */}
            <ul className="flex flex-col gap-3 pt-2">
              {reassurance.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-accent/[0.12] border border-accent/25 flex items-center justify-center">
                    <Check
                      className="w-2.5 h-2.5 text-accent"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="t-body text-text/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Colonne droite : formulaire dans une carte ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              relative
              bg-bg-card border border-border rounded-3xl
              p-6 sm:p-8 lg:p-10
              overflow-hidden
            "
          >
            {/* Liseré accent subtil */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}