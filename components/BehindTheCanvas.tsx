"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const process = [
  {
    title: "Inspiration",
    description:
      "Every artwork begins with a moment, a memory, or a feeling waiting to be transformed into color.",
    image: "/process/inspiration.jpg",
  },
  {
    title: "Materials",
    description:
      "Acrylics, watercolors, graphite, brushes, and textured canvases form the foundation of every creation.",
    image: "/process/materials.jpg",
  },
  {
    title: "Creative Process",
    description:
      "Layer by layer, each brushstroke builds depth, emotion, and personality into the artwork.",
    image: "/process/process.jpg",
  },
  {
    title: "Final Touch",
    description:
      "The smallest details often become the most meaningful, bringing every painting to life.",
    image: "/process/final.jpg",
  },
];

export default function BehindTheCanvas() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-stone-500">
            Behind The Canvas
          </p>

          <h2 className="mt-6 text-5xl font-bold text-stone-900 md:text-6xl">
            Every Painting
            <span className="block text-amber-700">
              Begins With A Story
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
            Every artwork starts long before the first brushstroke.
            Explore the inspiration, tools, and creative journey behind each piece.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden rounded-3xl bg-[#F8F5F0] shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <blockquote className="mx-auto max-w-4xl text-3xl font-light italic leading-relaxed text-stone-700 md:text-4xl">
            "Every canvas begins as a blank space, but every brushstroke
            carries a piece of the artist's heart."
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}