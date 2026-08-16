import React from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  addCartItem,
  getCartItem,
  updateCartItem,
} from "../../services/cartServices";
import {
  getWishlistItem,
  addWishlistItem,
} from "../../services/wishlistServices";


const ProductGallery = ({ product,feature}) => {


  
  const navigate = useNavigate();

  

const handleWishlist = async () => {
  console.log("called handleWishlist");
  
  event.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  

  if (!user) {
    toast.error("Please login first.");
    navigate("/login");
    return;
  }
  const existingItem = await getCartItem(
  product.id,
  user.id
);
console.log("add existingItem");

  if (existingItem) {
    toast("Already in wishlist ❤️");
    return;
  }
console.log( "befor add");

  await addWishlistItem({
       userId: user.id,
    productId: product.id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: product.price,
    stock: product.stock,
    image: product.image,
    description: product.description,
  });
console.log("after add");

  toast.success("Added to Wishlist ❤️");
};
  return (
    <div className="relative bg-zinc-900 rounded-xl overflow-hidden">

      {/* Heart Button */}
    

      {/* Product Image */}
      <div className="flex justify-center items-center p-8">


        {
          feature?  ( <img
          src={feature.image}
          alt={feature.title}
          className="w-full max-w-lg object-contain"
        />) : (
          <>
          <button
        onClick={handleWishlist}
        className="absolute top-4 right-4 z-10 bg-black/70 p-3 rounded-full text-white hover:bg-[#D3AF37] hover:text-black transition duration-300"
      >
        <FiHeart size={22} />
      </button>
         <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-lg object-contain"
        />
        </>
        )}
       
      </div>

    </div>
  );
};

export default ProductGallery;