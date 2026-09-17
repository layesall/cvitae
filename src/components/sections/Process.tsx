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
        <div className="flex flex-col gap-6 mb-16 lg:mb-20 max-w-3xl">
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

        {/* ── Timeline des étapes ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-10 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            const isLast = i === steps.length - 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                {/* ── Numéro géant + ligne horizontale ── */}
                <div className="flex items-center gap-5 mb-10">
                  <span
                    className="
                      font-[family-name:var(--font-display)]
                      text-[3.25rem] lg:text-[2.75rem]
                      font-semibold leading-none tracking-[-0.04em]
                      text-accent
                    "
                  >
                    {step.number}
                  </span>
                  {!isLast && (
                    <div
                      className="
                        hidden lg:block flex-1 h-px
                        bg-gradient-to-r
                        from-border-strong
                        via-border-strong/50
                        to-transparent
                      "
                    />
                  )}
                </div>

                {/* ── Icône ── */}
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-bg-card border border-border-strong
                    flex items-center justify-center
                    mb-7
                  "
                >
                  <Icon
                    className="w-6 h-6 text-text"
                    strokeWidth={1.6}
                  />
                </div>

                {/* ── Titre ── */}
                <h3 className="t-h3 font-[family-name:var(--font-display)] font-semibold mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* ── Badge durée ── */}
                <span
                  className="
                    inline-flex items-center gap-2 w-fit
                    px-3 py-1.5 mb-5
                    rounded-full
                    bg-accent/[0.08]
                    border border-accent/20
                    font-[family-name:var(--font-mono)]
                    text-[11px] font-medium tracking-[0.12em]
                    text-accent uppercase
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {step.duration}
                </span>

                {/* ── Description ── */}
                <p className="t-body text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Note de bas de section ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
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