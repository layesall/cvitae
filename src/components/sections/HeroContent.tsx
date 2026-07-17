"use client";

import { motion } from "framer-motion";
import { HomeData } from "@/types";

interface HeroContentProps {
  data: Pick<HomeData, "title">;
}

export default function HeroContent({ data }: HeroContentProps) {
  const { title } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex flex-col items-center lg:items-center"
    >
      <h1 className="font-[family-name:var(--font-display)] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight mb-1 sm:mb-2 break-words text-center">
        {title.main}{" "}
        <span className="text-text-muted"><br />{title.highlight}</span>
      </h1>
    </motion.div>
  );
}