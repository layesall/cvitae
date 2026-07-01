"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-3">
        {tag}
      </span>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted text-lg max-w-lg mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}