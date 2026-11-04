import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, Gem, Award } from "lucide-react";

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

const Hero = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      aria-label="Featured collections"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black"
    >
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
            className="group relative flex-1 overflow-hidden border-b sm:border-b-0 sm:border-r border-black last:border-0"
            style={{
              flexGrow: active === i ? 1.35 : 1,
              transition: "flex-grow 600ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img
              src={panel.image}
              alt={panel.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Left side darker for text */}
            {i === 0 && (
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            )}
          </motion.a>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute left-6 sm:left-10 lg:left-14 top-24 sm:top-28 z-20 max-w-[420px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] uppercase tracking-[0.45em] text-gray-300 mb-4">
            Build Your Dream Garage
          </p>

          <h1
            className="uppercase text-white leading-[0.88]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            <span className="block text-6xl sm:text-7xl lg:text-8xl italic font-black">
              Collect
            </span>

            <span
              className="block text-5xl sm:text-6xl lg:text-7xl italic font-black"
              style={{
                color: "#D3AF37",
                textShadow: "0 4px 14px rgba(211,175,55,.35)",
              }}
            >
              Legendary
            </span>

            <span className="block text-xl sm:text-2xl tracking-[0.35em] font-light mt-2">
              Miniature
            </span>

            <span className="block text-5xl sm:text-6xl lg:text-7xl italic font-black mt-1">
              Motorcycles
            </span>
          </h1>

          <p className="mt-6 text-gray-200 text-base leading-8 max-w-sm">
            Discover beautifully crafted miniature motorcycles inspired by the
            world's most iconic machines. Perfect for collectors and
            enthusiasts.
          </p>

          <Link to="/shop">
            <button className="group mt-8 bg-[#D3AF37] text-black px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[#E5C14A] transition-all duration-300 shadow-lg shadow-[#D3AF37]/20">
              Explore Collection
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </Link>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;