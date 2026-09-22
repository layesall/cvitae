"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  Code2,
  Rocket,
} from "lucide-react";
import { ProcessStep } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  FileText,
  Code2,
  Rocket,
};

interface ProcessProps {
  eyebrow: string;
  titleMain: string;
  titleHighlight: string;
  subtitle: string;
  steps: ProcessStep[];
}

export default function Process({
  eyebrow,
  titleMain,
  titleHighlight,
  subtitle,
  steps,
}: ProcessProps) {
  return (
    <section
      id="process"
      className="relative section-pad border-t border-border/60"
    >
      <div className="container-page">

        {/* ── En-tête de section ── */}
        <div className="flex flex-col gap-6 mb-16 lg:mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-eyebrow">
              <span className="text-accent">03</span>
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

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="t-body-lg text-text-muted max-w-xl"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Ligne connectrice — desktop (horizontale, centre des nœuds) */}
          <div
            aria-hidden
            className="
              hidden lg:block
              absolute top-[22px] left-0 right-0
              h-px
              bg-gradient-to-r
              from-border-strong/30
              via-border-strong/60
              to-border-strong/30
              pointer-events-none
            "
          />

          {/* Ligne connectrice — mobile (verticale) */}
          <div
            aria-hidden
            className="
              lg:hidden
              absolute left-[19px] top-4 bottom-4
              w-px
              bg-gradient-to-b
              from-border-strong/60
              via-border-strong/40
              to-border-strong/20
              pointer-events-none
            "
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="
                    relative flex gap-5
                    lg:flex-col lg:gap-0
                    lg:h-full
                  "
                >
                  {/* ── Nœud ──
                      Mobile : à gauche, sur la ligne verticale
                      Desktop : à cheval sur le bord supérieur de la card
                  */}
                  <div className="shrink-0 lg:absolute lg:top-0 lg:left-5 lg:z-10">
                    <div
                      className="
                        relative
                        w-10 h-10 rounded-full
                        bg-accent text-bg
                        flex items-center justify-center
                        font-[family-name:var(--font-display)]
                        text-[12px] font-bold tracking-wide
                        ring-4 ring-bg
                        shadow-[0_0_20px_-4px_rgba(240,235,224,0.3)]
                      "
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* ── Carte ──
                      Desktop : flex-col + h-full pour égaliser la hauteur
                      La description prend tout l'espace restant (flex-1)
                  */}
                  <div
                    className="
                      flex flex-col flex-1 min-w-0
                      lg:w-full lg:h-full
                      bg-bg-card/60
                      border border-border
                      rounded-2xl
                      p-5 lg:pt-10
                      transition-colors duration-300
                      hover:border-border-strong hover:bg-bg-card
                    "
                  >
                    {/* Header : icône + badge durée */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className="
                          w-9 h-9 rounded-xl shrink-0
                          bg-bg-elevated border border-border
                          flex items-center justify-center
                        "
                      >
                        <Icon
                          className="w-[18px] h-[18px] text-text-muted"
                          strokeWidth={1.6}
                        />
                      </div>

                      <span
                        className="
                          inline-flex items-center gap-1.5
                          px-2.5 py-1 rounded-full
                          bg-accent/[0.08]
                          border border-accent/20
                          font-[family-name:var(--font-mono)]
                          text-[10px] font-medium tracking-[0.1em]
                          text-accent uppercase
                          whitespace-nowrap
                        "
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {step.duration}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3
                      className="
                        font-[family-name:var(--font-display)]
                        text-[17px] font-semibold leading-tight
                        tracking-[-0.01em]
                        mb-2.5
                      "
                    >
                      {step.title}
                    </h3>

                    {/* Description — flex-1 pour pousser vers le bas si besoin */}
                    <p className="t-body text-text-muted leading-relaxed text-[13.5px] flex-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Note de bas de section ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 lg:mt-20 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          <span className="t-mono-sm text-text-dim">
            ✦ Zéro engagement
          </span>
          <span className="t-mono-sm text-text-dim">
            ✦ Zéro surprise
          </span>
          <span className="t-mono-sm text-text-dim">
            ✦ Zéro jargon
          </span>
        </motion.div>
      </div>
    </section>
  );
}