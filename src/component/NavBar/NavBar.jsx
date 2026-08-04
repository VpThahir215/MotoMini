import {
  FiMenu,
  FiHeart,
  FiShoppingBag,
  FiUser
} from "react-icons/fi";
import {Link,useLocation} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
   const location = useLocation();
   const navigate=useNavigate()
   const user = JSON.parse(localStorage.getItem("user"));

const [menuOpen, setMenuOpen] = useState(false);
   

  const isHome = location.pathname === "/";
  const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
};
  return (
    <header className={`fixed top-0 pb-0 left-0 w-full z-50  ${
    isHome ? "bg-transparent" : "bg-black"
  }`}>
      <div className="h-20 px-8 flex items-center justify-between">

       <div
  className={`flex items-center gap-3 cursor-pointer hover:text-[#D3AF37]  ${
    isHome ? "text-black" : "text-white "
  }`}
>
  <div className="relative">

  <div
    onClick={() => setMenuOpen(!menuOpen)}
    className={`flex items-center gap-3 cursor-pointer ${
      isHome ? "text-black" : "text-white"
    }`}
  >
    <FiMenu size={24} />
    <span className="text-sm">Menu</span>
  </div>

  {menuOpen && (
    <div className="absolute top-12 left-0 w-72 bg-[#161616] rounded-xl shadow-xl border border-gray-700 overflow-hidden">

      {user ? (
        <>
          <div className="p-5 border-b border-gray-700">
            <h2 className="text-[#D3AF37] font-bold text-lg">
              {user.name}
            </h2>

            <p className="text-gray-400 text-sm">
              {user.email}
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full text-left px-5 py-3 hover:bg-[#242424] text-white"
          >
            🏠 Home
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="w-full text-left px-5 py-3 hover:bg-[#242424] text-white"
          >
            🛍 Shop
          </button>

          <button
          onClick={()=>navigate('/wishlist')}
            className="w-full text-left px-5 py-3 hover:bg-[#242424] text-white"
          >
            ❤ Wishlist
          </button>

          <button
          onClick={()=>navigate('/order')}
            className="w-full text-left px-5 py-3 hover:bg-[#242424] text-white"
          >
            📦 Orders
          </button>

          <hr className="border-gray-700" />

          <button
            onClick={handleLogout}
            className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            🚪 Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="w-full py-4 text-[#D3AF37] hover:bg-[#242424]"
        >
          Login
        </button>
      )}

    </div>
  )}

</div>
</div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          

          <h1 className="text-lg tracking-[0.35em] text-amber-50">
            MOTOMINI
          </h1>

          <p className="text-[10px] tracking-[0.3em] text-[#D3AF37]">
           SMALL BIKES. ENDLESS PASSION.
          </p>
        </div>

        <div className="flex items-center gap-6">
         
        {user ? (
  <div className="flex items-center gap-4">
     <FiHeart
     
          onClick={()=>navigate('/wishlist')}
             size={22}
  className={`cursor-pointer hover:text-[#D3AF37] ${
    isHome ? "text-black" : "text-white"
  }`}
          />
    
    {/* Profile */}
    <div
      onClick={() => navigate("/profile")}
      className={`flex items-center gap-2 cursor-pointer hover:text-[#D3AF37] ${
        isHome ? "text-black" : "text-white"
      }`}
    >
      <FiUser size={22} />
      <span className="font-medium">
        {user.name.split(" ")[0]}
      </span>
    </div>

    {/* Cart */}
    <FiShoppingBag
      onClick={() => navigate("/cart")}
      size={22}
      className={`cursor-pointer hover:text-[#D3AF37] ${
        isHome ? "text-black" : "text-white"
      }`}
    />
  </div>
) : (
  <>
    {/* Login */}
    <FiUser
      onClick={() =>{
          toast.error("Please login to add products to your cart.");
        navigate("/login")}}
      size={22}
      className={`cursor-pointer hover:text-[#D3AF37] ${
        isHome ? "text-black" : "text-white"
      }`}
    />

    {/* Cart */}
    <FiShoppingBag
      onClick={() => {
          toast.error("Please login to add products to your cart.");
        navigate("/login")}}
      size={22}
      className={`cursor-pointer hover:text-[#D3AF37] ${
        isHome ? "text-black" : "text-white"
      }`}
    />
     <FiHeart
          onClick={()=>{
              toast.error("Please login to add products to your cart.");
            navigate('/login')}}
             size={22}
  className={`cursor-pointer hover:text-[#D3AF37] ${
    isHome ? "text-black" : "text-white"
  }`}
          />
  </>
)}

          

     
        </div>

      </div>
    </header>
  );
};

export default Navbar;