import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getWishlist,
  deleteWishlistItem,
} from "../services/wishlistServices";

import {
  getCartItem,
  addCartItem,
  updateCartItem,
} from "../services/cartServices";

import { FiTrash2, FiShoppingCart } from "react-icons/fi";

const WishList = () => {
  const navigate = useNavigate();

  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchWishlist = async () => {
    const data = await getWishlist();
    setWishlistItems(data);
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeWishlist = async (id) => {
    await deleteWishlistItem(id);
    fetchWishlist();
    toast.success("Removed from wishlist");
  };

  const handleAddToCart = async (item) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please login first.");
      navigate("/login");
      return;
    }

    const existingItem = await getCartItem(item.productId);

    if (existingItem) {
      await updateCartItem(existingItem.id, {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      });
    } else {
      await addCartItem({
        productId: item.productId,
        name: item.name,
        brand: item.brand,
        category: item.category,
        price: item.price,
        stock: item.stock,
        image: item.image,
        description: item.description,
        quantity: 1,
      });
    }

    toast.success("Added to cart");
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center border border-yellow-700 rounded-xl p-10 max-w-lg w-full">

          <h1 className="text-4xl font-bold text-white">
            Your <span className="text-yellow-500">Wishlist</span> is Empty
          </h1>

          <p className="text-gray-400 mt-5 leading-7">
            Save your favourite miniature motorcycles here.
            <br />
            Start exploring and build your dream collection.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold uppercase hover:bg-yellow-400 transition"
          >
            Explore Shop
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold uppercase">
          MY <span className="text-yellow-500">WISHLIST</span>
        </h1>

        <p className="mt-3 text-gray-500 uppercase tracking-[3px]">
          {wishlistItems.length} Items Saved
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {wishlistItems.map((item) => (

            <div
              key={item.id}
              className="bg-[#111] border border-yellow-700 rounded-xl overflow-hidden hover:border-yellow-500 transition"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded ${
                    item.stock
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {item.stock ? "IN STOCK" : "OUT OF STOCK"}
                </span>

                <button
                  onClick={() => removeWishlist(item.id)}
                  className="absolute top-4 right-4 bg-black/70 p-2 rounded-full hover:bg-red-600 transition"
                >
                  <FiTrash2 size={18} />
                </button>

              </div>

              <div className="p-5">

                <p className="text-yellow-500 uppercase text-xs tracking-[3px]">
                  {item.category}
                </p>

                <h2 className="text-xl font-semibold mt-2 min-h-[60px]">
                  {item.name}
                </h2>

                <h3 className="text-3xl font-bold text-yellow-500 mt-5">
                  ₹{item.price.toFixed(2)}
                </h3>

                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={!item.stock}
                  className={`w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition ${
                    item.stock
                      ? "bg-yellow-500 text-black hover:bg-yellow-400"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <FiShoppingCart />
                  {item.stock ? "ADD TO CART" : "OUT OF STOCK"}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default WishList;