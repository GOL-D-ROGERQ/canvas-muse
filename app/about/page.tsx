import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function aboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-8 py-36">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}
          <div className="relative h-[650px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/artist.jpg"
              alt="Artist"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[0.35em] text-amber-600">
              About The Artist
            </p>

            <h1 className="mt-5 text-6xl font-bold text-stone-900">
              Every Painting
              <br />
              Begins With
              <br />
              A Story.
            </h1>

            <p className="mt-8 text-lg leading-9 text-stone-600">
              CanvasMuse is a celebration of creativity and artistic
              expression. Every artwork is thoughtfully crafted to capture
              emotion, movement, and timeless beauty.
            </p>

            <p className="mt-6 text-lg leading-9 text-stone-600">
              Inspired by landscapes, architecture, and everyday moments,
              each painting is designed to bring warmth and personality
              into every space.
            </p>

            <button className="mt-10 rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-amber-600">
              View Gallery
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}