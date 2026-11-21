
import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { addCartItem } from "../../services/cartServices";

const AddToCartButton = ({ product }) => {
  const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem("user"));
  

  const handleAddToCart = async () => {
     if(!user){
    toast.success("Please login to add product your cart!");
     navigate("/login");
     return
  }
    try {
      console.log("Product ID:", product._id);

      // Send only the MongoDB product ID
      await addCartItem(product._id);

      toast.success("Product added to cart!");
    } catch (error) {
      console.error("Add to cart error:", error);

      if (error.response?.status === 401) {
        toast.error("Please login to add products to your cart.");
        navigate("/login");
        return;
      }

      toast.error("Unable to add product to cart.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="w-full bg-[#D3AF37] text-black font-semibold py-3 rounded-lg mt-6 hover:opacity-90 transition"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
