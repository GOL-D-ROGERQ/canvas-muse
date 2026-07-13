"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ReactNode,
  useRef,
} from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  disabled?: boolean;
}

export default function Magnetic({
  children,
  className = "",
  strength = 35,
  disabled = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 20,
    mass: 0.5,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (disabled || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX =
      e.clientX - rect.left - rect.width / 2;

    const mouseY =
      e.clientY - rect.top - rect.height / 2;

    x.set((mouseX / rect.width) * strength);
    y.set((mouseY / rect.height) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: springX,
        y: springY,
      }}
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}