"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "250+",
    title: "Artworks",
  },
  {
    number: "40+",
    title: "Exhibitions",
  },
  {
    number: "15+",
    title: "Awards",
  },
  {
    number: "100%",
    title: "Happy Clients",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#EFE8DD] py-24">

      <div className="mx-auto max-w-7xl px-8">

        <p className="text-center uppercase tracking-[0.35em] text-amber-600">
          Our Achievements
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Trusted By Art Lovers
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-10 text-center shadow-xl"
            >

              <h3 className="text-5xl font-bold text-amber-600">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg text-stone-600">
                {stat.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}