"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-amber-600"
      />

      {/* Soft Glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9998] h-2 w-full origin-left bg-amber-400 blur-md opacity-60"
      />
    </>
  );
}