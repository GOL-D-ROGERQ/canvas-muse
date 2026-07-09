"use client";

import { motion } from "framer-motion";

const paintings = [
  {
    title: "Golden Horizon",
    category: "Landscape",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900",
  },
  {
    title: "Silent Bloom",
    category: "Abstract",
    image:
      "https://images.unsplash.com/photo-1578301979108-0d5d3d57f47b?w=900",
  },
  {
    title: "Ocean Dreams",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900",
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
              key={painting.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] bg-[#F8F5F0] shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={painting.image}
                  alt={painting.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <p className="uppercase tracking-[0.25em] text-stone-500">
                  {painting.category}
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  {painting.title}
                </h3>

                <button className="mt-6 rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white">
                  View Artwork
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}