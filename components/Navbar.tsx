"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPalette } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white shadow-md sticky top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-stone-900"
        >
          <FaPalette className="text-amber-600 text-3xl" />
          CanvasMuse
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-stone-700">

          <Link
            href="/"
            className="transition hover:text-amber-600"
          >
            Home
          </Link>

          <Link
            href="/gallery"
            className="transition hover:text-amber-600"
          >
            Gallery
          </Link>

          <Link
            href="/about"
            className="transition hover:text-amber-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-amber-600"
          >
            Contact
          </Link>

        </nav>

        {/* Explore Button */}
        <Link
          href="/gallery"
          className="rounded-full bg-stone-900 px-6 py-3 text-white transition duration-300 hover:bg-amber-600"
        >
          Explore
        </Link>

      </div>
    </motion.header>
  );
}