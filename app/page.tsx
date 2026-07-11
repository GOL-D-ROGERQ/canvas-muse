import Stats from "@/components/Stats";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BehindTheCanvas from "@/components/BehindTheCanvas";
export default function Home() {
  return (
    <main className="bg-[#F8F5F0] text-[#1F1F1F]">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <About />
      <BehindTheCanvas />
      <Footer />
    </main>
  );
}