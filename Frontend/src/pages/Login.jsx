import React from "react";
import {useNavigate} from 'react-router-dom'
import { getUsers } from "../services/userService";
import toast from "react-hot-toast";
import { useState } from "react";
import {
  FiMail,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";

const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function handleLogin(e) {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please enter email and password.");
    return;
  }

  try {
    const users = await getUsers();

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );
   
    

    if (!user) {
      toast.error("Invalid Email or Password");
      return;
    }
     if (user.access === "blocked") {
      toast.error("Your MotoMini account has been blocked.");
      return;
    }

  if(user.role==="user"){
    localStorage.setItem("user", JSON.stringify(user));
    toast.success(`Hy ${user.name}! Welcome back to Moto Mini.`);
    navigate('/')

  }else if(user.role==="admin"){
     localStorage.setItem("admin", JSON.stringify(user));
    toast.success(`Hy ${user.name}! Welcome to Admin Module`)
    navigate('/admin')
  }
   




  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
}

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
              Welcome{" "}
              <span className="text-[#D3AF37]">Back</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Sign in to continue your MotoMini journey.
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-5">

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D3AF37]" />

              <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-[#111] border border-gray-700 rounded-xl py-4 pl-12 outline-none text-white focus:border-[#D3AF37]"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D3AF37]" />

              <input
                type="password"
                 onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#111] border border-gray-700 rounded-xl py-4 pl-12 outline-none text-white focus:border-[#D3AF37]"
              />
            </div>

            

            {/* Button */}
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-[#D3AF37] hover:bg-yellow-400 transition py-4 rounded-xl font-bold text-black flex justify-center items-center gap-3"
            >
              Login
              <FiArrowRight />
            </button>

            <p className="text-center text-gray-400">
              Don't have an account?{" "}
              <span onClick={()=>navigate('/register')} className="text-[#D3AF37] cursor-pointer hover:underline">
                Sign Up
              </span>
            </p>

          </form>

        </div>

      </div>

      {/* Right Side */}
      <div
        className="hidden lg:flex w-[60%] relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Gemini_Generated_Image_1pyejg1pyejg1pye.png')",
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

export default Login;