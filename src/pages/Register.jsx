import React from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";

const Register = () => {
  return (
    <section className="w-full h-screen flex overflow-hidden bg-black">

      {/* Left Side */}
      <div className="w-full lg:w-[40%] bg-black flex items-center justify-center px-10">

        <div className="w-full max-w-md">

          {/* Logo */}
          <h1 className="text-5xl font-extrabold tracking-[8px] text-[#D3AF37]">
            MOTOMINI
          </h1>

          <p className="text-[#D3AF37] uppercase tracking-[5px] mt-2 text-sm">
            Small Bikes. Endless Passion.
          </p>

          {/* Heading */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-white">
              Create Your{" "}
              <span className="text-[#D3AF37]">Account</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Join the MotoMini community today.
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-5">

            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D3AF37]" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#111] border border-gray-700 rounded-xl py-4 pl-12 outline-none text-white focus:border-[#D3AF37]"
              />
            </div>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D3AF37]" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#111] border border-gray-700 rounded-xl py-4 pl-12 outline-none text-white focus:border-[#D3AF37]"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D3AF37]" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#111] border border-gray-700 rounded-xl py-4 pl-12 outline-none text-white focus:border-[#D3AF37]"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D3AF37]" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-[#111] border border-gray-700 rounded-xl py-4 pl-12 outline-none text-white focus:border-[#D3AF37]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D3AF37] hover:bg-yellow-400 transition py-4 rounded-xl font-bold text-black flex justify-center items-center gap-3"
            >
              Sign Up
              <FiArrowRight />
            </button>

            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <span className="text-[#D3AF37] cursor-pointer hover:underline">
                Sign In
              </span>
            </p>

          </form>

        </div>
      </div>

      {/* Right Side */}
      <div
        className="hidden lg:flex w-[60%] relative bg-cover bg-center"
        style={{
        backgroundImage: "url('/Gemini_Generated_Image_1pyejg1pyejg1pye.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gold Overlay */}
        <div className="absolute inset-0 bg-[#D3AF37]/35"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center px-20">

          <div>

          

            <h1 className="text-7xl font-black uppercase leading-none text-black">
              Every Bike
              <br />
              Has A Story.
            </h1>

            <h2 className="text-5xl font-bold uppercase mt-5 text-white leading-tight">
             We Miniaturize
              <br />
              The Legend.
            </h2>

            <div className="w-44 h-1 bg-black mt-10"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Register;