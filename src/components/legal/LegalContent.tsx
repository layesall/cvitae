"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LegalSection } from "@/types";

interface LegalContentProps {
  sections: LegalSection[];
}

export default function LegalContent({ sections }: LegalContentProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  // Scroll-spy basique
  useEffect(() => {
    const handler = () => {
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return el
          ? { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 120) }
          : { id: s.id, top: Infinity };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActiveId(offsets[0].id);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  return (
    <section className="relative section-pad">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">

          {/* ── TOC sticky ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <span className="t-mono-sm text-text-dim uppercase tracking-[0.15em] block mb-4">
                Sommaire
              </span>
              <nav>
                <ul className="flex flex-col gap-2">
                  {sections.map((section, i) => {
                    const isActive = activeId === section.id;
                    return (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`
                            flex items-start gap-3 py-1.5
                            transition-colors duration-200
                            ${isActive ? "text-text" : "text-text-dim hover:text-text-muted"}
                          `}
                        >
                          <span
                            className={`
                              t-mono-sm tabular-nums pt-0.5
                              transition-colors duration-200
                              ${isActive ? "text-accent" : "text-text-dim"}
                            `}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="t-body leading-snug">
                            {section.title}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* ── Sections ── */}
          <div className="flex flex-col gap-16 lg:gap-20">
            {sections.map((section, i) => (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                {/* Numéro + titre */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="t-mono-sm text-accent tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="
                      font-[family-name:var(--font-display)]
                      font-semibold tracking-[-0.02em]
                      text-[clamp(1.35rem,1.5vw+1rem,1.75rem)]
                      leading-tight
                    "
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-3 pl-0 sm:pl-10">
                  {section.items.map((item) => (
                    <p
                      key={item.id}
                      className="t-body text-text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}