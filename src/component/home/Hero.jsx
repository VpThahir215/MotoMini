import React from 'react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


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
        <div>

            <section
                aria-label="Featured collections"
                className="relative w-full h-screen min-h-[560px] pt-0 bg-ink"
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
                            transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
                            className="group relative flex-1 overflow-hidden border-b sm:border-b-0 sm:border-r border-ink last:border-0 outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-inset"
                            style={{ flexGrow: active === i ? 1.35 : 1, transition: 'flex-grow 600ms cubic-bezier(0.16,1,0.3,1)' }}
                        >
                            <img
                                src={panel.image}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                            />


                        </motion.a>
                    ))}
                </div>




                <div className="absolute left-5 sm:left-8 top-24 sm:top-28 max-w-md">

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="font-heading text-6xl lg:text-8xl text-black-none tracking-wide"

                    >
                        Collect <span style={{ color: "#D3AF37" }}>Legendary</span>
                        <br />
                        Miniature Motorcycles

                    </motion.h1>
                    <p className=" pt-4 text-[15px] tracking-[0.3em] max-w-lg text-gray-200">
                        Discover beautifully crafted miniature motorcycles inspired by the world's most iconic machines. Perfect for collectors and enthusiasts.
                    </p>
                    <br />
                    <Link to={'/shop'}>
                        <button className="group flex items-center gap-2 border-2 bg-[#D3AF37] border-[#D3AF37] px-8 py-3 text-black  rounded-full hover:bg-[#D3AF37] hover:text-[#D3AF37] hover:border-black hover:bg-black transition-all duration-300">
                            <span>Explore Collection</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Hero
