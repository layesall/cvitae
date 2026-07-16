"use client";

import { motion } from "framer-motion";
import { HomeData } from "@/types";

interface HeroContentProps {
  data: Pick<HomeData, "title" | "description">;
}

export default function HeroContent({ data }: HeroContentProps) {
  const { title, description } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex flex-col items-center lg:items-start"
    >
      <h1 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-2 sm:mb-3 break-words text-center lg:text-left">
        {title.main}{" "}
        <span className="text-text-muted">{title.highlight}</span>
      </h1>
      <p className="text-text-muted text-xs sm:text-sm md:text-base leading-relaxed max-w-lg break-words text-center lg:text-left">
        {description}
      </p>
    </motion.div>
  );
}