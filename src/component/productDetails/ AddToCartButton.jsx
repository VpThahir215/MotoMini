import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const  AddToCartButton = () => {
  const navigate=useNavigate()

       const handleAddToCart = () => {
        console.log("clicked");
        
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    

    if (!user) {
      toast.error("Please login to add products to your cart.");
      navigate("/login");
     
      return;
    }


    toast.success("Product added to cart!");
  };
  return (
    <div>
 <button 
 onClick={handleAddToCart}
 className="w-full bg-[#D3AF37] text-black font-semibold py-3 rounded-lg mt-6 hover:opacity-90 transition">
      Add To Cart
    </button>      
    </div>
  )
}

export default  AddToCartButton
