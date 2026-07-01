"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE FIRST */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-start order-1 lg:order-none"
        >
          <div className="relative w-[450px] aspect-[4/5]">
            <Image
              src="/images/meprofile.png"
              alt="Layesall — Développeur produits web"
              fill
              priority
              className="rounded-2xl object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="success" className="mb-6">
            Bruxelles • Freelance disponible
          </Badge>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Produit web. SaaS. Shopify.{" "}
            <span className="text-text-muted">
              De l'idée au produit
            </span>
          </h1>

          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-md">
            Je vous accompagne dans la création de produits digitaux simples, rapides et utiles.
          </p>

          <div className="flex gap-8 mb-10 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {stat.value}
                </div>

                <div className="text-xs text-text-dim uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="#contact" variant="primary" icon>
              Parler de votre projet
            </Button>

            <Button href="#projets" variant="secondary">
              Voir les projets récents
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}