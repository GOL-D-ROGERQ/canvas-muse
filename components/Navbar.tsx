"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaPalette } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/in-progress" },
];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-6 pt-5"
    >
      <div
        className={`flex w-full max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/75 px-8 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "py-3 shadow-xl" : "py-5 shadow-lg"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          scroll={false}
          className="flex items-center gap-3 text-2xl font-bold text-stone-900 transition hover:text-amber-600"
        >
          <FaPalette className="text-3xl text-amber-600" />

          <span>
            Canvas<span className="text-amber-700">Muse</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={false}
                className="group relative font-medium text-stone-700 transition hover:text-amber-600"
              >
                {link.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-amber-600 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Explore Button */}
        <Link
          href="/gallery"
          scroll={false}
          className="rounded-full bg-stone-900 px-6 py-3 text-white transition-all duration-300 hover:bg-amber-600 hover:scale-105"
        >
          Explore
        </Link>
      </div>
    </motion.header>
  );
}