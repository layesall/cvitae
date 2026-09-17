"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQItem } from "@/types";

interface FAQProps {
  eyebrow: string;
  titleMain: string;
  titleHighlight: string;
  subtitle: string;
  items: FAQItem[];
}

export default function FAQ({
  eyebrow,
  titleMain,
  titleHighlight,
  subtitle,
  items,
}: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative section-pad border-t border-border/60"
    >
      <div className="container-page">

        {/* ── Layout : en-tête à gauche, accordéon à droite ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 lg:gap-20">

          {/* ── Colonne gauche : titre sticky ── */}
          <div className="lg:sticky lg:top-28 lg:self-start flex flex-col gap-6 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="section-eyebrow">
                <span className="text-accent">05</span>
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
              className="t-body-lg text-text-muted"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* ── Colonne droite : accordéon ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            {items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`
                    group relative
                    bg-bg-card border rounded-2xl
                    transition-colors duration-300
                    ${isOpen ? "border-border-strong" : "border-border hover:border-border-strong"}
                  `}
                >
                  {/* Question cliquable */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="
                      w-full flex items-center justify-between gap-6
                      px-5 sm:px-6 py-5
                      text-left
                      focus:outline-none
                    "
                  >
                    <span
                      className={`
                        font-[family-name:var(--font-display)]
                        text-base sm:text-lg font-medium leading-snug
                        transition-colors duration-300
                        ${isOpen ? "text-text" : "text-text/90 group-hover:text-text"}
                      `}
                    >
                      {item.question}
                    </span>

                    {/* Bouton + / × rotatif */}
                    <span
                      className={`
                        relative shrink-0
                        w-8 h-8 rounded-full
                        border transition-all duration-300
                        flex items-center justify-center
                        ${
                          isOpen
                            ? "bg-accent border-accent rotate-45"
                            : "bg-transparent border-border-strong group-hover:border-accent/50"
                        }
                      `}
                      aria-hidden="true"
                    >
                      <Plus
                        className={`
                          w-3.5 h-3.5 transition-colors duration-300
                          ${isOpen ? "text-bg" : "text-text-muted group-hover:text-accent"}
                        `}
                        strokeWidth={2.4}
                      />
                    </span>
                  </button>

                  {/* Réponse dépliable */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0">
                          {/* Fine ligne de séparation */}
                          <div className="h-px bg-border/60 mb-4" />
                          <p className="t-body text-text-muted leading-relaxed max-w-prose">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Note de bas de section ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <span className="t-mono-sm text-text-dim">
            ✦ Une autre question ?
          </span>
          <a
            href="#contact"
            className="
              t-mono-sm text-accent
              hover:underline underline-offset-4
              transition-colors
            "
          >
            Écrivez-moi
          </a>
        </motion.div>
      </div>
    </section>
  );
}