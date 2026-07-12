"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            document.body.style.overflow = "";
            onFinish();
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 35);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F5F0]"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          filter: "blur(12px)",
          transition: {
            duration: 0.8,
          },
        }}
      >
        <div className="w-full max-w-md px-10 text-center">

          {/* Logo */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-6xl font-bold tracking-tight text-stone-900"
          >
            Canvas
            <span className="text-amber-700">
              Muse
            </span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-6 text-stone-500 tracking-[0.25em] uppercase text-sm"
          >
            Creating Stories Through Art
          </motion.p>

          {/* Progress */}

          <div className="mt-16 h-[4px] w-full overflow-hidden rounded-full bg-stone-200">

            <motion.div
              className="h-full rounded-full bg-amber-600"
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "easeOut",
              }}
            />

          </div>

          {/* Percentage */}

          <motion.p
            key={progress}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="mt-5 text-sm tracking-[0.25em] text-stone-500"
          >
            {progress}%
          </motion.p>

          {/* Decorative line */}

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mx-auto mt-10 h-px w-40 bg-stone-300"
          />

        </div>
      </motion.div>
    </AnimatePresence>
  );
}