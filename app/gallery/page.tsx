import Navbar from "@/components/Navbar";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
export default function GalleryPage() {
  return (
    <main className="bg-[#F8F5F0] text-stone-900">
      <Navbar />

      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

          <p className="uppercase tracking-[0.4em] text-stone-500">
            Gallery
          </p>

          <h1 className="mt-6 text-6xl font-bold">
            A Journey Through
            <span className="block text-amber-700">
              Color & Emotion
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
            Browse the complete collection of original artworks.
            Every painting tells a unique story inspired by imagination,
            emotion, and the beauty of everyday life.
          </p>

        </div>
      </section>

      <GalleryGrid />

      <Footer />
    </main>
  );
}