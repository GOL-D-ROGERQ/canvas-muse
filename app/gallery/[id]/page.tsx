"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ImageViewer from "@/components/ImageViewer";

const paintings = [
  {
    id: "1",
    title: "The Peek of Serenity",
    image: "/paintings/eye.jpeg",
    year: "2025",
    medium: "Oil on Canvas",
    size: "24 × 36 inches",
    description:
      "A single eye peers through the paper, symbolizing mystery, perception, and hidden emotions.",
  },
  {
    id: "2",
    title: "The Dance of Bloom",
    image: "/paintings/dance.jpeg",
    year: "2024",
    medium: "Acrylic",
    size: "20 × 30 inches",
    description:
      "A captivating depiction of Bharatanatyam, showcasing grace, precision, and cultural heritage.",
  },
  {
    id: "3",
    title: "Ocean Dreams",
    image: "/paintings/woter.jpeg",
    year: "2025",
    medium: "Watercolor",
    size: "18 × 24 inches",
    description:
      "Inspired by the endless beauty of the sea and open skies.",
  },
  {
    id: "4",
    title: "Classical Dance",
    image: "/paintings/ballet.jpeg",
    year: "2023",
    medium: "Oil",
    size: "24 × 30 inches",
    description:
      "A classic ballet performance captured in oil.",
  },
  {
    id: "5",
    title: "The Birdie",
    image: "/paintings/birdie.jpeg",
    year: "2024",
    medium: "Acrylic",
    size: "30 × 40 inches",
    description:
      "A calm forest scene capturing nature's silence and beauty.",
  },
  {
    id: "6",
    title: "Heavenly Horizon",
    image: "/paintings/from heaven.jpeg",
    year: "2025",
    medium: "Mixed Media",
    size: "24 × 36 inches",
    description:
      "A powerful monochrome composition portraying the triumph of light over darkness, where courage and justice prevail amidst ancient ruins.",
  },
];

export default function PaintingPage({
  params,
}: {
  params: { id: string };
}) {
  const [openViewer, setOpenViewer] = useState(false);

  const painting = paintings.find((p) => p.id === params.id);

  if (!painting) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F5F0]">
        <h1 className="text-4xl font-bold">Painting Not Found</h1>
      </main>
    );
  }
    return (
    <>
      <main className="min-h-screen bg-[#F8F5F0]">
        <Navbar />

        <section className="mx-auto flex max-w-7xl flex-col gap-16 px-8 py-36 md:flex-row">

          {/* Painting Image */}
          <div className="flex-1">
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl select-none">
              <Image
                src={painting.image}
                alt={painting.title}
                fill
                priority
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => setOpenViewer(true)}
                className="cursor-zoom-in select-none object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <button
              onClick={() => setOpenViewer(true)}
              className="mt-6 w-full rounded-xl bg-stone-900 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-amber-600"
            >
              🔍 View Fullscreen
            </button>
          </div>

          {/* Painting Details */}
          <div className="flex flex-1 flex-col justify-center">

            <p className="uppercase tracking-[0.35em] text-amber-600">
              Featured Artwork
            </p>

            <h1 className="mt-4 text-5xl font-bold text-stone-900">
              {painting.title}
            </h1>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              {painting.description}
            </p>

            <div className="mt-10 space-y-5 text-lg">

              <p>
                <strong className="font-semibold text-amber-600">
                  Year:
                </strong>{" "}
                <span className="text-stone-700">
                  {painting.year}
                </span>
              </p>

              <p>
                <strong className="font-semibold text-amber-600">
                  Medium:
                </strong>{" "}
                <span className="text-stone-700">
                  {painting.medium}
                </span>
              </p>

              <p>
                <strong className="font-semibold text-amber-600">
                  Size:
                </strong>{" "}
                <span className="text-stone-700">
                  {painting.size}
                </span>
              </p>

            </div>

            <Link
              href="/gallery"
              className="mt-12 inline-block w-fit rounded-full bg-stone-900 px-8 py-4 text-white transition duration-300 hover:bg-amber-600"
            >
              ← Back to Gallery
            </Link>

          </div>

        </section>

        <Footer />
      </main>

      <ImageViewer
        open={openViewer}
        image={painting.image}
        title={painting.title}
        onClose={() => setOpenViewer(false)}
      />
    </>
  );
}