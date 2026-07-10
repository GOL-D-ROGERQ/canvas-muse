"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ImageViewerProps {
  image: string;
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function ImageViewer({
  image,
  title,
  open,
  onClose,
}: ImageViewerProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95vw] max-w-6xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-white px-4 py-2 font-semibold text-black shadow-lg hover:bg-gray-200"
            >
              ✕
            </button>

            <div className="relative h-[85vh] w-full">
              <Image
                src={image}
                alt={title}
                fill
                draggable={false}
                className="object-contain rounded-xl"
              />
            </div>

            <h2 className="mt-5 text-center text-3xl font-bold text-white">
              {title}
            </h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}