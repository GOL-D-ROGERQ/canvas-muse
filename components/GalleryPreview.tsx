"use client";

import Link from "next/link";
import Image from "next/image";

const paintings = [
  {
    id: 1,
    title: "The Peek of Serenity",
    image: "/paintings/eye.jpeg",
  },
  {
    id: 2,
    title: "The Dance of Bloom",
    image: "/paintings/dance.jpeg",
  },
  {
    id: 3,
    title: "Ocean Dreams",
    image: "/paintings/woter.jpeg",
  },
  {
    id: 4,
    title: "Classical Dance",
    image: "/paintings/ballet.jpeg",
  },
  {
    id: 5,
    title: "Forest Birdie",
    image: "/paintings/birdie.jpeg",
  },
  {
    id: 6,
    title: "Heavenly Horizon",
    image: "/paintings/from heaven.jpeg",
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
            className="group overflow-hidden rounded-3xl bg-stone-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={painting.image}
                alt={painting.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-600">
                {painting.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}