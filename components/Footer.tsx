"use client";

import Link from "next/link";
import { FaInstagram, FaEnvelope, FaPalette } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <FaPalette className="text-3xl text-amber-500" />

              <h2 className="text-3xl font-bold">
                Canvas<span className="text-amber-500">Muse</span>
              </h2>
            </div>

            <p className="mt-8 max-w-md leading-8 text-stone-400">
              Creating stories through color, emotion, and imagination.
              Every painting reflects a moment worth remembering.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold">Navigation</h3>

              <div className="mt-6 flex flex-col gap-4">
                <Link href="/">Home</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Connect</h3>

              <div className="mt-6 space-y-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-amber-400"
                >
                  <FaInstagram />
                  Instagram
                </a>

                <a
                  href="hna65114@gmail.com"
                  className="flex items-center gap-3 hover:text-amber-400"
                >
                  <FaEnvelope />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          © MANUELA ZIA. Crafted with passion for art.
        </div>
      </div>
    </footer>
  );
}