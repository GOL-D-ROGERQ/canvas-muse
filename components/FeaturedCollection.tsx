"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Reveal from "@/components/Reveal";
import { paintings } from "@/data/paintings";

export default function FeaturedCollection() {
  const featured = paintings.slice(0, 3);

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-20 text-center">
          <p className="uppercase tracking-[0.35em] text-amber-600">
            Featured Collection
          </p>

          <h2 className="mt-4 text-5xl font-bold text-stone-900">
            Curated Masterpieces
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            A selection of original artworks inspired by imagination,
            emotion, nature, and timeless beauty.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((painting, index) => (
            <Reveal
              key={painting.id}
              delay={index * 0.15}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group h-full"
              >
                <Link href={`/gallery/${painting.id}`}>
                  <div className="overflow-hidden rounded-[30px] bg-white shadow-xl transition duration-300 hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-[430px] overflow-hidden">
                      <Image
                        src={painting.image}
                        alt={painting.title}
                        fill
                        draggable={false}
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                      {/* Hover Text */}
                      <div className="absolute bottom-8 left-8 z-20 opacity-0 transition duration-500 group-hover:opacity-100">
                        <p className="text-xs uppercase tracking-[0.35em] text-white/80">
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

                    {/* Bottom */}
                    <div className="p-8">
                      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                        {painting.medium}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold text-stone-900 transition group-hover:text-amber-700">
                        {painting.title}
                      </h3>

                      <p className="mt-3 text-stone-500">
                        {painting.year}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Button */}
        <Reveal delay={0.4} className="mt-20 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-full bg-black px-10 py-4 text-lg font-medium text-white transition duration-300 hover:scale-105 hover:bg-amber-700"
          >
            View Complete Gallery
          </Link>
        </Reveal>
      </div>
    </section>
  );
}