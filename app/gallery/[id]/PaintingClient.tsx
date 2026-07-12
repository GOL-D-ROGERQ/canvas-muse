"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageViewer from "@/components/ImageViewer";
import { paintings } from "@/data/paintings";

interface Painting {
  id: number;
  title: string;
  category: string;
  medium: string;
  year: string;
  image: string;
  description: string;
  dimensions: string;
}

interface PaintingClientProps {
  painting: Painting;
}

export default function PaintingClient({
  painting,
}: PaintingClientProps) {
  const router = useRouter();

  const initialIndex = paintings.findIndex(
    (item) => item.id === painting.id
  );

  const [currentIndex, setCurrentIndex] =
    useState(initialIndex);

  const [viewerOpen, setViewerOpen] =
    useState(false);

  const artwork = paintings[currentIndex];

  const previous =
    currentIndex > 0
      ? paintings[currentIndex - 1]
      : null;

  const next =
    currentIndex < paintings.length - 1
      ? paintings[currentIndex + 1]
      : null;

  useEffect(() => {
    router.replace(`/gallery/${artwork.id}`);
  }, [currentIndex, artwork.id, router]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!viewerOpen) return;

      if (e.key === "ArrowRight" && next) {
        setCurrentIndex((i) => i + 1);
      }

      if (e.key === "ArrowLeft" && previous) {
        setCurrentIndex((i) => i - 1);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [viewerOpen, next, previous]);

  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5F0] text-stone-900">

        {/* HERO */}

        <section className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="relative overflow-hidden rounded-[36px] shadow-2xl"
            >
              <div
                className="relative h-[720px] cursor-zoom-in overflow-hidden"
                onClick={() =>
                  setViewerOpen(true)
                }
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  priority
                  draggable={false}
                  onContextMenu={(e) =>
                    e.preventDefault()
                  }
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 hover:opacity-100" />

                <div className="absolute bottom-8 right-8 rounded-full bg-white/90 px-6 py-3 backdrop-blur-md">
                  🔍 View Fullscreen
                </div>
              </div>
            </motion.div>

            {/* DETAILS */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
                {artwork.category}
              </p>

              <h1 className="mt-5 text-6xl font-bold leading-tight lg:text-7xl">
                {artwork.title}
              </h1>

              <div className="mt-5 flex items-center gap-3 text-stone-500">

                <span>{artwork.medium}</span>

                <span className="h-1 w-1 rounded-full bg-stone-400" />

                <span>{artwork.year}</span>

              </div>

              <p className="mt-10 text-lg leading-9 text-stone-600">
                {artwork.description}
              </p>

              {/* INFO CARDS */}

              <div className="mt-12 grid gap-6 sm:grid-cols-3">

                <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Medium
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {artwork.medium}
                  </h3>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Year
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {artwork.year}
                  </h3>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Dimensions
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {artwork.dimensions}
                  </h3>
                </div>

              </div>

              <Link
                href="/gallery"
                className="mt-12 inline-flex w-fit rounded-full bg-black px-8 py-4 text-white transition hover:bg-amber-700"
              >
                ← Back to Gallery
              </Link>

            </motion.div>

          </div>

        </section>
                {/* STORY SECTION */}

        <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[36px] bg-white p-12 shadow-xl"
          >
            <p className="uppercase tracking-[0.35em] text-amber-600">
              Behind The Canvas
            </p>

            <h2 className="mt-4 text-4xl font-bold text-stone-900">
              The Story Behind This Artwork
            </h2>

            <p className="mt-8 text-lg leading-9 text-stone-600">
              {artwork.description}
            </p>
          </motion.div>
        </section>

        {/* RELATED WORKS */}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div className="mb-12">
            <p className="uppercase tracking-[0.35em] text-amber-600">
              Explore More
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Related Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {paintings
              .filter(
                (item) =>
                  item.category === artwork.category &&
                  item.id !== artwork.id
              )
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/gallery/${item.id}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    <div className="relative h-[340px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                        {item.medium}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </Link>
              ))}
          </div>

        </section>

        {/* PREVIOUS / NEXT */}

        <section className="border-t border-stone-300 py-20">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">

            {previous ? (
              <button
                onClick={() => setCurrentIndex((i) => i - 1)}
                className="group overflow-hidden rounded-[28px] bg-white text-left shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={previous.image}
                    alt={previous.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    ← Previous Artwork
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold group-hover:text-amber-700">
                    {previous.title}
                  </h3>
                </div>
              </button>
            ) : (
              <div />
            )}

            {next ? (
              <button
                onClick={() => setCurrentIndex((i) => i + 1)}
                className="group overflow-hidden rounded-[28px] bg-white text-right shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={next.image}
                    alt={next.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Next Artwork →
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold group-hover:text-amber-700">
                    {next.title}
                  </h3>
                </div>
              </button>
            ) : (
              <div />
            )}

          </div>

        </section>

      </main>

      <Footer />

      <ImageViewer
        open={viewerOpen}
        image={artwork.image}
        title={artwork.title}
        onClose={() => setViewerOpen(false)}
        onNext={
          next
            ? () => setCurrentIndex((i) => i + 1)
            : undefined
        }
        onPrevious={
          previous
            ? () => setCurrentIndex((i) => i - 1)
            : undefined
        }
        hasNext={!!next}
        hasPrevious={!!previous}
      />
    </>
  );
}