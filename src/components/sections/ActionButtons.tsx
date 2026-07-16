"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { HomeData } from "@/types";

interface ActionButtonsProps {
  data: HomeData["actions"];
}

export default function ActionButtons({ data }: ActionButtonsProps) {
  const { primary, secondary } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-row gap-2 sm:gap-3 whitespace-nowrap justify-center lg:justify-start"
    >
      <Button
        href={primary.href}
        variant={primary.variant}
        icon={primary.icon}
        target="_blank"
        className="text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5"
      >
        {primary.text}
      </Button>
      <Link href={secondary.href}>
        <Button 
          variant={secondary.variant}
          className="text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5"
        >
          {secondary.text}
        </Button>
      </Link>
    </motion.div>
  );
}