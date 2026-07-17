"use client";

import { motion } from "framer-motion";
import { Server, Code, Cloud } from "lucide-react";
import { StatItem } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Code,
  Cloud,
};

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="flex flex-wrap justify-center lg:justify-center gap-3 sm:gap-4">
      {stats.map((stat, i) => {
        const Icon = iconMap[stat.icon];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
            className="min-w-0 text-center lg:text-center"
          >
            {/* Icône */}
            <div className="flex justify-center mb-0.5">
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-muted" />
            </div>
            {/* Value */}
            <div className="font-[family-name:var(--font-display)] text-[11px] font-semibold truncate">
              {stat.value}
            </div>
            {/* Label */}
            <div className="text-[8px] sm:text-[9px] text-text-dim uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}