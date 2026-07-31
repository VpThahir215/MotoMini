import React from 'react'
import {ArrowRight} from 'lucide-react'





const products = [
  {
    id: 1,
    badge: "NEW",
    badgeColor: "bg-orange-500",
    scale: "Scale 1:12",
    image:
      "https://i.pinimg.com/1200x/a1/94/27/a19427da0808e549f229b3a986d7bf84.jpg",
    title: "BMW R nine T motorcycle",
    description:
      "These diecast are often sold by brands like CM Model ",
    price: "$149.99",
  },
  {
    id: 2,
    badge: "BESTSELLER",
    badgeColor: "bg-emerald-600",
    scale: "Scale 1:10",
    image:
      "https://i.pinimg.com/736x/4b/a5/b3/4ba5b3abf0f57bb1c460a4f98c3988d8.jpg",
    title: "Maisto 1:18 scale model",
    description:
      "This model features detailled diecast metal constrictions",
    price: "$189.99",
  },
  {
    id: 3,
    badge: "LIMITED",
    badgeColor: "bg-violet-600",
    scale: "Scale 1:18",
    image:
      "https://i.pinimg.com/736x/59/78/7c/59787c3dc53a3cb039a434061b2e7a9a.jpg",
    title: "1:18 scale red dirt bike ",
    description:
      "This features realistic details such as spoked wheels and a textured seat",
    price: "$229.99",
  },
];

const  FeaturedProducts = () => {
  return (
    <div>
       <section className="bg-black py-24 px-6">
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
