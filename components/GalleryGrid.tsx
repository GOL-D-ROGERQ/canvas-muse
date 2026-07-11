"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArtworkLightbox from "./ArtworkLightbox";

import { paintings } from "@/data/paintings";

const filters = [
  "All",
  "Sketches",
  "Acrylic",
  "Nature",
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<
    (typeof paintings)[0] | null
  >(null);

  const filtered = useMemo(() => {
    if (active === "All") return paintings;
    return paintings.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Filters */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-3 transition ${
                active === filter
                  ? "bg-black text-white"
                  : "bg-white hover:bg-stone-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filtered.map((painting) => (
              <motion.button
                layout
                key={painting.id}
                onClick={() => setSelected(painting)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -8 }}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    draggable={false}
                    className="object-cover select-none transition duration-700 group-hover:scale-110"
                  />

                  {/* Repeating Watermark */}
<div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
  <div className="absolute -left-40 -top-40 rotate-[-30deg]">
    {Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        className="mb-14 flex gap-24 whitespace-nowrap"
        style={{ marginLeft: i % 2 === 0 ? "0px" : "120px" }}
      >
        {Array.from({ length: 8 }).map((_, j) => (
          <Image
            key={j}
            src="/watermark.png"
            alt="Watermark"
            width={150}
            height={55}
            draggable={false}
            className="opacity-15 select-none"
          />
        ))}
      </div>
    ))}
  </div>
</div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Details */}
                  <div className="absolute bottom-8 left-8 opacity-0 transition duration-500 group-hover:opacity-100 z-20">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                      {painting.medium}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      {painting.title}
                    </h3>

                    <p className="mt-2 text-white/80">
                      {painting.year}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <ArtworkLightbox
          artwork={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
}