"use client";

import { motion } from "framer-motion";
import { StatItem } from "@/types";

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
          className="min-w-0 text-center lg:text-left"
        >
          <div className="font-[family-name:var(--font-display)] text-xs sm:text-sm font-semibold truncate">
            {stat.value}
          </div>
          <div className="text-[9px] sm:text-[10px] text-text-dim uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}