"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8F5F0] pt-32"
    >
      {/* Background Blurs */}

      <motion.div
        style={{
          x: imageX,
          y: imageY,
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl"
      />

      <motion.div
        style={{
          x: imageX,
          y: imageY,
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-100/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
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
              <Link
                href="/gallery"
                scroll={false}
                className="rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-amber-700"
              >
                Explore Gallery
              </Link>

              <Link
                href="/about"
                scroll={false}
                className="rounded-full border border-stone-800 px-8 py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white"
              >
                Meet the Artist
              </Link>
            </div>

            <div className="mt-14 flex gap-10">
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-stone-900">
                  35+
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Artworks
                </p>
              </div>

              <div className="transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-stone-900">
                  4
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Collections
                </p>
              </div>

              <div className="transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-stone-900">
                  3
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Mediums
                </p>
              </div>
            </div>
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
              y: imageY,
              transformPerspective: 1200,
            }}
            className="relative"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-amber-300/40" />

            <div className="relative h-[650px] rounded-[36px] border border-white/60 shadow-[0_45px_120px_rgba(0,0,0,0.25)]">

              <div className="relative h-full overflow-hidden rounded-[36px]">
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
                            {/* Floating Text */}
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
                  x: useTransform(imageX, (v) => v * 0.4),
                  y: useTransform(imageY, (v) => v * 0.4),
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
                  opacity: [0.25, 0.45, 0.25],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 left-1/2 h-36 w-72 -translate-x-1/2 rounded-full bg-amber-300/30 blur-3xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}