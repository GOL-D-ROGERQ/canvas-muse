"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  distance = 60,
  direction = "up",
}: RevealProps) {
  const initial = {
    opacity: 0,
    x:
      direction === "left"
        ? distance
        : direction === "right"
        ? -distance
        : 0,
    y:
      direction === "up"
        ? distance
        : direction === "down"
        ? -distance
        : 0,
    scale: 0.97,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}