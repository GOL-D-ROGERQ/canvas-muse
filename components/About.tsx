"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#F8F5F0] py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-8 md:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="uppercase tracking-[0.35em] text-amber-700">
            About The Artist
          </p>

          <h2 className="mt-4 text-5xl font-bold text-stone-900">
            Creating Timeless Art
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            Every painting begins with a story. Inspired by nature,
            emotions, and everyday moments, each artwork is carefully
            crafted to bring warmth and elegance into your space.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            CanvasMuse celebrates creativity through original paintings,
            combining traditional techniques with modern artistic vision.
          </p>

          <button className="mt-10 rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-amber-600">
            Learn More
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="flex h-[500px] items-center justify-center rounded-3xl bg-gradient-to-br from-amber-100 to-stone-200 shadow-2xl">
            <span className="text-2xl font-semibold text-stone-600">
              Artist Portrait
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}