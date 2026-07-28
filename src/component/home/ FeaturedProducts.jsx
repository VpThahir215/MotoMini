import React from 'react'
import {ArrowRight} from 'lucide-react'





const products = [
  {
    id: 1,
    badge: "NEW",
    badgeColor: "bg-orange-500",
    scale: "Scale 1:12",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    title: "Himalayan 450 - Slate",
    description:
      "Die-cast zinc alloy · Hand-finished · Certificate of authenticity",
    price: "$149.99",
  },
  {
    id: 2,
    badge: "BESTSELLER",
    badgeColor: "bg-emerald-600",
    scale: "Scale 1:10",
    image:
      "https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?q=80&w=1200&auto=format&fit=crop",
    title: "Classic Cruiser Edition",
    description:
      "Die-cast zinc alloy · Hand-finished · Certificate of authenticity",
    price: "$189.99",
  },
  {
    id: 3,
    badge: "LIMITED",
    badgeColor: "bg-violet-600",
    scale: "Scale 1:18",
    image:
      "https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=1200&auto=format&fit=crop",
    title: "MotoGP Replica - #46",
    description:
      "Die-cast zinc alloy · Hand-finished · Certificate of authenticity",
    price: "$229.99",
  },
];

const  FeaturedProducts = () => {
  return (
    <div>
       <section className="bg-[#0b0b0b] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-[#D3AF37] uppercase">
            Featured Products
          </h2>

          <button className="hidden md:flex items-center gap-2 text-[#D3AF37] uppercase tracking-wider hover:text-white transition">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#151515] rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#D3AF37] transition-all duration-300 group"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Badge */}
                <span
                  className={`absolute left-4 top-4 px-3 py-1 rounded-md text-xs font-bold text-[#D3AF37] ${product.badgeColor}`}
                >
                  {product.badge}
                </span>

                {/* Scale */}
                <span className="absolute right-4 top-4 bg-black/60 text-[#D3AF37] text-xs px-3 py-1 rounded-md">
                  {product.scale}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-white text-3xl font-bold uppercase">
                  {product.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {product.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-[#D3AF37] text-4xl font-extrabold">
                    {product.price}
                  </span>

                  <button className="bg-[#D3AF37] hover:bg-black transition px-6 py-3 rounded-xl text-white font-semibold">
                    + CART
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
    </div>
  )
}

export default  FeaturedProducts
