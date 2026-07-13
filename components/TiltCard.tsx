"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function TiltCard({
  children,
  className = "",
  strength = 18,
}: TiltCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [strength, -strength]),
    {
      stiffness: 220,
      damping: 25,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-strength, strength]),
    {
      stiffness: 220,
      damping: 25,
    }
  );

  const glowX = useSpring(mouseX, {
    stiffness: 250,
    damping: 30,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 250,
    damping: 30,
  });

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 22,
      }}
      className={`relative ${className}`}
    >
      {/* Cursor Glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute h-48 w-48 rounded-full bg-white/20 blur-3xl"
      />

      {children}
    </motion.div>
  );
}