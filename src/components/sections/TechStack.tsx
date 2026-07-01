"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          tag="Technologies"
          title="Stack technique"
          description="Les outils que j'utilise au quotidien"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-bg-card border border-border px-5 py-2.5 rounded-lg text-sm font-medium text-text-muted hover:border-white/20 hover:text-text hover:-translate-y-0.5 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}