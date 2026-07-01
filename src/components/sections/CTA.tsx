"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold mb-6 leading-tight"
        >
          Un projet, une idée ou simplement{" "}
          <span className="text-text-muted">
            besoin d'un regard technique ?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Application web, Shopify, optimisation, backend ou accompagnement technique.
          Échangeons simplement autour de votre besoin et voyons
          ensemble la solution la plus adaptée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            href="mailto:ulayesall@gmail.com"
            variant="primary"
            icon
            className="px-8 py-4 text-base"
          >
            Construisons quelque chose d’utile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}