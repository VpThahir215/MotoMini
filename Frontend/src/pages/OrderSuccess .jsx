import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiCheck,
  FiArrowRight,
  FiTruck,
  FiPackage,
  FiMail,
} from "react-icons/fi";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const orderNumber = "MM-38472";

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl w-full text-center">

        {/* Success Icon */}

        <div className="mx-auto w-32 h-32 rounded-full border border-yellow-700 flex items-center justify-center relative">

          <div className="absolute inset-2 border border-yellow-500 rounded-full flex items-center justify-center">

            <FiCheck
              size={50}
              className="text-yellow-500"
            />

          </div>

        </div>

        {/* Brand */}

        <p className="mt-10 text-yellow-500 uppercase tracking-[6px] text-sm">

          MOTOMINI

        </p>

        {/* Title */}

        <h1 className="text-6xl font-bold uppercase mt-4">

          Order{" "}

          <span className="text-yellow-500">

            Confirmed

          </span>

        </h1>

        {/* Description */}

        <p className="text-gray-400 text-lg mt-8 max-w-xl mx-auto leading-8">

          Thank you for your purchase.

          Your miniature bikes are being packed and

          will be on their way soon.

        </p>

        {/* Order Number */}

        <div className="inline-flex items-center gap-5 border border-yellow-700 px-8 py-5 mt-12">

          <span className="uppercase tracking-[3px] text-gray-400 text-sm">

            Order Number

          </span>

          <span className="text-yellow-500 text-3xl font-bold">

            {orderNumber}

          </span>

        </div>

        {/* Status Cards */}

        <div className="grid md:grid-cols-3 mt-16 border border-yellow-900">

          {/* Card 1 */}

          <div className="border-r border-yellow-900 p-10">

            <FiPackage
              size={36}
              className="mx-auto text-yellow-500"
            />

            <h2 className="uppercase tracking-[3px] text-yellow-500 mt-8">

              Processing

            </h2>

            <p className="text-gray-500 mt-4 leading-7">

              Order received & confirmed.

            </p>

          </div>

          {/* Card 2 */}

          <div className="border-r border-yellow-900 p-10">

            <FiTruck
              size={36}
              className="mx-auto text-yellow-500"
            />

            <h2 className="uppercase tracking-[3px] text-yellow-500 mt-8">

              Shipping

            </h2>

            <p className="text-gray-500 mt-4 leading-7">

              Estimated delivery

              <br />

              3–5 business days.

            </p>

          </div>

          {/* Card 3 */}

          <div className="p-10">

            <FiMail
              size={36}
              className="mx-auto text-yellow-500"
            />

            <h2 className="uppercase tracking-[3px] text-yellow-500 mt-8">

              Confirmation

            </h2>

            <p className="text-gray-500 mt-4 leading-7">

              A confirmation email

              has been sent.

            </p>

          </div>

        </div>
                {/* Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">

          <button
            onClick={() => navigate("/shop")}
            className="group bg-yellow-500 hover:bg-yellow-400 text-black uppercase tracking-[3px] font-bold px-12 py-5 transition duration-300 flex items-center justify-center gap-3"
          >
            Continue Shopping

            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />

          </button>

          <button
            onClick={() => navigate("/order")}
            className="border border-yellow-700 hover:border-yellow-500 hover:text-yellow-500 uppercase tracking-[3px] font-bold px-12 py-5 transition duration-300"
          >
            View My Orders →
          </button>

        </div>

        {/* Footer */}

        <p className="mt-10 text-gray-500 text-sm">

          Need help?

          <span className="text-yellow-500 cursor-pointer hover:underline ml-1">

            Contact MotoMini Support

          </span>

        </p>

      </div>

    </div>
  );
};

export default OrderSuccess;