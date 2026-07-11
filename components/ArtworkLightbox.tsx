"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Artwork {
  title: string;
  image: string;
  medium: string;
  year: string;
}

interface Props {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function ArtworkLightbox({
  artwork,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-4xl text-white transition hover:rotate-90"
            >
              ×
            </button>

            <div className="relative h-[75vh] overflow-hidden rounded-3xl">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-6 text-center text-white">
              <h2 className="text-4xl font-bold">
                {artwork.title}
              </h2>

              <p className="mt-2 text-lg text-gray-300">
                {artwork.medium} • {artwork.year}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}