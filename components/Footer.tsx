"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaEnvelope,
  FaPalette,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-stone-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Link
              href="/"
              scroll={false}
              className="flex w-fit items-center gap-3"
            >
              <FaPalette className="text-3xl text-amber-500" />

              <h2 className="text-3xl font-bold">
                Canvas<span className="text-amber-500">Muse</span>
              </h2>
            </Link>

            <p className="mt-8 max-w-md leading-8 text-stone-400">
              Creating stories through color, emotion, and imagination.
              Every painting reflects a moment worth remembering.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-12">
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold">Navigation</h3>

              <div className="mt-6 flex flex-col gap-4">
                <Link
                  href="/"
                  scroll={false}
                  className="transition hover:text-amber-400"
                >
                  Home
                </Link>

                <Link
                  href="/gallery"
                  scroll={false}
                  className="transition hover:text-amber-400"
                >
                  Gallery
                </Link>

                <Link
                  href="/about"
                  scroll={false}
                  className="transition hover:text-amber-400"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  scroll={false}
                  className="transition hover:text-amber-400"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold">Connect</h3>

              <div className="mt-6 space-y-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-amber-400 hover:translate-x-1"
                >
                  <FaInstagram />
                  Instagram
                </a>

                <a
                  href="mailto:hna65114@gmail.com"
                  className="flex items-center gap-3 transition hover:text-amber-400 hover:translate-x-1"
                >
                  <FaEnvelope />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} MANUELA ZIA. Crafted with passion for art.
        </div>
      </div>
    </motion.footer>
  );
}