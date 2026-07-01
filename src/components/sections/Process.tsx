"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Comment ça marche"
          title="Mon processus de travail"
          description="Une méthodologie claire pour des livrables de qualité"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full border-2 border-border bg-bg-card flex items-center justify-center mx-auto mb-5">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-text-muted">
                  {step.number}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}