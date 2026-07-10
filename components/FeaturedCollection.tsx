"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const paintings = [
  {
    id: 1,
    title: "The Peek of Serenity",
    category: "Portrait",
    image: "/paintings/eye.jpeg",
  },
  {
    id: 2,
    title: "The Dance of Bloom",
    category: "Classical Art",
    image: "/paintings/dance.jpeg",
  },
  {
    id: 6,
    title: "Heavenly Horizon",
    category: "Fantasy",
    image: "/paintings/from heaven.jpeg",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.35em] text-stone-500">
            Featured Collection
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Curated Masterpieces
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
            Explore a carefully selected collection of paintings that blend
            creativity, emotion, and timeless beauty.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paintings.map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/gallery/${painting.id}`}
                className="group block overflow-hidden rounded-[30px] bg-[#F8F5F0] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <p className="uppercase tracking-[0.25em] text-stone-500">
                    {painting.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-600">
                    {painting.title}
                  </h3>

                  <div className="mt-6 inline-block rounded-full border border-black px-6 py-3 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    View Artwork
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}