import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white tracking-wide">
            MotoMini
          </h2>

          <p className="mt-3 text-[#D3AF37] ">
           Small Bikes. Endless Passion.
          </p>

          <p className="mt-2 text-sm text-[#D3AF37] ">
            Premium Miniature Motorcycle Collection
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm font-medium">
          <a href="#" className="hover:text-orange-500 duration-300">
            Home
          </a>

          <a href="#" className="hover:text-orange-500 duration-300">
            Shop
          </a>

          <a href="#" className="hover:text-orange-500 duration-300">
            About
          </a>

          <a href="#" className="hover:text-orange-500 duration-300">
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-2xl">
          <a href="#" className="hover:text-orange-500 duration-300">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-orange-500 duration-300">
            <FaFacebookF />
          </a>

          <a href="#" className="hover:text-orange-500 duration-300">
            <FaYoutube />
          </a>

          <a href="#" className="hover:text-orange-500 duration-300">
            <FaWhatsapp />
          </a>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 MotoMini. All Rights Reserved.
          </p>

          <p className="text-center text-sm text-gray-600 mt-2">
            Built for Collectors 💛
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;