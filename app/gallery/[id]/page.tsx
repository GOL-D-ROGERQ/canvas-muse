import PaintingClient from "./PaintingClient";

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

export default async function PaintingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const painting = paintings.find((p) => p.id === id);

  if (!painting) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F5F0]">
        <h1 className="text-4xl font-bold">Painting Not Found</h1>
      </main>
    );
  }

  return <PaintingClient painting={painting} />;
}