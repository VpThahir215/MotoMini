import React from "react";

const wishlistItems = [
  {
    id: 1,
    category: "DIE-CAST MODEL",
    name: "Honda Monkey 125 — Scale 1:12",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
    stock: true,
  },
  {
    id: 2,
    category: "APPAREL",
    name: "MotoMini Rider Jacket — Black/Gold",
    price: 149.0,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
    stock: true,
  },
  {
    id: 3,
    category: "DIE-CAST MODEL",
    name: "Kawasaki Z125 Pro — Scale 1:6",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1558980394-df39f6d07d5?w=600",
    stock: false,
  },
  {
    id: 4,
    category: "DIE-CAST MODEL",
    name: "Royal Enfield Bullet 350 — Scale 1:10",
    price: 134,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
    stock: true,
  },
  {
    id: 5,
    category: "GEAR",
    name: "MotoMini Helmet — Gloss Black",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    stock: false,
  },
  {
    id: 6,
    category: "ACCESSORIES",
    name: "Mini Bike Display Stand — Gold Edition",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
    stock: true,
  },
];

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-5xl font-bold uppercase">
          MY <span className="text-yellow-500">WISHLIST</span>
        </h1>

        <p className="text-gray-500 uppercase tracking-[3px] mt-3">
          {wishlistItems.length} Items Saved
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-yellow-800 mt-12">

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="border border-yellow-800 bg-[#111] group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-56 object-cover transition duration-500 group-hover:scale-105 ${
                    !item.stock && "opacity-40"
                  }`}
                />

                {/* Stock Badge */}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${
                    item.stock
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {item.stock ? "IN STOCK" : "OUT OF STOCK"}
                </span>

                {/* Remove Button */}
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-gray-600 text-white hover:bg-red-600 transition">
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-5">

                <p className="text-yellow-500 text-xs uppercase tracking-[3px]">
                  {item.category}
                </p>

                <h2 className="mt-2 text-xl font-medium min-h-[60px]">
                  {item.name}
                </h2>

                <div className="flex justify-between items-center mt-6">

                  <h3 className="text-3xl font-bold text-yellow-500">
                    ${item.price.toFixed(2)}
                  </h3>

                  {item.stock ? (
                    <button className="bg-yellow-500 text-black px-6 py-3 font-bold uppercase hover:bg-yellow-400 transition">
                      Add To Cart
                    </button>
                  ) : (
                    <button className="bg-gray-800 text-gray-400 px-6 py-3 font-bold uppercase cursor-not-allowed">
                      Notify Me
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Wishlist;