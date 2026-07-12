"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageViewerProps {
  image: string;
  title: string;
  open: boolean;
  onClose: () => void;

  onNext?: () => void;
  onPrevious?: () => void;

  hasNext?: boolean;
  hasPrevious?: boolean;
}

export default function ImageViewer({
  image,
  title,
  open,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ImageViewerProps){
  const [zoom, setZoom] = useState(1);

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

  useEffect(() => {
    if (!open) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      setZoom((prev) => {
        const next = prev - e.deltaY * 0.0015;
        return Math.min(4, Math.max(1, next));
      });
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [open]);

  useEffect(() => {
    if (!open) setZoom(1);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[96vw] h-[92vh]"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 rounded-full bg-white px-4 py-2 text-lg font-bold shadow-xl hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Zoom Controls */}
            <div className="absolute left-6 top-6 z-50 flex gap-3">
              <button
                onClick={() =>
                  setZoom((z) => Math.max(1, z - 0.25))
                }
                className="rounded-full bg-white px-4 py-2 text-xl font-bold shadow-lg hover:bg-gray-200"
              >
                −
              </button>

              <button
                onClick={() =>
                  setZoom((z) => Math.min(4, z + 0.25))
                }
                className="rounded-full bg-white px-4 py-2 text-xl font-bold shadow-lg hover:bg-gray-200"
              >
                +
              </button>

              <button
                onClick={() => setZoom(1)}
                className="rounded-full bg-white px-5 py-2 shadow-lg hover:bg-gray-200"
              >
                Reset
              </button>
            </div>

            {/* Image */}
            <div className="flex h-full items-center justify-center overflow-hidden rounded-3xl">
              <motion.div
                drag={zoom > 1}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                animate={{
                  scale: zoom,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                }}
                onDoubleClick={() =>
                  setZoom((z) => (z === 1 ? 2.5 : 1))
                }
                className="relative h-[85vh] w-full cursor-grab"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  draggable={false}
                  className="object-contain select-none"
                />
              </motion.div>
            </div>
            {/* Previous */}
{hasPrevious && (
  <button
    onClick={onPrevious}
    className="absolute left-8 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-white/20 text-3xl text-white backdrop-blur transition hover:bg-white/40"
  >
    ←
  </button>
)}

{/* Next */}
{hasNext && (
  <button
    onClick={onNext}
    className="absolute right-8 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-white/20 text-3xl text-white backdrop-blur transition hover:bg-white/40"
  >
    →
  </button>
)}

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-8 py-3 backdrop-blur-md">
              <h2 className="text-lg font-semibold text-white">
                {title}
              </h2>

              <p className="mt-1 text-center text-sm text-white/70">
                Scroll to zoom • Drag to move • Double-click to zoom
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}