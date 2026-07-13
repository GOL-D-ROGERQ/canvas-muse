"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollY } = useScroll();

  /* ---------------- PARALLAX ---------------- */

  const heroImageScrollY = useTransform(
    scrollY,
    [0, 900],
    [0, -90]
  );

  const heroTextScrollY = useTransform(
    scrollY,
    [0, 900],
    [0, -40]
  );

  const blobScrollY = useTransform(
    scrollY,
    [0, 900],
    [0, 120]
  );

  /* ---------------- TILT ---------------- */

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [8, -8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-8, 8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const imageX = useSpring(
    useTransform(mouseX, [-300, 300], [-20, 20]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-300, 300], [-20, 20]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  /* ---------------- PRECOMPUTED MOTION VALUES ---------------- */

  const blobY = useMotionTemplate`
    calc(${imageY}px + ${blobScrollY}px)
  `;

  const heroY = useMotionTemplate`
    calc(${imageY}px + ${heroImageScrollY}px)
  `;

  const floatingX = useTransform(
    imageX,
    (v) => v * 0.4
  );

  const floatingY = useTransform(
    imageY,
    (v) => v * 0.4
  );

  const floatingMotionY = useMotionTemplate`
    calc(${floatingY}px + ${heroImageScrollY}px)
  `;

  /* ---------------- MOUSE ---------------- */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX -
        rect.left -
        rect.width / 2
    );

    mouseY.set(
      e.clientY -
        rect.top -
        rect.height / 2
    );
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8F5F0] pt-32"
    >

      {/* Background Blob */}

      <motion.div
        style={{
          x: imageX,
          y: blobY,
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl"
      />

      <motion.div
        style={{
          x: imageX,
          y: blobY,
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-100/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            style={{
              y: heroTextScrollY,
            }}
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div className="inline-flex items-center rounded-full border border-stone-300 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="mr-2 text-lg">
                🎨
              </span>

              <span className="text-sm font-medium tracking-wide text-stone-700">
                Fine Art Portfolio
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-stone-900 md:text-7xl">
              Art That

              <span className="block text-amber-700">
                Tells Stories
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
              Hi, I'm{" "}
              <span className="font-semibold text-stone-900">
                MANUELA ZIA
              </span>
              , a young artist passionate about expressing emotions through acrylic and watercolor paintings. Every artwork reflects a story inspired by nature, imagination, and everyday life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Magnetic strength={0.35}>
                <Link
                  href="/gallery"
                  scroll={false}
                  className="rounded-full bg-black px-8 py-4 text-white transition-all duration-500 hover:bg-amber-700 hover:shadow-2xl"
                >
                  Explore Gallery
                </Link>
              </Magnetic>

              <Magnetic strength={0.35}>
                <Link
                  href="/about"
                  scroll={false}
                  className="rounded-full border border-stone-800 px-8 py-4 transition-all duration-500 hover:bg-stone-900 hover:text-white hover:shadow-2xl"
                >
                  Meet the Artist
                </Link>
              </Magnetic>
            </div>
                        {/* Stats */}

            <motion.div
              className="mt-14 flex gap-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-3xl font-bold text-stone-900">
                  35+
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Artworks
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-3xl font-bold text-stone-900">
                  4
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Collections
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-3xl font-bold text-stone-900">
                  3
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Mediums
                </p>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                duration: 1,
              },
              x: {
                duration: 1,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              rotateX,
              rotateY,
              x: imageX,
              y: heroY,
              transformPerspective: 1200,
            }}
            className="relative"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-amber-300/40" />

            <div className="relative h-[650px] rounded-[36px] border border-white/60 shadow-[0_45px_120px_rgba(0,0,0,0.25)] overflow-hidden">

              {/* Image */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/paintings/from heaven.jpeg"
                  alt="Featured Artwork"
                  fill
                  priority
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="select-none object-cover"
                />
              </motion.div>

              {/* Shine Sweep */}

              <motion.div
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-0"
              >
                <div className="h-full w-32 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl" />
              </motion.div>

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            {/* Floating Artwork Info */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                style={{
                  x: floatingX,
                  y: floatingMotionY,
                }}
                className="absolute bottom-10 right-10 z-20 text-right"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/80 drop-shadow-lg">
                  Original Painting
                </p>

                <h3 className="mt-2 text-3xl font-semibold text-white drop-shadow-xl">
                  From Heaven
                </h3>

                <p className="mt-1 text-white/90 drop-shadow-lg">
                  Acrylic on Canvas
                </p>
              </motion.div>

              {/* Decorative Glow */}

              <motion.div
                animate={{
                  opacity: [0.2, 0.45, 0.2],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 left-1/2 h-36 w-72 -translate-x-1/2 rounded-full bg-amber-300/30 blur-3xl"
              />

              {/* Noise Overlay */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,.9) 1px, transparent 0)",
                  backgroundSize: "18px 18px",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Scroll
          </p>

          <div className="flex h-12 w-7 justify-center rounded-full border border-stone-400">
            <motion.div
              animate={{
                y: [4, 18, 4],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="mt-2 h-2 w-2 rounded-full bg-amber-600"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}