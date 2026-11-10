import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const PANELS = [
  {
    label: "Sport",
    image:
      "https://i.pinimg.com/736x/33/ce/03/33ce0301eb516f6aeae60b95e8cf543a.jpg",
  },
  {
    label: "MotoGP",
    image:
      "https://i.pinimg.com/736x/ac/93/90/ac9390679cd2678bdbc24d1198a89552.jpg",
  },
  {
    label: "Classic",
    image:
      "https://i.pinimg.com/736x/2c/59/39/2c5939b77c87d8766638eab644d13655.jpg",
  },
  {
    label: "Adventure",
    image:
      "https://i.pinimg.com/736x/e6/87/28/e687283e04b8bafd9b4ceffb3907a306.jpg",
  },
];

/* ---------- text animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineReveal = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      aria-label="Featured collections"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black"
    >
      {/* ---------- Photo panels ---------- */}
      <div className="relative h-full flex flex-col sm:flex-row">
        {PANELS.map((panel, i) => (
          <motion.a
            key={panel.label}
            href="#categories"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            className="group relative flex-1 overflow-hidden border-b sm:border-b-0 sm:border-r border-black/60 last:border-0"
            style={{
              flexGrow: active === i ? 1.35 : 1,
              transition: "flex-grow 600ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Brighter image */}
            <img
              src={panel.image}
              alt={panel.label}
              className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-105 saturate-110 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* Very light overlay (was bg-black/35) */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.a>
        ))}
      </div>

      {/* ---------- Readability gradients (small + soft) ---------- */}

      {/* Text area: bottom on mobile, left on desktop */}
      <div className="absolute z-10 pointer-events-none bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/25 to-transparent inset-x-0 bottom-0 h-2/3 lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-[40%]" />

      {/* Top fade so navbar icons stay visible on any photo */}
      <div className="absolute inset-x-0 top-0 h-28 z-10 pointer-events-none bg-gradient-to-b from-black/60 to-transparent" />

      {/* ---------- Hero Content (compact, bottom-left) ---------- */}
      <div className="absolute left-6 sm:left-10 lg:left-16 bottom-14 sm:bottom-20 z-20 max-w-[420px]">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow with growing gold line */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
            <motion.span
              className="h-px w-8 bg-[#D3AF37] origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            />
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D3AF37]">
              Build Your Dream Garage
            </p>
          </motion.div>

          {/* Headline: masked line reveal */}
          <h1
            className="uppercase text-white leading-[0.95] tracking-wide"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: "0 2px 12px rgba(0,0,0,.6)",
            }}
          >
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={lineReveal}
                className="block text-4xl sm:text-5xl lg:text-6xl"
              >
                Legendary Bikes
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={lineReveal}
                className="block text-4xl sm:text-5xl lg:text-6xl"
              >
                {/* Gold shimmer (slow loop) */}
                <motion.span
                  className="inline-block text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #D3AF37 0%, #F5E08A 50%, #D3AF37 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Pocket Size
                </motion.span>
              </motion.span>
            </span>
          </h1>

          {/* Short paragraph */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-200 text-sm leading-relaxed max-w-xs"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,.7)" }}
          >
            Hand-finished miniature motorcycles for collectors and riders at
            heart.
          </motion.p>

          {/* Button */}
          <motion.div variants={fadeUp} className="mt-5 flex gap-3">
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#D3AF37] text-black px-6 py-3 text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#E5C14A] transition-colors duration-300 shadow-lg shadow-[#D3AF37]/20"
              >
                Shop Collection
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;