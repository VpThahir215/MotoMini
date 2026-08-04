import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { getCart, updateCartItem, deleteCartItem } from "../services/cartServices";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  // const subtotal = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );


  // const shipping = 12;
  // const total = subtotal + shipping;
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCart();
      setCartItems(data);
    };

    fetchCart();
  }, []);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;
  const increaseQuantity = async (item) => {
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
    };

    await updateCartItem(item.id, updatedItem);

    const data = await getCart();
    setCartItems(data);
  };
  const decreaseQuantity = async (item) => {
    if (item.quantity > 1) {
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
      };

      await updateCartItem(item.id, updatedItem);
    } else {
      await deleteCartItem(item.id);
    }

    const data = await getCart();
    setCartItems(data);
  };
  const removeItem = async (id) => {
    await deleteCartItem(id);

    const data = await getCart();
    setCartItems(data);
  };
 const handleCheckout = () => {
  navigate("/checkout", {
    state: {
      cartItems,
    },
  });
};

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center border border-yellow-700 rounded-xl p-10">

          <h1 className="text-4xl font-bold text-white">
            Your <span className="text-yellow-500">Cart</span> is Empty
          </h1>

          <p className="mt-5 text-gray-400 leading-7">
            Looks like you haven't added any mini rides yet.
            <br />
            Start exploring and find your next favorite model.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold uppercase hover:bg-yellow-400 transition"
          >
            Explore Shop
          </button>

        </div>
      </div>
    );
   
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold uppercase">
          YOUR <span className="text-yellow-500">CART</span>
        </h1>

        <p className="mt-3 text-gray-500 uppercase tracking-[4px]">
          {cartItems.length} Items
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 border border-yellow-700">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex justify-between items-center p-6 border-b border-yellow-700"
              >

                <div className="flex gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-28 object-cover rounded"
                  />

                  <div>

                    <p className="text-yellow-500 uppercase tracking-[3px] text-xs">
                      {item.category}
                    </p>

                    <h2 className="text-xl font-semibold mt-2">
                      {item.name}
                    </h2>

                    <div className="flex border border-yellow-700 w-fit mt-5">

                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="px-4 py-2 hover:bg-yellow-500 hover:text-black transition">
                        -
                      </button>

                      <span className="px-5 py-2 border-x border-yellow-700">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item)}
                        className="px-4 py-2 hover:bg-yellow-500 hover:text-black transition">
                        +
                      </button>

                    </div>

                    <div className="mt-4 flex gap-3">

                      <button
                        onClick={() => navigate("/checkout", {
                          state: {
                            product: item,
                          },
                        })}
                        className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 text-sm uppercase font-semibold hover:bg-yellow-400 transition"
                      >
                        Buy Now
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 text-sm uppercase hover:bg-red-500 hover:text-white transition"
                      >
                        <FiTrash2 />
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

                <div className="text-right">

                  <h2 className="text-3xl font-bold text-yellow-500">
                    ₹{item.price.toFixed(2)}
                  </h2>

                  {item.quantity > 1 && (
                    <p className="text-gray-500 mt-2">
                      ₹{item.price.toFixed(2)} each
                    </p>
                  )}

                </div>

              </div>

            ))}
          </div>

          {/* RIGHT SIDE */}

          <div className="border border-yellow-700  sticky top-28">

            <div className="border-b border-yellow-700 p-6">
              <h2 className="uppercase tracking-[3px] text-yellow-500 font-semibold">
                ORDER SUMMARY
              </h2>
            </div>

            <div className="p-6">

              <div className="flex justify-between mb-5">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-medium">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-5">
                <span className="text-gray-400">Shipping</span>
                <span className="text-green-400">
                  FREE
                </span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-gray-400">Delivery</span>
                <span className="text-green-400">
                  FREE
                </span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-400">Discount</span>
                <span className="text-green-400">
                  ₹0.00
                </span>
              </div>

              <hr className="border-yellow-700" />

              <div className="flex justify-between items-center mt-6">

                <span className="text-xl font-semibold uppercase">
                  Total
                </span>

                <span className="text-4xl font-bold text-yellow-500">
                  ₹{total.toFixed(2)}
                </span>

              </div>

              <button
              onClick={()=>handleCheckout()}
                className="w-full mt-10 bg-yellow-500 text-black py-4 font-bold uppercase tracking-wider hover:bg-yellow-400 transition duration-300 rounded"
              >
                Checkout →
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full mt-4 border border-yellow-700 py-4 uppercase tracking-wider hover:bg-white hover:text-black transition duration-300 rounded"
              >
                Continue Shopping
              </button>


            </div>

          </div>


        </div>

      </div>

    </div>
  );
};


export default Cart;