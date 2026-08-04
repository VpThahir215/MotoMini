import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { placeOrder } from "../services/ orderService";
import {
  FiLock,
  FiDollarSign,
  FiCreditCard,
} from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";

const Checkout = () => {
  const [payment, setPayment] = useState("cod");
  const { state } = useLocation()
  const navigate = useNavigate()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;




  const product = state?.product
  const cartItems = state?.cartItems;
  const items = cartItems || (product ? [product] : []);
  const isBuyNow = !!product;
  const [quantity, setQuantity] = useState(product?.quantity || 1);
  const subtotal = isBuyNow
    ? product.price * quantity
    : cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  const orderProducts = isBuyNow
    ? [{ ...product, quantity }]
    : items;
  const finalTotal = Math.round(subtotal);
  console.log(product, "pro");
  console.log(state, "stae");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePlaceOrder = async () => {

  // Validation
  if (!formData.name.trim()) {
    toast.error("Please enter your full name.");
    return;
  }

  if (!emailRegex.test(formData.email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(formData.phone)) {
    toast.error("Phone number must contain exactly 10 digits.");
    return;
  }

  if (!formData.address.trim()) {
    toast.error("Please enter your address.");
    return;
  }

  if (!formData.city.trim()) {
    toast.error("Please enter your city.");
    return;
  }

  if (!formData.state.trim()) {
    toast.error("Please enter your state.");
    return;
  }

  if (!formData.pinCode.trim()) {
    toast.error("Please enter your pin code.");
    return;
  }

  if (!formData.country.trim()) {
    toast.error("Please enter your country.");
    return;
  }

  // Prepare products
  const orderProducts = isBuyNow
    ? [{ ...product, quantity }]
    : items;

  // Create order object
  const user=JSON.parse(localStorage.getItem("user"));
  console.log(user.id,"idddusrrrr");
  
  const order = {
      userId: user.id,
    customer: formData,
    paymentMethod: payment,
    products: orderProducts,
    subtotal,
    total: finalTotal,
    orderDate: new Date().toISOString(),
    status: "Pending",
  };

  try {
    // Save order to JSON Server
    await placeOrder(order);

    toast.success("🎉 Your order has been placed successfully!");

    navigate("/orderSucces");

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
  }
};



  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-y border-black py-20">

        <div className="max-w-3xl mx-auto text-center">

          <div className="flex justify-center items-center gap-2 text-yellow-500 uppercase tracking-[4px] text-sm">



          </div>

          <h1 className="text-6xl font-bold uppercase mt-6">

            Complete Your{" "}

            <span className="text-yellow-500">
              Order
            </span>

          </h1>

          <p className="text-gray-400 mt-8 text-xl max-w-xl mx-auto leading-8">

            Complete your purchase and bring your favorite miniature
            motorcycles home.

          </p>

        </div>

      </section>

      {/* FORM */}

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            {/* CONTACT */}

            <h2 className="text-yellow-500 uppercase tracking-[4px] font-semibold border-b b  ">

              Contact Information

            </h2>

            <div className="mt-10 space-y-8">

              <div>

                <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                  Full Name

                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Thahir"
                  className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

              <div>

                <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                  Email Address

                </label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="vpthahir3062003@gmail.com"
                  className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

              <div>

                <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                  Phone Number

                </label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+91 9946659082"
                  className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

            </div>

            {/* SHIPPING */}

            <h2 className="text-yellow-500 uppercase tracking-[4px] font-semibold border-b border-yellow-900 pb-6 mt-16">

              Shipping Address

            </h2>

            <div className="mt-10">

              <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                Address

              </label>

              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                type="text"
                placeholder="Malappuram,Tirurangadi,Kodinhi"
                className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
              />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>

                <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                  City

                </label>

                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="Kodinhi"
                  className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

              <div>

                <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                  State

                </label>

                <input
                  value={formData.state}
                  name="state"
                  onChange={handleChange}
                  type="text"
                  placeholder="Kerala"
                  className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

              <div>

                <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                  Pin Code

                </label>

                <input
                  value={formData.pinCode}
                  name="pinCode"
                  onChange={handleChange}
                  type="text"
                  placeholder="676309"
                  className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

              <div>

                <label className="block uppercase text-xs tracking-[3px] text-gray-400 mb-3">

                  Country

                </label>

                <input
                  value={formData.country}
                  name="country"
                  onChange={handleChange}
                  type="text"
                  placeholder="India"
                  className="w-full bg-[#141414] border border-yellow-900 px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

            </div>
            {/* PAYMENT */}

            <h2 className="text-yellow-500 uppercase tracking-[4px] font-semibold border-b border-yellow-900 pb-6 mt-16">
              Payment Method
            </h2>

            <div className="mt-10 border border-yellow-900">

              {/* Cash on Delivery */}

              <label
                className={`flex items-center gap-5 p-6 border-b border-yellow-900 cursor-pointer transition ${payment === "cod" ? "bg-[#171300]" : "bg-[#111]"
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                  className="accent-yellow-500 w-5 h-5"
                />

                <FiDollarSign className="text-yellow-500 text-2xl" />

                <div>
                  <h3 className="font-semibold text-lg">
                    Cash on Delivery
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Pay when your order arrives
                  </p>
                </div>
              </label>

              {/* UPI */}

              <label
                className={`flex items-center gap-5 p-6 border-b border-yellow-900 cursor-pointer transition ${payment === "upi" ? "bg-[#171300]" : "bg-[#111]"
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "upi"}
                  onChange={() => setPayment("upi")}
                  className="accent-yellow-500 w-5 h-5"
                />

                <span className="text-2xl">💳</span>

                <div>
                  <h3 className="font-semibold text-lg">
                    UPI
                  </h3>

                  <p className="text-gray-500 text-sm">
                    GPay, PhonePe, Paytm & more
                  </p>
                </div>
              </label>

              {/* CARD */}

              <label
                className={`flex items-center gap-5 p-6 border-b border-yellow-900 cursor-pointer transition ${payment === "card" ? "bg-[#171300]" : "bg-[#111]"
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                  className="accent-yellow-500 w-5 h-5"
                />

                <FiCreditCard className="text-yellow-500 text-2xl" />

                <div>
                  <h3 className="font-semibold text-lg">
                    Credit / Debit Card
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Visa, Mastercard, RuPay
                  </p>
                </div>
              </label>

              {/* NET BANKING */}

              <label
                className={`flex items-center gap-5 p-6 cursor-pointer transition ${payment === "bank" ? "bg-[#171300]" : "bg-[#111]"
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "bank"}
                  onChange={() => setPayment("bank")}
                  className="accent-yellow-500 w-5 h-5"
                />

                <FaUniversity className="text-yellow-500 text-2xl" />

                <div>
                  <h3 className="font-semibold text-lg">
                    Net Banking
                  </h3>

                  <p className="text-gray-500 text-sm">
                    All major banks supported
                  </p>
                </div>
              </label>

            </div>

            {/* PLACE ORDER */}

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-12 bg-yellow-500 text-black py-5 uppercase tracking-[4px] font-bold hover:bg-yellow-400 transition">
              Place Order →
            </button>

            <div className="flex justify-center items-center gap-2 mt-6 text-gray-500 text-sm">
              <FiLock className="text-yellow-500" />
              <span>Your payment information is secure & encrypted.</span>
            </div>

          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}



          <div className="lg:col-span-1">

            <div className="sticky top-28 bg-[#111] border border-yellow-700 rounded-lg overflow-hidden">

              <div className="border-b border-yellow-700 p-6">
                <h2 className="text-yellow-500 uppercase tracking-[3px] font-semibold">
                  Order Summary
                </h2>
              </div>

              <div className="p-6 space-y-6">

                {items.map((item) => (
                  <div key={item.id}>
                    <div className="flex gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />

                      <div className="flex-1">

                        <h3 className="font-semibold">
                          {item.name}
                        </h3>

                        {isBuyNow ? (
                          <div className="flex items-center border border-yellow-700 rounded-md w-fit mt-3">

                            <button
                              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                              className="w-8 h-8 hover:bg-yellow-500 hover:text-black"
                            >
                              -
                            </button>

                            <span className="w-10 text-center">
                              {quantity}
                            </span>

                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="w-8 h-8 hover:bg-yellow-500 hover:text-black"
                            >
                              +
                            </button>

                          </div>
                        ) : (
                          <p className="text-gray-400 mt-2">
                            Quantity : {item.quantity}
                          </p>
                        )}

                        <p className="text-yellow-500 font-bold mt-2">
                          ₹
                          {(
                            item.price *
                            (isBuyNow ? quantity : item.quantity)
                          ).toFixed(2)}
                        </p>

                      </div>

                    </div>

                    <hr className="border-yellow-700 mt-6" />
                  </div>
                ))}


                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-400">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery</span>
                  <span className="text-green-400">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Discount</span>
                  <span>₹0.00</span>
                </div>

                <hr className="border-yellow-700" />

                <div className="flex justify-between items-center">

                  <span className="text-xl font-semibold uppercase">
                    Total
                  </span>

                  <span className="text-3xl font-bold text-yellow-500">
                    ₹{finalTotal.toFixed(2)}
                  </span>

                </div>

                <p className="text-center text-sm text-gray-500">
                  Taxes included where applicable.
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>



  );
};

export default Checkout;

//           <div className="flex items-center border border-yellow-700 rounded-md w-fit mt-3">

//   <button
//     onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//     className="w-8 h-8 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
//   >
//     −
//   </button>

//   <span className="w-10 text-center font-semibold">
//     {quantity}
//   </span>

//   <button
//     onClick={() => setQuantity(quantity + 1)}
//     className="w-8 h-8 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
//   >
//     +
//   </button>

// </div>