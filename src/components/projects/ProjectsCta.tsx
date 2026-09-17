"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectsCtaProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export default function ProjectsCta({
  title,
  subtitle,
  buttonText,
  buttonHref,
}: ProjectsCtaProps) {
  return (
    <section className="relative section-pad border-t border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/60 to-bg" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px]" />

      <div className="relative container-page flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="
            font-[family-name:var(--font-display)]
            font-semibold tracking-[-0.035em] leading-[0.98]
            text-[clamp(2rem,5vw+0.5rem,3.75rem)]
          "
        >
          {title}
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

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={buttonHref}
            className="
              group inline-flex items-center gap-3
              px-7 py-4 rounded-full
              bg-accent text-bg
              font-semibold text-sm tracking-tight
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_20px_60px_-15px_rgba(240,235,224,0.45)]
            "
          >
            {buttonText}
            <span
              className="
                w-7 h-7 rounded-full bg-bg/10
                flex items-center justify-center
                transition-transform duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}