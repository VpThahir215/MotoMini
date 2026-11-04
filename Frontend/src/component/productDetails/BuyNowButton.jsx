import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyNowButton = ({ product }) => {
  const navigate = useNavigate();
  // const [quandity,setQuandity]=useState(1)

  

  // const handleBuyNow = () => {
  //     console.log(product);
  //   navigate("/checkout", {
  //     state: {
  //       product,
  //     },
  //   });
  // };
  const handleCartBotton= async ()=>{
    const user = JSON.parse(localStorage.getItem("user"));
       if (!user) {
      toast.error("Please login to add products to your cart.");
      navigate("/login");
      return;
    }
    navigate('/cart')
  }

  return (
    <div>
      
    <button
      onClick={handleCartBotton}
      className="w-full mt-4 border border-[#D3AF37] text-white py-3 rounded-lg hover:bg-[#D3AF37] hover:text-black transition"
    >
 Go to Cart ➜
    </button>
    </div>
  );
};

export default BuyNowButton;