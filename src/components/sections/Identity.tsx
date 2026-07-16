"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { HomeData } from "@/types";

interface IdentityProps {
  data: Pick<HomeData, "badge" | "identity">;
}

export default function Identity({ data }: IdentityProps) {
  const { badge, identity } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col items-center lg:items-start gap-2 sm:gap-3"
    >
      <Badge variant={badge.variant}>{badge.text}</Badge>
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-center lg:text-left">
        {identity.name}
      </h2>
    </motion.div>
  );
}