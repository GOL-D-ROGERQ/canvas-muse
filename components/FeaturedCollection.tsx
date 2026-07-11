"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArtworkLightbox from "./ArtworkLightbox";

import { paintings } from "@/data/paintings";

export default function FeaturedCollection() {
  const [selectedArtwork, setSelectedArtwork] = useState<
    (typeof paintings)[0] | null
  >(null);

  return (
    <section className="bg-[#F8F5F0] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.4em] text-stone-500">
            Featured Collection
          </p>

          <h2 className="mt-6 text-5xl font-bold text-stone-900 md:text-6xl">
            Curated Works
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
            A selection of paintings inspired by emotion, nature, and
            imagination. Each piece reflects a different story waiting to be
            discovered.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {paintings.map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <button
                onClick={() => setSelectedArtwork(painting)}
                className="group block w-full text-left"
              >
                <div className="relative overflow-hidden rounded-[32px] shadow-xl">
                  <div
                    className={
                      index === 0
                        ? "relative h-[650px]"
                        : "relative h-[420px]"
                    }
                  >
                    <Image
                      src={painting.image}
                      alt={painting.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* Text */}
                    <div className="absolute bottom-8 left-8 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                        {painting.medium}
                      </p>

                      <h3 className="mt-2 text-3xl font-semibold text-white">
                        {painting.title}
                      </h3>

                      <p className="mt-2 text-white/80">
                        {painting.year}
                      </p>

                      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-amber-300">
                        Click to View →
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center text-lg font-medium text-stone-700 transition hover:text-amber-700"
          >
            View Full Gallery →
          </Link>
        </motion.div>
      </div>

      <ArtworkLightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}