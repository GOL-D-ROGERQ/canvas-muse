"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

setEnabled(true);
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a, button, img, [role='button'], input, textarea"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);
  if (!enabled) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          width: hovering ? 60 : 40,
          height: hovering ? 60 : 40,
          opacity: hovering ? 0.8 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 28,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] rounded-full border border-amber-500"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: hovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-2.5 w-2.5 rounded-full bg-amber-600"
      />
    </>
  );
}