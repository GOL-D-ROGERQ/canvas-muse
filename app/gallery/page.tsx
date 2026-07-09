import Navbar from "@/components/Navbar";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="bg-[#F8F5F0] min-h-screen">
      <Navbar />

      <section className="pt-36 pb-16 text-center">
        <h1 className="text-6xl font-bold text-stone-900">
          Gallery
        </h1>

        <p className="mt-5 text-lg text-stone-600">
          Explore our collection of original artwork.
        </p>
      </section>

      <GalleryPreview />

      <Footer />
    </main>
  );
}