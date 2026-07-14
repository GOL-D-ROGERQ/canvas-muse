"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  FaArrowLeft,
  FaPaintBrush,
  FaPalette,
  FaImage,
} from "react-icons/fa";

export default function InProgressPage() {
  /* ---------------------------------- */
  /* Mouse Glow                         */
  /* ---------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 140,
    damping: 28,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 140,
    damping: 28,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);

    mouseY.set(e.clientY - rect.top);
  };

  return (
    <>
      <Navbar />

      <main
        onMouseMove={handleMouseMove}
        className="relative min-h-screen overflow-hidden bg-[#F8F5F0] pt-32"
      >

        {/* ========================================= */}
        {/* Mouse Glow */}
        {/* ========================================= */}

        <motion.div
          style={{
            left: glowX,
            top: glowY,
          }}
          className="pointer-events-none absolute z-0 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-[120px]"
        />

        {/* ========================================= */}
        {/* Aurora Background */}
        {/* ========================================= */}

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-200/20 via-yellow-100/20 to-red-200/20 blur-3xl"
        />

        {/* ========================================= */}
        {/* Floating Watercolor Blobs */}
        {/* ========================================= */}

        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${170 + i * 40}px`,
              height: `${170 + i * 40}px`,
              background:
                i % 2 === 0
                  ? "rgba(255,184,108,0.18)"
                  : "rgba(255,220,170,0.16)",
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
          />
        ))}

        {/* ========================================= */}
        {/* Floating Background Blobs */}
        {/* ========================================= */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-100/40 blur-3xl"
        />

        {/* ========================================= */}
        {/* Main Content */}
        {/* ========================================= */}

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center px-6">

          <div className="text-center">
                        {/* Logo */}

            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                scale: {
                  duration: 0.8,
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                },
              }}
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-amber-100 shadow-xl"
            >
              <FaPaintBrush className="text-5xl text-amber-700" />
            </motion.div>

            {/* Small Heading */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-10 uppercase tracking-[0.45em] text-amber-700"
            >
              CanvasMuse
            </motion.p>

            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="mt-6 text-5xl font-bold text-stone-900 md:text-7xl"
            >
              Artwork

              <span className="block text-amber-700">
                In Progress
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
              }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-600"
            >
              Every masterpiece begins with a blank canvas.
              This page is currently being crafted with the
              same care, patience and creativity as every
              artwork showcased in CanvasMuse.
            </motion.p>

            {/* Progress */}

            <div className="mx-auto mt-16 w-full max-w-xl">

              <div className="h-3 overflow-hidden rounded-full bg-stone-200">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "72%",
                  }}
                  transition={{
                    duration: 2.2,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"
                />

              </div>

              <div className="mt-4 flex justify-between text-sm text-stone-500">

                <span>Development Progress</span>

                <span className="font-semibold text-amber-700">
                  72%
                </span>

              </div>

            </div>

            {/* Glass Artwork Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="mx-auto mt-16 w-full max-w-lg"
            >
              <div className="rounded-[34px] border border-white/70 bg-white/70 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl">

                <div className="relative overflow-hidden rounded-2xl border border-stone-300 bg-[#FAF8F4] p-8">

                  {/* Light Sweep */}

                  <motion.div
                    animate={{
                      x: [-160, 220],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 top-0 h-full w-24 -rotate-12 bg-gradient-to-r from-transparent via-amber-200/70 to-transparent blur-xl"
                  />

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                        Current Project
                      </p>

                      <h3 className="mt-2 text-3xl font-bold text-stone-900">
                        New Collection
                      </h3>

                    </div>

                    <FaPalette className="text-4xl text-amber-600" />

                  </div>

                  <div className="mt-10 space-y-4">

                    <div className="h-3 overflow-hidden rounded-full bg-stone-200">

                      <motion.div
                        animate={{
                          width: ["0%", "72%", "72%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                      />

                    </div>

                    <div className="flex justify-between text-sm text-stone-500">

                      <span>Painting Layers</span>

                      <span>72%</span>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
                        {/* ========================================= */}
            {/* Artist Easel */}
            {/* ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="mx-auto mt-20 flex justify-center"
            >
              <div className="relative h-[470px] w-[340px]">

                {/* Shadow */}

                <div className="absolute bottom-0 left-1/2 h-10 w-64 -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />

                {/* ========================= */}
                {/* Canvas */}
                {/* ========================= */}

                <div className="absolute left-1/2 top-0 h-[260px] w-[250px] -translate-x-1/2 rounded-xl border-[10px] border-[#8B5A2B] bg-[#faf8f2] shadow-2xl">

                  <div className="relative h-full overflow-hidden rounded-md">

                    {/* Canvas Background */}

                    <div className="absolute inset-0 bg-[#fdfaf5]" />

                    {/* Animated Paint Reveal */}

                    <motion.div
                      initial={{
                        height: "0%",
                      }}
                      animate={{
                        height: "100%",
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-amber-300 via-orange-300 to-red-300"
                    />

                    {/* Decorative Brush Strokes */}

                    {Array.from({ length: 10 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          scaleX: 0,
                          opacity: 0,
                        }}
                        animate={{
                          scaleX: [0, 1, 1],
                          opacity: [0, 0.7, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.18,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                        className="absolute rounded-full bg-white/30"
                        style={{
                          height: `${6 + Math.random() * 12}px`,
                          width: `${120 + Math.random() * 70}px`,
                          top: `${20 + i * 18}px`,
                          left: `${Math.random() * 25}px`,
                          rotate: `${Math.random() * 25 - 12}deg`,
                        }}
                      />
                    ))}

                    {/* Center Icon */}

                    <div className="absolute inset-0 flex items-center justify-center">

                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        <FaImage className="text-7xl text-white/70" />
                      </motion.div>

                    </div>

                  </div>

                </div>

                {/* ========================= */}
                {/* Easel Stand */}
                {/* ========================= */}

                <div className="absolute left-1/2 top-[245px] h-[190px] w-3 -translate-x-1/2 rounded-full bg-[#8B5A2B]" />

                <div className="absolute left-[78px] top-[215px] h-[220px] w-3 rotate-[20deg] rounded-full bg-[#8B5A2B]" />

                <div className="absolute right-[78px] top-[215px] h-[220px] w-3 -rotate-[20deg] rounded-full bg-[#8B5A2B]" />

                <div className="absolute left-1/2 top-[285px] h-3 w-[170px] -translate-x-1/2 rounded-full bg-[#8B5A2B]" />

                {/* Shelf */}

                <div className="absolute left-1/2 top-[240px] h-4 w-[210px] -translate-x-1/2 rounded-full bg-[#9b6a35]" />
                                {/* ========================= */}
                {/* Animated Brush */}
                {/* ========================= */}

                <motion.div
                  animate={{
                    x: [-40, 45, -15, 0],
                    y: [30, -25, 20, 5],
                    rotate: [-28, 12, -18, -28],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-24 z-30"
                >
                  <FaPaintBrush className="text-5xl text-amber-700 drop-shadow-xl" />
                </motion.div>

                {/* Paint Drops */}

                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`paint-${i}`}
                    animate={{
                      y: [0, 80],
                      opacity: [1, 0],
                      scale: [1, 0.2],
                    }}
                    transition={{
                      duration: 1.3 + Math.random(),
                      repeat: Infinity,
                      repeatDelay: Math.random() * 3,
                      delay: Math.random() * 2,
                    }}
                    className="absolute rounded-full bg-amber-500"
                    style={{
                      width: `${5 + Math.random() * 8}px`,
                      height: `${5 + Math.random() * 8}px`,
                      left: `${150 + Math.random() * 40}px`,
                      top: `${120 + Math.random() * 40}px`,
                    }}
                  />
                ))}

              </div>
            </motion.div>
                        {/* ========================================= */}
            {/* Navigation Buttons */}
            {/* ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.4,
                duration: 0.8,
              }}
              className="mt-20 flex flex-wrap justify-center gap-5"
            >
              <Link
                href="/"
                scroll={false}
                className="group flex items-center gap-3 rounded-full bg-stone-900 px-8 py-4 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700"
              >
                <FaArrowLeft className="transition group-hover:-translate-x-1" />
                Back Home
              </Link>

              <Link
                href="/gallery"
                scroll={false}
                className="rounded-full border border-stone-300 bg-white/70 px-8 py-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:bg-white"
              >
                Browse Gallery
              </Link>
            </motion.div>

            {/* ========================================= */}
            {/* Small Footer Text */}
            {/* ========================================= */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2,
              }}
              className="mt-10 text-sm tracking-[0.35em] uppercase text-stone-400"
            >
              More Beautiful Things Are Coming Soon
            </motion.p>

          </div>
        </div>

        {/* ========================================= */}
        {/* Floating Paint Particles */}
        {/* ========================================= */}

        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -700],
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.3, 0.5],
              x: [0, Math.random() * 160 - 80],
            }}
            transition={{
              duration: 7 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
            className="absolute rounded-full blur-sm"
            style={{
              width: `${6 + Math.random() * 12}px`,
              height: `${6 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              bottom: "-60px",
              background:
                i % 3 === 0
                  ? "rgba(251,191,36,.35)"
                  : i % 3 === 1
                  ? "rgba(249,115,22,.30)"
                  : "rgba(245,158,11,.28)",
            }}
          />
        ))}

        {/* ========================================= */}
        {/* Decorative Sparkles */}
        {/* ========================================= */}

        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

      </main>

      <Footer />
    </>
  );
}