"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5"
    >
      <div
        className={`flex w-full max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/75 px-8 transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "py-3 shadow-xl"
            : "py-5 shadow-lg"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold tracking-tight text-stone-900"
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
                key={link.name}
                href={link.href}
                className="group relative text-[16px] font-medium text-stone-700 transition-colors duration-300 hover:text-black"
              >
                {link.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-amber-600 transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Explore Button */}
        <Link
          href="/gallery"
          className="rounded-full bg-black px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:shadow-lg"
        >
          Explore
        </Link>
      </div>
    </motion.header>
  );
}