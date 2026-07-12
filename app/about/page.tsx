import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5F0] text-stone-900">

        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-28">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* Image */}
              <div className="relative h-[700px] overflow-hidden rounded-[36px] shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/artist.jpg"
                  alt="Artist"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <p className="uppercase tracking-[0.4em] text-amber-700">
                  About The Artist
                </p>

                <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
                  Every Painting
                  <span className="block text-amber-700">
                    Begins With A Story
                  </span>
                </h1>

                <p className="mt-8 text-lg leading-9 text-stone-600">
                  CanvasMuse is a celebration of creativity and artistic
                  expression. Every artwork is thoughtfully crafted to capture
                  emotion, movement, and timeless beauty.
                </p>

                <p className="mt-6 text-lg leading-9 text-stone-600">
                  Inspired by landscapes, architecture, imagination, and
                  everyday moments, each painting is designed to bring warmth,
                  personality, and emotion into every space.
                </p>

                <div className="mt-10 flex gap-5">
                  <Link
                    href="/gallery"
                    className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-amber-700"
                  >
                    Explore Gallery
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-stone-900 px-8 py-4 transition hover:bg-stone-900 hover:text-white"
                  >
                    Contact
                  </Link>
                </div>

                {/* Stats */}
                <div className="mt-14 flex gap-12">
                  <div>
                    <h3 className="text-3xl font-bold">6</h3>
                    <p className="text-stone-500">Artworks</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">4</h3>
                    <p className="text-stone-500">Collections</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">3</h3>
                    <p className="text-stone-500">Mediums</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="uppercase tracking-[0.4em] text-stone-500">
              My Journey
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              Growing Through Art
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-stone-600">
              Every painting represents a milestone in my artistic journey.
              Through experimentation with graphite, watercolor, and acrylic,
              I continue to explore new ideas while refining my creative voice.
            </p>

          </div>
        </section>

        {/* Mediums */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl bg-white p-10 shadow-lg">
                <h3 className="text-2xl font-bold">Acrylic</h3>
                <p className="mt-4 leading-8 text-stone-600">
                  Rich colors and expressive textures that bring every canvas
                  to life.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-10 shadow-lg">
                <h3 className="text-2xl font-bold">Graphite</h3>
                <p className="mt-4 leading-8 text-stone-600">
                  Detailed sketches that capture depth, realism, and emotion.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-10 shadow-lg">
                <h3 className="text-2xl font-bold">Watercolor</h3>
                <p className="mt-4 leading-8 text-stone-600">
                  Gentle blends and flowing pigments inspired by nature.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}