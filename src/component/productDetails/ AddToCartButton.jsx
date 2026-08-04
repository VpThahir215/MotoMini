import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  addCartItem,
  getCartItem,
  updateCartItem,
} from "../../services/cartServices";

const AddToCartButton = ({ product }) => {
  const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
  
    

  const handleAddToCart = async () => {
    console.log("button clicked");
    

    if (!user) {
      toast.error("Please login to add products to your cart.");
      navigate("/login");
      return;
    }

    try {
      const existingItem = await getCartItem(
product.id,
  user.id
);
      console.log("product id to existingItem");
      

      if (existingItem) {
      
        
        await updateCartItem(existingItem.id, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          
    
        
          
        });
          console.log("incrase quandity");
      } else {
        await addCartItem({
            userId: user.id,
          productId: product.id,
          name: product.name,
          brand: product.brand,
          category: product.category,
          price: product.price,
          stock: product.stock,
          image: product.image,
          description: product.description,
          quantity: 1,
        });
      }
      
       toast.success("Product added to cart!");
console.log('added to json');

     
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
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