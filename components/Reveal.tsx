"use client";

import { ReactNode, Children } from "react";
import { motion, Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
 duration?: number;
  distance?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  distance = 60,
  stagger = 0.12,
  direction = "up",
  once = true,
}: RevealProps) {
  const x =
    direction === "left"
      ? distance
      : direction === "right"
      ? -distance
      : 0;

  const y =
    direction === "up"
      ? distance
      : direction === "down"
      ? -distance
      : 0;

  const container: Variants = {
    hidden: {},

    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: 0.96,
      filter: "blur(10px)",
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
    >
      {Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={item}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}