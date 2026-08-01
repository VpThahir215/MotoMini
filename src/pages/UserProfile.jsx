import React from 'react'
import {useNavigate} from 'react-router-dom'

const UserProfile = () => {
     const user = JSON.parse(localStorage.getItem("user"));
     const navigate=useNavigate()
  return (
    <div>
      <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-xl">

        <div className="flex justify-center">
  <div className="w-28 h-28 rounded-full border-4 border-black bg-black flex items-center justify-center shadow-lg shadow-[#D3AF37]/20">
    <span className="text-6xl font-extrabold text-[#D3AF37] uppercase select-none">
      {user?.name?.charAt(0)}
    </span>
  </div>
</div>

        {/* Name */}
        <div className="text-center mt-8">

          <h1 className="text-5xl font-black uppercase tracking-wide text-white">
            {user?.name?.split(" ")[0]}
            <span className="text-[#D3AF37]">
              {" "}
              {user?.name?.split(" ")[1] || ""}
            </span>
          </h1>

          <p className="text-gray-500 mt-2">
            @{user?.name?.toLowerCase().replace(/\s+/g, "")}
          </p>

        </div>

        {/* User Info */}
        <div className="mt-12 border border-[#3a3111] bg-[#111111]">

          <div className="flex justify-between items-center px-8 py-6 border-b border-[#3a3111]">

            <span className="uppercase tracking-[3px] text-xs text-gray-500">
              Full Name
            </span>

            <span className="text-white font-medium">
              {user?.name}
            </span>

          </div>

          <div className="flex justify-between items-center px-8 py-6">

            <span className="uppercase tracking-[3px] text-xs text-gray-500">
              Email Address
            </span>

            <span className="text-white font-medium">
              {user?.email}
            </span>

          </div>

        </div>

        {/* About */}
        <div className="mt-10 border border-[#3a3111] bg-[#111111] p-8">

          <h2 className="uppercase tracking-[4px] text-sm text-[#D3AF37] font-bold">
            About MotoMini
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Welcome to <span className="text-white font-semibold">MotoMini</span>,
            your destination for premium miniature motorcycles. Explore
            beautifully crafted die-cast models inspired by legendary bikes from
            around the world. Build your dream collection and enjoy every detail
            in miniature.
          </p>

        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/shop")}
          className="mt-10 w-full bg-[#D3AF37] text-black py-5 font-bold uppercase tracking-wider hover:bg-yellow-400 transition"
        >
          Explore Collection →
        </button>
        <button
  onClick={() => {
    localStorage.removeItem("user");
    navigate("/login");
  }}
  className="mt-4 w-full border border-red-500 text-red-500 py-4 font-bold uppercase hover:bg-red-500 hover:text-white transition"
>
  Logout
</button>

      </div>

    </section>
    </div>
  )
}

export default UserProfile
