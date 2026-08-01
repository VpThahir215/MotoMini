import React from "react";

const cartItems = [
  {
    id: 1,
    category: "DIE-CAST MODEL",
    name: "Honda Monkey 125 — Scale 1:12",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
    quantity: 1,
    price: 89.99,
  },
  {
    id: 2,
    category: "APPAREL",
    name: "MotoMini Rider Jacket — Black/Gold",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    quantity: 2,
    price: 149.0,
  },
  {
    id: 3,
    category: "DIE-CAST MODEL",
    name: "Kawasaki Z125 Pro — Scale 1:6",
    image:
      "https://images.unsplash.com/photo-1558980394-df39f6d07d5f?w=500",
    quantity: 1,
    price: 219.0,
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 12;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-5xl font-bold uppercase">
          YOUR <span className="text-yellow-500">CART</span>
        </h1>

        <p className="text-gray-500 uppercase tracking-[4px] mt-4">
          {cartItems.length} ITEMS
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 border border-yellow-700">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-6 border-b border-yellow-700"
              >
                <div className="flex gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-24 object-cover"
                  />

                  <div>
                    <p className="text-yellow-500 text-xs tracking-[3px] uppercase">
                      {item.category}
                    </p>

                    <h2 className="text-xl font-semibold mt-2">
                      {item.name}
                    </h2>

                    {/* Quantity */}
                    <div className="flex border border-yellow-700 w-fit mt-5">
                      <button className="px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                        −
                      </button>

                      <span className="px-5 py-2 border-x border-yellow-700">
                        {item.quantity}
                      </span>

                      <button className="px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <h2 className="text-yellow-500 text-3xl font-bold">
                    ${item.price.toFixed(2)}
                  </h2>

                  {item.quantity > 1 && (
                    <p className="text-gray-500 text-sm mt-2">
                      ${item.price.toFixed(2)} each
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="border border-yellow-700 h-fit">
            <div className="border-b border-yellow-700 p-6">
              <h2 className="uppercase tracking-[3px] text-yellow-500">
                ORDER SUMMARY
              </h2>
            </div>

            <div className="p-6">
              <div className="flex justify-between mb-5">
                <span className="text-gray-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-400">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <hr className="border-yellow-700" />

              <div className="flex justify-between mt-6 mb-8">
                <span className="font-bold uppercase">TOTAL</span>

                <span className="text-3xl font-bold text-yellow-500">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="flex">
                <input
                  type="text"
                  placeholder="PROMO CODE"
                  className="flex-1 bg-transparent border border-yellow-700 px-4 py-3 outline-none"
                />

                <button className="border border-yellow-700 px-6 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition">
                  APPLY
                </button>
              </div>

              <button className="w-full bg-yellow-500 text-black py-4 mt-8 font-bold uppercase hover:bg-yellow-400 transition">
                CHECKOUT →
              </button>

              <button className="w-full border border-yellow-700 py-4 mt-4 uppercase hover:bg-white hover:text-black transition">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;