import {
  FiMenu,
  FiHeart,
  FiShoppingBag,
  FiUser
} from "react-icons/fi";
import {Link,useLocation} from 'react-router-dom'


const Navbar = () => {
   const location = useLocation();

  const isHome = location.pathname === "/";
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
  <FiMenu size={24} />
  <span className="text-sm">Menu</span>
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
          <FiUser
          size={22}
  className={`cursor-pointer hover:text-[#D3AF37] ${
    isHome ? "text-black" : "text-white"
  }`}
          />

          <FiHeart
             size={22}
  className={`cursor-pointer hover:text-[#D3AF37] ${
    isHome ? "text-black" : "text-white"
  }`}
          />

         <FiShoppingBag
  size={22}
  className={`cursor-pointer hover:text-[#D3AF37] ${
    isHome ? "text-black" : "text-white"
  }`}
/>
        </div>

      </div>
    </header>
  );
};

export default Navbar;