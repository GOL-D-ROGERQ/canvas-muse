"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArtworkLightbox from "./ArtworkLightbox";

import { paintings } from "@/data/paintings";

const filters = [
  "All",
  ...new Set(paintings.map((painting) => painting.category)),
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const [selected, setSelected] = useState<
    (typeof paintings)[0] | null
  >(null);

  const filtered = useMemo(() => {
    if (active === "All") return paintings;

    return paintings.filter(
      (painting) => painting.category === active
    );
  }, [active]);

  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Filters */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-3 transition-all duration-300 ${
                active === filter
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-stone-700 shadow hover:bg-stone-200 hover:shadow-md"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((painting) => (
              <motion.button
                key={painting.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                onClick={() => setSelected(painting)}
                className="group text-left"
              >
                <div
                  className="relative h-[480px] overflow-hidden rounded-[28px] shadow-xl"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    draggable={false}
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    className="select-none object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Repeating Watermark */}
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                    <div className="absolute -left-40 -top-40 rotate-[-30deg]">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div
                          key={i}
                          className="mb-14 flex gap-24 whitespace-nowrap"
                          style={{
                            marginLeft:
                              i % 2 === 0 ? "0px" : "120px",
                          }}
                        >
                          {Array.from({ length: 8 }).map((_, j) => (
                            <Image
                              key={j}
                              src="/watermark.png"
                              alt="Watermark"
                              width={150}
                              height={55}
                              draggable={false}
                              className="select-none opacity-15"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Details */}
                  <div className="absolute bottom-8 left-8 z-20 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                      {painting.medium}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      {painting.title}
                    </h3>

                    <p className="mt-2 text-white/80">
                      {painting.year}
                    </p>

                    <p className="mt-5 text-sm uppercase tracking-[0.3em] text-amber-300">
                      Click to View →
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <ArtworkLightbox
          artwork={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
}