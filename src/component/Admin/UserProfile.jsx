import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiMail,
  FiUser,
  FiShield,
  FiLogOut,
} from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
     const navigate = useNavigate();
     const location=useLocation()
     const user=location.state?.user
     console.log(user);
     



  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success(
         <div>
    <p>Leaving MotoMini?</p>
    <p>Your ride will be waiting when you return.</p>
  </div>
    )
    navigate("/login");
  };
  return (
     <div className="min-h-screen bg-black text-white px-4 py-10 md:px-10">

      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-[#D3AF37] transition"
        >
          <FiArrowLeft size={20} />
          Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Profile Header */}
        <div className="border border-[#D3AF37]/30 rounded-2xl overflow-hidden">

          {/* Top Section */}
          <div className="bg-[#111] px-6 py-10 md:px-10">

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

              {/* Avatar */}
              <div className="w-28 h-28 rounded-full bg-[#D3AF37] text-black flex items-center justify-center text-5xl font-bold uppercase shadow-lg">
                {user.name.charAt(0)}
              </div>

              {/* User Name */}
              <div className="text-center md:text-left">
                <p className="text-[#D3AF37] text-sm uppercase tracking-[3px] mb-2">
                  My Profile
                </p>

                <h1 className="text-3xl md:text-4xl font-bold">
                  {user.name}
                </h1>

                <p className="text-gray-400 mt-2">
                  {user.email}
                </p>

                <span className="inline-block mt-4 px-4 py-1 rounded-full border border-[#D3AF37] text-[#D3AF37] text-sm uppercase">
                  {user.role}
                </span>
              </div>

            </div>
          </div>

          {/* User Details */}
          <div className="bg-black px-6 py-8 md:px-10">

            <h2 className="text-xl font-semibold mb-6">
              Account Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Name */}
              <div className="border border-gray-800 rounded-xl p-5 hover:border-[#D3AF37]/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <FiUser className="text-[#D3AF37]" size={20} />
                  <span className="text-gray-400 text-sm">
                    Full Name
                  </span>
                </div>

                <p className="text-lg">
                  {user.name}
                </p>
              </div>

              {/* Email */}
              <div className="border border-gray-800 rounded-xl p-5 hover:border-[#D3AF37]/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <FiMail className="text-[#D3AF37]" size={20} />
                  <span className="text-gray-400 text-sm">
                    Email Address
                  </span>
                </div>

                <p className="text-lg break-all">
                  {user.email}
                </p>
              </div>

              {/* User ID */}
              <div className="border border-gray-800 rounded-xl p-5 hover:border-[#D3AF37]/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <FiShield className="text-[#D3AF37]" size={20} />
                  <span className="text-gray-400 text-sm">
                    User ID
                  </span>
                </div>

                <p className="text-lg break-all">
                  {user.id}
                </p>
              </div>

              {/* Role */}
              <div className="border border-gray-800 rounded-xl p-5 hover:border-[#D3AF37]/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <FiShield className="text-[#D3AF37]" size={20} />
                  <span className="text-gray-400 text-sm">
                    Account Role
                  </span>
                </div>

                <p className="text-lg capitalize">
                  {user.role}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* About MotoMini */}
        <div className="mt-8 border border-gray-800 rounded-2xl p-6 md:p-10 bg-[#0b0b0b]">

          <div className="flex items-center gap-3 mb-6">
            <FaMotorcycle
              className="text-[#D3AF37]"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              About MotoMini
            </h2>
          </div>

          <p className="text-gray-400 leading-7">
            MotoMini is a miniature motorcycle e-commerce brand created
            for people who love motorcycles and collectible models.
            Our goal is to bring the passion of real motorcycles into
            small-scale models that enthusiasts can collect, display,
            and enjoy.
          </p>

          <p className="text-gray-400 leading-7 mt-4">
            From sport bikes and superbikes to adventure, classic,
            MotoGP, and limited-edition models, MotoMini brings a
            collection of miniature motorcycles together in one place.
          </p>

          <div className="mt-6">
            <p className="text-[#D3AF37] font-semibold tracking-wide">
              Small Bikes. Endless Passion.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <button
            onClick={() => navigate("/shop")}
            className="flex-1 py-3 rounded-lg border border-[#D3AF37] text-[#D3AF37] hover:bg-[#D3AF37] hover:text-black transition font-semibold"
          >
            Continue Shopping
          </button>

          <button
            onClick={handleLogout}
            className="flex-1 py-3 rounded-lg bg-[#D3AF37] text-black hover:bg-[#b9972f] transition font-semibold flex items-center justify-center gap-2"
          >
            <FiLogOut />
            Logout
          </button>

        </div>

      </div>
    </div>
  )
}

export default UserProfile
