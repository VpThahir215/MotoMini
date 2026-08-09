import React from "react";
import {
  FiSearch,
  FiBell,
  FiMaximize,
  FiLogOut,
} from "react-icons/fi";

const AdminNavbar = () => {
    const user=JSON.parse(localStorage.getItem("admin"))
    console.log(user.name,"userrrrrrrrrrrr");
  return (
    <div>
          <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[#29230d] bg-[#080808] px-6">

      {/* Left Side */}
      <div>
       
      </div>

      {/* Right Side */}
 
      <div className="flex items-center gap-5">
          


        {/* Search */}
{/*        
       <div className="flex w-80 items-center gap-3 border border-[#29230d] px-4 py-2.5">
       
                 <FiSearch
                   size={16}
                   className="text-gray-600"
                 />
       
                 <input
                   type="text"
                   placeholder="Search orders..."
                   className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
                 />
       
               </div> */}
     
        {/* Notification */}
        <button
          type="button"
          className="relative text-gray-500 transition hover:text-[#D3AF37]"
        >
          <FiBell size={19} />

          {/* Notification dot */}
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D3AF37]" />
        </button>

        {/* Fullscreen */}
        <button
          type="button"
          className="text-gray-500 transition hover:text-[#D3AF37]"
        >
          <FiMaximize size={18} />
        </button>

        {/* Divider */}
        <div className="h-7 w-px bg-[#29230d]" />

        {/* Admin Profile */}
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D3AF37] text-xs font-bold text-black">
            {user?.name?.charAt(0)}
          </div>

          {/* Admin Info */}
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-white">
              Admin
            </p>

            <p className="text-[10px] text-gray-600">
            {user.name}
            </p>
          </div>

        </div>

        {/* Logout */}
        <button
          type="button"
          className="text-gray-500 transition hover:text-red-500"
        >
          <FiLogOut size={18} />
        </button>

      </div>

    </header>
  
    </div>
  )
}

export default AdminNavbar
