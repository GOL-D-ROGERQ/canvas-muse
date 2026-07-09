"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5F0] pt-24">

      {/* Background Blur */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-40"></div>

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-100 blur-3xl opacity-40"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[0.35em] text-stone-500">
              Fine Art Collection
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight md:text-7xl">
              Every
              <span className="text-amber-700"> Brushstroke </span>
              Tells
              <br />
              A Story.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
              Discover original paintings inspired by nature,
              imagination and emotion. Designed to transform
              ordinary spaces into timeless experiences.
            </p>

            <div className="mt-10 flex gap-5">

              <Link
                href="/gallery"
                className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105"
              >
                Explore Gallery
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
              >
                Learn More
              </Link>

            </div>

          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900"
              alt="Painting"
              className="h-[650px] w-full rounded-[40px] object-cover shadow-2xl"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}