import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiMoreHorizontal,
  FiEye,
} from "react-icons/fi";
import { getOredersAdmin } from "../../services/ orderService";
import Orders from "../../pages/admin/ Orders";
import { UpdateOrder } from "../../services/ orderService";
import toast from "react-hot-toast";
const OrderTable = () => {
  const [order,setOrder]=useState([])
  const [search,setSearch]=useState("")
  const [searchDebounce,setSearchDebouce]=useState("")
  const [status, setStatus] = useState("All Status");

  console.log(search);
  useEffect(()=>{
    const timer=setTimeout(() => {
      setSearchDebouce(search)
    },1000);
    return ()=> clearTimeout(timer)
   
  },[search])



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
 const filteredOrder = order.filter((val) => {
  const searchValue = searchDebounce.toLowerCase();

  const matchesUserId = String(val.userId)
    .toLowerCase()
    .includes(searchValue);

  const matchesStatus =
    status === "All Status" || val.status === status;

  return matchesUserId && matchesStatus;

 
});
const fetchOrder=async ()=>{
  try{
    const data=await getOredersAdmin()
    setOrder(data)
  }catch(error){
    console.log(error);
    
  }
}
// useEffect(()=>{
//   fetchOrder()
// },[])

 const handleStatusChange = async (orderId, newStatus) => {
  console.log("Order:", orderId);
  console.log("New status:", newStatus);
try{
  await UpdateOrder(orderId,newStatus)
  console.log("status updated");
  await fetchOrder()


// let date=new Date()
// console.log(date);
// setOrder((prevOrder)=>{
//   console.log("before update",prevOrder);
//  const updated= prevOrder.map((val)=>{
//   order.id===orderId?{...order,status:newStatus}:order
//   })
//   console.log("after update",prevOrder);
//   return updated
// })

// setOrder((prvOrder)=>
  // console.log("Before Update",prvOrder);
  
//  prvOrder.map((val)=>
//    order.id===orderId?{...order,status:newStatus}:order
// ))
//  toast.success("Order status updated");

}catch(error){
  console.log(error);

    toast.error("Failed to update status");
  
}
 
};
const pendingCount = order.filter(
  (val) => val.status === "Pending"
).length;
console.log("pedndddddd",pendingCount);

const processingCount = order.filter(
  (val) => val.status === "Processing"
).length;

const shippedCount = order.filter(
  (val) => val.status === "Shipped"
).length;

const deliveredCount = order.filter(
  (val) => val.status === "Delivered"
).length;

const cancelledCount = order.filter(
  (val) => val.status === "Cancelled"
).length;
  return (
   <div className="min-h-screen bg-black px-4 py-4 text-white md:px-6 md:py-6 lg:px-8 lg:py-8">

     {/* ================= HEADER ================= */}
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

  <div>
    <p className="text-[10px] tracking-[0.3em] text-gray-600">
      MANAGEMENT
    </p>
<h1 className="mt-1 font-heading text-2xl md:text-3xl tracking-widest text-[#D3AF37]">
  ORDERS
</h1>

    <p className="mt-2 text-xs text-gray-600">
      Manage and track all customer orders
    </p>
  </div>

  {/* Total Orders */}
  <div className="w-full border border-[#29230d] bg-[#080808] px-5 py-4 sm:w-auto sm:min-w-[160px]">
    <p className="text-[9px] tracking-widest text-gray-600">
      TOTAL ORDERS
    </p>

    <p className="mt-1 text-2xl font-semibold text-[#D3AF37]">
      {order.length}
    </p>
  </div>

</div>


{/* ================= ORDER STATUS ================= */}
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
  {/* Pending */}
  <div className="border border-[#29230d] bg-[#080808] p-4 md:p-5 transition hover:border-[#D3AF37]">
    <p className="text-[9px] uppercase tracking-widest text-gray-600">
      Pending
    </p>

    <p className="mt-2 text-2xl font-semibold text-[#D3AF37]">
      {pendingCount}
    </p>
  </div>


  {/* Processing */}
  <div className="border border-[#29230d] bg-[#080808] px-5 py-4">
    <p className="text-[9px] uppercase tracking-widest text-gray-600">
      Processing
    </p>

    <p className="mt-2 text-2xl font-semibold text-yellow-500">
      {processingCount}
    </p>
  </div>


  {/* Shipped */}
  <div className="border border-[#29230d] bg-[#080808] px-5 py-4">
    <p className="text-[9px] uppercase tracking-widest text-gray-600">
      Shipped
    </p>

    <p className="mt-2 text-2xl font-semibold text-blue-500">
      {shippedCount}
    </p>
  </div>


  {/* Delivered */}
  <div className="border border-[#29230d] bg-[#080808] px-5 py-4">
    <p className="text-[9px] uppercase tracking-widest text-gray-600">
      Delivered
    </p>

    <p className="mt-2 text-2xl font-semibold text-green-500">
      {deliveredCount}
    </p>
  </div>


  {/* Cancelled */}
  <div className="border border-[#29230d] bg-[#080808] px-5 py-4">
    <p className="text-[9px] uppercase tracking-widest text-gray-600">
      Cancelled
    </p>

    <p className="mt-2 text-2xl font-semibold text-red-500">
      {cancelledCount}
    </p>
  </div>

</div>


      {/* ================= FILTER BAR ================= */}
<div className="mt-8 flex flex-col gap-4 border border-[#29230d] bg-[#080808] p-4 md:flex-row md:items-center md:justify-between md:px-5 md:py-4">

        {/* Search */}

        <div className="flex w-full max-w-md items-center gap-3 border border-[#29230d] px-4 py-2.5">

          <FiSearch
            size={16}
            className="text-gray-600"
          />

          <input
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
            type="text"
            placeholder="Search Order Id..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
          />

        </div>


        {/* Filters */}

        <div className="flex items-center gap-3">

        


          <select
           value={status}
  onChange={(e) => setStatus(e.target.value)}
         className="w-full border border-[#29230d] bg-black px-4 py-2.5 text-xs text-gray-500 outline-none md:w-auto">

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

  <div className="mt-5 overflow-x-auto rounded-lg border border-[#29230d] bg-[#080808]">
  <table className="min-w-[850px] w-full border-collapse">
    {/* Header */}
    <thead>
      <tr className="border-b border-[#29230d] bg-[#0d0d0d] text-left">
        {["ORDER ID", "CUSTOMER", "PRODUCT", "AMOUNT", "STATUS", "ACTION"].map(
          (heading) => (
            <th
              key={heading}
              className="px-4 py-3 text-[10px] font-medium tracking-[0.2em] text-gray-500 md:px-5 md:py-4"
            >
              {heading}
            </th>
          )
        )}
      </tr>
    </thead>

    {/* Body */}
    <tbody>
      {filteredOrder.map((order) => (
        <tr
          key={order.id}
          className="border-b border-[#1c1c1c] transition-colors duration-200 hover:bg-[#111111]"
        >
          {/* Order ID */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <span className="text-xs font-semibold text-[#D3AF37] md:text-sm">
              #{order.userId}
            </span>
          </td>

          {/* Customer */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <div className="space-y-1">
              <p className="text-xs font-medium text-white md:text-sm">
                {order.customer?.name}
              </p>

              <p className="text-[10px] text-gray-500">
                {order.customer?.phone}
              </p>

              <p className="text-[10px] text-gray-600">
                {order.customer?.city}, {order.customer?.state}
              </p>
            </div>
          </td>

          {/* Products */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <div className="flex flex-col gap-3">
              {order.products?.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3"
                >
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded border border-[#29230d] bg-[#111]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-gray-300 md:text-sm">
                      {product.name}
                    </p>

                    <p className="mt-1 text-[10px] text-gray-600">
                      Qty: {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </td>

          {/* Amount */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <span className="text-xs font-semibold text-[#D3AF37] md:text-sm">
              ₹{order.total}
            </span>
          </td>

          {/* Current Status */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <span
              className={`inline-flex rounded border px-2 py-1 text-[9px] font-semibold uppercase tracking-wider md:px-3 md:py-1.5 ${getStatusStyle(
                order.status
              )}`}
            >
              {order.status}
            </span>
          </td>

          {/* Change Status */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <select
              value={order.status}
              onChange={(e) =>
                handleStatusChange(order.id, e.target.value)
              }
              className={`w-full min-w-[120px] rounded border px-2 py-2 text-[10px] font-semibold uppercase outline-none transition-colors md:w-auto ${getStatusStyle(
                order.status
              )}`}
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* ================= PAGINATION ================= */}

      {/* <div className="flex items-center justify-between border-x border-b border-[#29230d] bg-[#080808] px-5 py-4">

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

      </div> */}

    </div>
  )
}

export default OrderTable
