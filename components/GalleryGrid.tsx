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
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -8 }}
                className="group text-left"
              >
                <div className="relative h-[480px] overflow-hidden rounded-[28px] shadow-xl">

                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-8 left-8 opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="uppercase tracking-[0.3em] text-white/70 text-sm">
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