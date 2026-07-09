"use client";

import Link from "next/link";
import Image from "next/image";

const paintings = [
  {
    id: 1,
    title: "Golden Horizon",
    image: "/images/gallery1.jpeg",
  },
  {
    id: 2,
    title: "Silent Bloom",
    image: "/images/gallery2.jpeg",
  },
  {
    id: 3,
    title: "Ocean Dreams",
    image: "/images/gallery3.jpeg",
  },
  {
    id: 4,
    title: "Morning Light",
    image: "/images/gallery4.jpeg",
  },
  {
    id: 5,
    title: "Forest Echo",
    image: "/images/gallery5.jpeg",
  },
  {
    id: 6,
    title: "Crimson Sky",
    image: "/images/gallery6.jpeg",
  },
];

export default function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-24">

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {paintings.map((painting) => (

          <Link
            key={painting.id}
            href={`/gallery/${painting.id}`}
            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2"
          >

            <div className="relative h-80 overflow-hidden">

              <Image
                src={painting.image}
                alt={painting.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-6">

              <h2 className="text-2xl font-semibold">
                {painting.title}
              </h2>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}