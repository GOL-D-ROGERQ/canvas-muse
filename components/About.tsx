"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#F8F5F0] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT - Artist Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Circle */}
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-amber-100 blur-3xl" />

          <div className="relative h-[650px] overflow-hidden rounded-[36px] shadow-2xl">
            <Image
              src="/artist.jpg" // Replace with your sister's photo
              alt="Manuela Zia"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT - Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2">
            <span className="text-sm font-medium tracking-wider text-stone-700">
              Meet the Artist
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-bold leading-tight text-stone-900">
            Every Painting
            <span className="block text-amber-700">
              Has a Story.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-stone-600">
            Hi, I'm{" "}
            <span className="font-semibold text-stone-900">
              Manuela Zia
            </span>
            , a young artist passionate about transforming emotions into
            visual stories through acrylic and watercolor paintings.
          </p>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            Inspired by nature, memories, and everyday moments, every artwork
            I create reflects a unique feeling. My goal is to capture emotions
            that words often cannot express.
          </p>

          {/* Info Grid */}
          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest text-stone-500">
                Experience
              </h3>

              <p className="mt-2 text-2xl font-semibold">
                2 Years
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest text-stone-500">
                Medium
              </h3>

              <p className="mt-2 text-2xl font-semibold">
                Acrylic
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest text-stone-500">
                Style
              </h3>

              <p className="mt-2 text-2xl font-semibold">
                Contemporary
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest text-stone-500">
                Inspiration
              </h3>

              <p className="mt-2 text-2xl font-semibold">
                Imagination
              </p>
            </div>

          </div>

          {/* Quote */}
          <blockquote className="mt-12 border-l-4 border-amber-700 pl-6 italic text-xl text-stone-700">
            "Art allows me to express what words cannot."
          </blockquote>

          {/* CTA */}
          <Link
            href="/gallery"
            className="mt-12 inline-flex items-center rounded-full bg-black px-8 py-4 text-white transition hover:bg-amber-700"
          >
            View My Collection →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}