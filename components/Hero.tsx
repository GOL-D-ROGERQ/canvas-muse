"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5F0] pt-24">
      {/* Background Blur */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200 opacity-40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-100 opacity-40 blur-3xl"></div>

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
              Discover original paintings inspired by nature, imagination, and
              emotion. Designed to transform ordinary spaces into timeless
              experiences.
            </p>

            <div className="mt-10 flex gap-5">
              <Link
                href="/gallery"
                className="rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-amber-700"
              >
                Explore Gallery
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-black px-8 py-4 transition-all duration-300 hover:bg-black hover:text-white"
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
            <div className="relative h-[650px] w-full overflow-hidden rounded-[40px] shadow-2xl select-none">
              <Image
                src="/paintings/from heaven.jpeg"
                alt="Heavenly Horizon"
                fill
                priority
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="object-cover transition-transform duration-700 hover:scale-105 select-none"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}