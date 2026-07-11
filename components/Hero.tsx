"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F8F5F0] pt-32">
      {/* Background Blurs */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-stone-300 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="mr-2 text-lg">🎨</span>

              <span className="text-sm font-medium tracking-wide text-stone-700">
                
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-bold leading-tight text-stone-900 md:text-7xl">
              Art That
              <span className="block text-amber-700">
                Tells Stories
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
              Hi, I'm{" "}
              <span className="font-semibold text-stone-900">
                MANUELA ZIA
              </span>
              , a young artist passionate about expressing emotions through
              acrylic and watercolor paintings. Every artwork reflects a story
              inspired by nature, imagination, and everyday life.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-amber-700"
              >
                Explore Gallery
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-stone-800 px-8 py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white"
              >
                Meet the Artist
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 flex gap-10">
              <div>
                <h3 className="text-3xl font-bold text-stone-900">35+</h3>
                <p className="mt-1 text-sm text-stone-500">Artworks</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-stone-900">4</h3>
                <p className="mt-1 text-sm text-stone-500">Collections</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-stone-900">3</h3>
                <p className="mt-1 text-sm text-stone-500">Mediums</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Decorative Ring */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-amber-300/40" />

            {/* Image Container */}
            <div className="relative h-[650px] rounded-[36px] border border-white/60 shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
              {/* Clip only the image */}
              <div className="relative h-full overflow-hidden rounded-[36px]">
                <Image
                  src="/paintings/from heaven.jpeg"
                  alt="Featured Artwork"
                  fill
                  priority
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="object-cover transition-transform duration-700 hover:scale-105 select-none"
                />
              </div>

              {/* Floating Card */}
              {/* Floating Text */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="absolute bottom-10 right-10 z-20 text-right"
>
  <p className="text-xs uppercase tracking-[0.4em] text-white/80 drop-shadow-lg">
    Original Painting
  </p>

  <h3 className="mt-2 text-3xl font-semibold text-white drop-shadow-xl">
    From Heaven
  </h3>

  <p className="mt-1 text-white/90 drop-shadow-lg">
    Acrylic on Canvas
  </p>
</motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}