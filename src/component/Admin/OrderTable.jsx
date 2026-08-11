import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiMoreHorizontal,
  FiEye,
} from "react-icons/fi";
import { getOredersAdmin } from "../../services/ orderService";
import Orders from "../../pages/admin/ Orders";
const OrderTable = () => {
  const [order,setOrder]=useState([])
  const [search,setSearch]=useState("")
  const [searchDebounce,setSearchDebouce]=useState("")

  console.log(search);
  useEffect(()=>{
    const timer=setTimeout(() => {
      setSearchDebouce(search)
    }, 1000);
    return clearTimeout(timer)
  },[search])
console.log("debounce",searchDebounce);


useEffect(()=>{
async function fetchOrder(){
  const data=await getOredersAdmin()
 
  setOrder(data)
   console.log("orderrrr",order);
  
  
}
fetchOrder()
},[])


  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "border-green-800 bg-green-950/30 text-green-500";

      case "Processing":
        return "border-yellow-800 bg-yellow-950/30 text-yellow-500";

      case "Shipped":
        return "border-blue-800 bg-blue-950/30 text-blue-500";

      case "Pending":
        return "border-[#6b5b1c] bg-[#1c1a12] text-[#D3AF37]";

      case "Cancelled":
        return "border-red-800 bg-red-950/30 text-red-500";

      default:
        return "border-gray-800 text-gray-500";
    }
  };
  return (
    <div className="min-h-screen bg-black px-8 py-8 text-white">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-[10px] tracking-[0.3em] text-gray-600">
            MANAGEMENT
          </p>

          <h1 className="mt-1 font-heading text-3xl tracking-widest text-[#D3AF37]">
            ORDERS
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Manage and track all customer orders
          </p>
        </div>

        <div className="border border-[#29230d] px-5 py-3">
          <p className="text-[9px] tracking-widest text-gray-600">
            TOTAL ORDERS
          </p>

          <p className="mt-1 text-xl font-semibold text-[#D3AF37]">
            {order.length}
          </p>
        </div>

      </div>


      {/* ================= FILTER BAR ================= */}

      <div className="mt-8 flex items-center justify-between border border-[#29230d] bg-[#080808] px-5 py-4">

        {/* Search */}

        <div className="flex w-80 items-center gap-3 border border-[#29230d] px-4 py-2.5">

          <FiSearch
            size={16}
            className="text-gray-600"
          />

          <input
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
            type="text"
            placeholder="Search Order Id or Product Name..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
          />

        </div>


        {/* Filters */}

        <div className="flex items-center gap-3">

        


          <select className="border border-[#29230d] bg-black px-4 py-2.5 text-xs text-gray-500 outline-none">

            <option>All Status</option>
            <option>Delivered</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Pending</option>
            <option>Cancelled</option>

          </select>

        </div>

      </div>


      {/* ================= ORDERS TABLE ================= */}

      <div className="mt-5 overflow-hidden border border-[#29230d]">

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b border-[#29230d] bg-[#080808] text-left">

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                ORDER ID
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                CUSTOMER
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                PRODUCT
              </th>
{/* 
              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                DATE
              </th> */}

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                AMOUNT
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                STATUS
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                ACTION
              </th>

            </tr>

          </thead>


          <tbody>

        {order.map((order) => (
  <tr
    key={order.id}
    className="border-b border-[#1c1c1c] transition hover:bg-[#0d0d0d]"
  >

    {/* Order ID */}
    <td className="px-5 py-5">
      <span className="text-sm font-medium text-[#D3AF37]">
        #{order.userId}
      </span>
    </td>

    {/* Customer */}
    <td className="px-5 py-5">
      <p className="text-sm text-gray-300">
        {order.customer.name}
      </p>

      <p className="mt-1 text-[10px] text-gray-700">
        {order.customer.phone}
      </p>

      <p className="mt-1 text-[10px] text-gray-700">
        {order.customer.city}, {order.customer.state}
      </p>
    </td>

    {/* Products */}
    <td className="px-5 py-5">
      <div className="flex flex-col gap-3">

        {order.products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-3"
          >

            <div className="h-10 w-10 overflow-hidden border border-[#29230d] bg-[#111]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm text-gray-300">
                {product.name}
              </p>

              <p className="text-[10px] text-gray-600">
                Qty: {product.quantity}
              </p>
            </div>

          </div>
        ))}

      </div>
    </td>


    {/* Amount */}
    <td className="px-5 py-5">
      <span className="text-sm font-semibold text-white">
        ₹{order.total}
      </span>
    </td>

    {/* Status */}
    <td className="px-5 py-5">
      <span
        className={`inline-block border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider ${getStatusStyle(
          order.status
        )}`}
      >
        {order.status}
      </span>
    </td>

    {/* Action */}
    <td className="px-5 py-5">
      <div className="flex items-center gap-3">

        <button className="text-gray-600 transition hover:text-[#D3AF37]">
          <FiEye size={17} />
        </button>

        <button className="text-gray-600 transition hover:text-[#D3AF37]">
          <FiMoreHorizontal size={17} />
        </button>

      </div>
    </td>

  </tr>
))}

          </tbody>

        </table>

      </div>


      {/* ================= PAGINATION ================= */}

      <div className="flex items-center justify-between border-x border-b border-[#29230d] bg-[#080808] px-5 py-4">

        <p className="text-[10px] text-gray-600">
          Showing 1–5 of 1,284 orders
        </p>

        <div className="flex items-center gap-2">

          <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-600">
            ←
          </button>

          <button className="border border-[#D3AF37] bg-[#1c1a12] px-3 py-2 text-xs text-[#D3AF37]">
            1
          </button>

          <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-500 hover:border-[#D3AF37] hover:text-[#D3AF37]">
            2
          </button>

          <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-500 hover:border-[#D3AF37] hover:text-[#D3AF37]">
            3
          </button>

          <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-600">
            →
          </button>

        </div>

      </div>

    </div>
  )
}

export default OrderTable
