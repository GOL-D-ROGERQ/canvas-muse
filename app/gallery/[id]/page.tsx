import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const paintings = [
  {
    id: "1",
    title: "Golden Horizon",
    image: "/images/gallery1.jpeg",
    year: "2025",
    medium: "Oil on Canvas",
    size: "24 × 36 inches",
    description:
      "A peaceful landscape inspired by golden sunsets and rolling hills.",
  },
  {
    id: "2",
    title: "Silent Bloom",
    image: "/images/gallery2.jpeg",
    year: "2024",
    medium: "Acrylic",
    size: "20 × 30 inches",
    description:
      "A vibrant floral composition representing growth and serenity.",
  },
  {
    id: "3",
    title: "Ocean Dreams",
    image: "/images/gallery3.jpeg",
    year: "2025",
    medium: "Watercolor",
    size: "18 × 24 inches",
    description:
      "Inspired by the endless beauty of the sea and open skies.",
  },
  {
    id: "4",
    title: "Morning Light",
    image: "/images/gallery4.jpeg",
    year: "2023",
    medium: "Oil",
    size: "24 × 30 inches",
    description:
      "Soft morning sunlight illuminating a quiet countryside.",
  },
  {
    id: "5",
    title: "Forest Echo",
    image: "/images/gallery5.jpeg",
    year: "2024",
    medium: "Acrylic",
    size: "30 × 40 inches",
    description:
      "A calm forest scene capturing nature's silence and beauty.",
  },
  {
    id: "6",
    title: "Crimson Sky",
    image: "/images/gallery6.jpeg",
    year: "2025",
    medium: "Mixed Media",
    size: "24 × 36 inches",
    description:
      "A dramatic sunset with rich crimson tones and expressive textures.",
  },
];

export default async function PaintingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const painting = paintings.find((p) => p.id === id);

  if (!painting) {
    return (
      <main className="min-h-screen bg-[#F8F5F0] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Painting Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-8 py-36 md:flex-row">

        {/* Painting Image */}
        <div className="relative h-[600px] flex-1 overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={painting.image}
            alt={painting.title}
            fill
            className="object-cover"
          />
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

          {/* Artwork Information */}
          <div className="mt-10 space-y-5 text-lg">

            <p>
              <strong className="text-amber-600 font-semibold">
                Year:
              </strong>{" "}
              <span className="text-stone-700">
                {painting.year}
              </span>
            </p>

            <p>
              <strong className="text-amber-600 font-semibold">
                Medium:
              </strong>{" "}
              <span className="text-stone-700">
                {painting.medium}
              </span>
            </p>

            <p>
              <strong className="text-amber-600 font-semibold">
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
  );
}