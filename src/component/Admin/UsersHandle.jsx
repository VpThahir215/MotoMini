import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { getUsers } from "../../services/userService";
import { data, useNavigate } from "react-router-dom";
import { deleteUser } from "../../services/userService";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const UsersHandle = () => {
  const [user,setUser]=useState([])
  const navigate=useNavigate()
  const [search,setSearch]=useState("")
  const [serchDebounce,setSearchDebouce]=useState("")


useEffect(()=>{
  async function fetchUser(){
    const data=await getUsers('/users')
    console.log("userrrrrdaaataaaaa",data);
    setUser(data)
    
    
  }
fetchUser()
},[])

       async   function deleteHandle(id){
        console.log("IDDDDD",id);
         const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) {
  toast.error("Delete cancelled")
    
     return
    
  } 
  try{
     
 await   deleteUser(id)
    toast.success("Deleting:", id);
     const data=await getUsers()
     setUser(data)


 }catch(error){
    console.log(error);
    
  }
       
     }


  useEffect(()=>{
    const timer=setTimeout(()=>{
      setSearchDebouce(search)
    },1000)
    return ()=>{
      clearTimeout(timer)
    }
  },[search])








   

const getStatusStyle = (role) => {
  return role === "admin"
    ? "border-[#D3AF37] text-[#D3AF37]"
    : "border-white text-white";
};

const getAccesStyle = (access) => {
  return access === "blocked"
    ? "border-red-500 text-red-500"
    : "border-green-500 text-green-500";
};

 const blockedCount=user.filter((val)=>{
 return   val.access==="blocked"

    
 }).length
     console.log("blockeeedd",blockedCount);

     const active=user.length-blockedCount
     console.log("Active",active);

     const filteredUser=user.filter((val)=>{
      const searchValue=serchDebounce.toLowerCase()
      return val.name.toLowerCase().includes(searchValue)
     })
     

  return (
    <div className="min-h-screen bg-black px-8 py-8 text-white">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <div>
    <p className="text-[10px] tracking-[0.3em] text-gray-600">
      MANAGEMENT
    </p>

    <h1 className="mt-1 font-heading text-2xl md:text-3xl tracking-widest text-[#D3AF37]">
      USERS
    </h1>

    <p className="mt-2 text-xs text-gray-600">
      Manage registered MotoMini customers
    </p>
  </div>

  <div className="w-full border border-[#29230d] bg-[#080808] px-5 py-4 md:w-auto md:min-w-[160px]">
    <p className="text-[9px] tracking-widest text-gray-600">
      TOTAL USERS
    </p>

    <p className="mt-1 text-xl font-semibold text-[#D3AF37]">
      {user.length}
    </p>
  </div>
</div>


      {/* ================= SUMMARY ================= */}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div className="border border-[#29230d] bg-[#080808] p-5">
    <p className="text-[9px] tracking-widest text-gray-600">TOTAL USERS</p>
    <p className="mt-2 text-2xl font-semibold text-[#D3AF37]">
      {user.length}
    </p>
  </div>

  <div className="border border-[#29230d] bg-[#080808] p-5">
    <p className="text-[9px] tracking-widest text-gray-600">ACTIVE USERS</p>
    <p className="mt-2 text-2xl font-semibold text-green-500">
      {active}
    </p>
  </div>

  <div className="border border-[#29230d] bg-[#080808] p-5">
    <p className="text-[9px] tracking-widest text-gray-600">BLOCKED USERS</p>
    <p className="mt-2 text-2xl font-semibold text-red-500">
      {blockedCount}
    </p>
  </div>
</div>


      {/* ================= SEARCH + FILTER ================= */}

     <div className="mt-6 flex flex-col gap-4 border border-[#29230d] bg-[#080808] p-4 md:flex-row md:items-center md:justify-between">
  <div className="flex w-full max-w-md items-center gap-3 border border-[#29230d] px-4 py-2.5">
    <FiSearch size={16} className="text-gray-600" />

    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search users..."
      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
    />
  </div>
</div>


      {/* ================= USERS TABLE ================= */}

      <div className="mt-5 overflow-x-auto rounded-lg border border-[#29230d] bg-[#080808]">
  <table className="min-w-[900px] w-full border-collapse">

    <thead>
      <tr className="border-b border-[#29230d] bg-[#0d0d0d] text-left">
        {["USER","USER ID","EMAIL","ACCESS","ROLE","ACTION"].map((heading)=>(
          <th
            key={heading}
            className="px-4 py-3 text-[10px] tracking-[0.2em] text-gray-500 md:px-5 md:py-4"
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {filteredUser.map((user)=>(
        <tr
          key={user.id}
          className="border-b border-[#1c1c1c] transition hover:bg-[#111111]"
        >
          {/* User */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D3AF37] text-xs font-bold text-black">
                {user.name
                  .split(" ")
                  .map(word=>word[0])
                  .join("")
                  .slice(0,2)
                  .toUpperCase()}
              </div>

              <p className="text-xs md:text-sm font-medium text-white">
                {user.name}
              </p>
            </div>
          </td>

          {/* User ID */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <span className="text-xs text-gray-500">
              {user.id}
            </span>
          </td>

          {/* Email */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <span className="text-xs md:text-sm text-gray-300">
              {user.email}
            </span>
          </td>

          {/* Access */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <span
              className={`inline-flex rounded border px-2 py-1 text-[9px] font-semibold uppercase tracking-wider md:px-3 md:py-1.5 ${getAccesStyle(user.access)}`}
            >
              {user.access==="blocked" ? "Blocked" : "Active"}
            </span>
          </td>

          {/* Role */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <span
              className={`inline-flex rounded border px-2 py-1 text-[9px] font-semibold uppercase tracking-wider md:px-3 md:py-1.5 ${getStatusStyle(user.role)}`}
            >
              {user.role}
            </span>
          </td>

          {/* Actions */}
          <td className="px-4 py-4 md:px-5 md:py-5">
            <div className="flex items-center gap-3">
              <button
                onClick={()=>navigate("/admin/userProfile",{state:{user}})}
                className="rounded p-2 text-gray-500 transition hover:bg-[#1c1a12] hover:text-[#D3AF37]"
              >
                <FiEye size={16}/>
              </button>

              <button
                onClick={()=>navigate("/admin/editUser",{state:{user}})}
                className="rounded p-2 text-gray-500 transition hover:bg-[#1c1a12] hover:text-[#D3AF37]"
              >
                <FiEdit2 size={16}/>
              </button>

              <button
                onClick={()=>deleteHandle(user.id)}
                className="rounded p-2 text-gray-500 transition hover:bg-red-950/40 hover:text-red-500"
              >
                <FiTrash2 size={16}/>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>

  </table>
</div>


      {/* ================= PAGINATION ================= */}

      {/* <div className="flex items-center justify-between border-x border-b border-[#29230d] bg-[#080808] px-5 py-4">

        <p className="text-[10px] text-gray-600">
          Showing 1–5 of 3,471 users
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

export default UsersHandle
