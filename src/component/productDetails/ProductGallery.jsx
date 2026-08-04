import React from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductGallery = ({ product }) => {
  const navigate = useNavigate();

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please login to use wishlist.");
      navigate("/login");
      return;
    }

    // Later you can save to JSON Server here
    toast.success("Added to Wishlist ❤️");
  };

  return (
    <div className="relative bg-zinc-900 rounded-xl overflow-hidden">

      {/* Heart Button */}
      <button
        onClick={handleWishlist}
        className="absolute top-4 right-4 z-10 bg-black/70 p-3 rounded-full text-white hover:bg-[#D3AF37] hover:text-black transition duration-300"
      >
        <FiHeart size={22} />
      </button>

      {/* Product Image */}
      <div className="flex justify-center items-center p-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-lg object-contain"
        />
      </div>

    </div>
  );
};

export default ProductGallery;