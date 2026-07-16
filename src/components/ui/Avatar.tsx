"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 100 }: AvatarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="rounded-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500 border-2 border-border"
        sizes="120px"
      />
    </motion.div>
  );
}