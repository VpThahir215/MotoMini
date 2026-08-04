import React, { useEffect, useState } from "react";
import { getOrders } from "../services/ orderService";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data.reverse()); // newest order first
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-yellow-500 uppercase tracking-[5px] text-sm">
          MOTOMINI
        </p>

        <h1 className="text-6xl font-bold uppercase mt-4">
          My <span className="text-yellow-500">Orders</span>
        </h1>

        <p className="text-gray-500 uppercase tracking-[3px] mt-6">
          {orders.length} Orders Placed
        </p>

        <div className="mt-12 space-y-8">

          {orders.map((order) => (

            <div
              key={order.id}
              className="border border-yellow-900 bg-[#111]"
            >

              {/* Header */}

              <div className="flex justify-between items-center border-b border-yellow-900 px-6 py-5">

                <div>

                  <h2 className="text-yellow-500 text-2xl font-bold">
                    ORDER #{order.id}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </p>

                </div>

                <span className="px-5 py-2 bg-green-700 text-white uppercase text-sm rounded">
                  Delivered
                </span>

              </div>

              {/* Products */}

              {order.products.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-5 p-6 border-b border-yellow-900"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">

                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Quantity : {item.quantity}
                    </p>

                    <p className="text-yellow-500 font-bold mt-2">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

              ))}

              {/* Summary */}

              <div className="p-6 space-y-3">

                <p className="text-gray-400">
                  Customer :
                  <span className="text-white ml-2">
                    {order.customer.name}
                  </span>
                </p>

                <p className="text-gray-400">
                  Payment :
                  <span className="text-white ml-2">
                    {order.paymentMethod}
                  </span>
                </p>

                <p className="text-gray-400">
                  Address :
                  <span className="text-white ml-2">
                    {order.customer.address},{" "}
                    {order.customer.city},{" "}
                    {order.customer.state}
                  </span>
                </p>

                <div className="flex justify-between mt-6">

                  <span className="text-gray-400">
                    Subtotal
                  </span>

                  <span>
                    ₹{order.subtotal}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Shipping
                  </span>

                  <span className="text-green-400">
                    FREE
                  </span>

                </div>

                <div className="flex justify-between text-xl font-bold border-t border-yellow-900 pt-4">

                  <span>Total</span>

                  <span className="text-yellow-500">
                    ₹{order.total}
                  </span>

                </div>

              </div>

            </div>

          ))}

          {orders.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No orders found.
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default MyOrders;