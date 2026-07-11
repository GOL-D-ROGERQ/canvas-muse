import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { paintings } from "@/data/paintings";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArtworkPage({ params }: PageProps) {
  const { id } = await params;

  const artwork = paintings.find(
    (painting) => painting.id === Number(id)
  );

  if (!artwork) {
    notFound();
  }

  const currentIndex = paintings.findIndex(
    (painting) => painting.id === artwork.id
  );

  const previous =
    currentIndex > 0 ? paintings[currentIndex - 1] : null;

  const next =
    currentIndex < paintings.length - 1
      ? paintings[currentIndex + 1]
      : null;

  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5F0] text-stone-900">

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-40 pb-20 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Artwork */}
<div className="relative h-[700px] overflow-hidden rounded-[36px] shadow-2xl">
  <Image
    src={artwork.image}
    alt={artwork.title}
    fill
    priority
    className="object-cover"
  />
</div>

            {/* Info */}
            <div className="flex flex-col justify-center">

              <p className="uppercase tracking-[0.4em] text-stone-500">
                {artwork.category}
              </p>

              <h1 className="mt-5 text-6xl font-bold">
                {artwork.title}
              </h1>

              <p className="mt-8 text-lg leading-8 text-stone-600">
                {artwork.description}
              </p>

              <div className="mt-12 space-y-6">

                <div className="flex justify-between border-b pb-4">
                  <span className="text-stone-500">Medium</span>
                  <span>{artwork.medium}</span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-stone-500">Year</span>
                  <span>{artwork.year}</span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-stone-500">Dimensions</span>
                  <span>{artwork.dimensions}</span>
                </div>

              </div>

              <Link
                href="/gallery"
                className="mt-12 inline-flex w-fit rounded-full bg-black px-8 py-4 text-white transition hover:bg-amber-700"
              >
                ← Back to Gallery
              </Link>

            </div>

          </div>

        </section>

        {/* Previous / Next */}
        <section className="border-t border-stone-300 py-20">

          <div className="mx-auto flex max-w-7xl justify-between px-6 lg:px-8">

            {previous ? (
              <Link
                href={`/gallery/${previous.id}`}
                className="group"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  Previous
                </p>

                <h3 className="mt-2 text-2xl font-semibold group-hover:text-amber-700">
                  {previous.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/gallery/${next.id}`}
                className="text-right group"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  Next
                </p>

                <h3 className="mt-2 text-2xl font-semibold group-hover:text-amber-700">
                  {next.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}