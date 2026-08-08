import UsersHandle from '../../component/Admin/UsersHandle'
import React from "react";
import {
  FiSearch,
  FiFilter,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";


const Users = () => {
     const users = [
    {
      id: "#USR-001",
      name: "Thahir Vp",
      email: "thahir@gmail.com",
      phone: "+91 98765 43210",
      orders: 12,
      spent: "₹28,490",
      joined: "12 Jul 2026",
      status: "Active",
    },
    {
      id: "#USR-002",
      name: "Ahamed",
      email: "ahamed@gmail.com",
      phone: "+91 98765 12345",
      orders: 8,
      spent: "₹19,250",
      joined: "08 Jul 2026",
      status: "Active",
    },
    {
      id: "#USR-003",
      name: "Shamil",
      email: "shamil@gmail.com",
      phone: "+91 98765 67890",
      orders: 5,
      spent: "₹12,780",
      joined: "02 Jul 2026",
      status: "Active",
    },
    {
      id: "#USR-004",
      name: "Rashid",
      email: "rashid@gmail.com",
      phone: "+91 98765 11111",
      orders: 3,
      spent: "₹8,490",
      joined: "28 Jun 2026",
      status: "Blocked",
    },
    {
      id: "#USR-005",
      name: "Fahad",
      email: "fahad@gmail.com",
      phone: "+91 98765 22222",
      orders: 15,
      spent: "₹35,990",
      joined: "21 Jun 2026",
      status: "Active",
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "Active") {
      return "border-green-800 bg-green-950/30 text-green-500";
    }

    return "border-red-800 bg-red-950/30 text-red-500";
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
            USERS
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Manage registered MotoMini customers
          </p>
        </div>

        {/* Total Users */}

        <div className="border border-[#29230d] px-6 py-3">

          <p className="text-[9px] tracking-widest text-gray-600">
            TOTAL USERS
          </p>

          <p className="mt-1 text-xl font-semibold text-[#D3AF37]">
            3,471
          </p>

        </div>

      </div>


      {/* ================= SUMMARY ================= */}

      <div className="mt-8 grid grid-cols-3 border border-[#29230d]">

        {/* Total */}

        <div className="border-r border-[#29230d] p-5">

          <p className="text-[9px] tracking-widest text-gray-600">
            TOTAL USERS
          </p>

          <p className="mt-2 text-2xl font-semibold text-[#D3AF37]">
            3,471
          </p>

        </div>


        {/* Active */}

        <div className="border-r border-[#29230d] p-5">

          <p className="text-[9px] tracking-widest text-gray-600">
            ACTIVE USERS
          </p>

          <p className="mt-2 text-2xl font-semibold text-green-500">
            3,284
          </p>

        </div>


        {/* Blocked */}

        <div className="p-5">

          <p className="text-[9px] tracking-widest text-gray-600">
            BLOCKED USERS
          </p>

          <p className="mt-2 text-2xl font-semibold text-red-500">
            187
          </p>

        </div>

      </div>


      {/* ================= SEARCH + FILTER ================= */}

      <div className="mt-6 flex items-center justify-between border border-[#29230d] bg-[#080808] px-5 py-4">

        {/* Search */}

        <div className="flex w-80 items-center gap-3 border border-[#29230d] px-4 py-2.5">

          <FiSearch
            size={16}
            className="text-gray-600"
          />

          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
          />

        </div>


        {/* Filter */}

        <div className="flex items-center gap-3">

          <select className="border border-[#29230d] bg-black px-4 py-2.5 text-xs text-gray-500 outline-none">

            <option>All Users</option>
            <option>Active</option>
            <option>Blocked</option>

          </select>

          <button className="flex items-center gap-2 border border-[#29230d] px-4 py-2.5 text-xs text-gray-500 transition hover:border-[#D3AF37] hover:text-[#D3AF37]">

            <FiFilter size={14} />

            FILTER

          </button>

        </div>

      </div>


      {/* ================= USERS TABLE ================= */}

      <div className="mt-5 overflow-hidden border border-[#29230d]">

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b border-[#29230d] bg-[#080808] text-left">

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                USER
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                PHONE
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                ORDERS
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                TOTAL SPENT
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                JOINED
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

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-b border-[#1c1c1c] transition hover:bg-[#0d0d0d]"
              >

                {/* User */}

                <td className="px-5 py-5">

                  <div className="flex items-center gap-4">

                    {/* Avatar */}

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D3AF37] text-xs font-bold text-black">

                      {user.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}

                    </div>


                    <div>

                      <p className="text-sm font-medium text-gray-200">
                        {user.name}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-600">
                        {user.email}
                      </p>

                      <p className="mt-1 text-[9px] text-gray-800">
                        {user.id}
                      </p>

                    </div>

                  </div>

                </td>


                {/* Phone */}

                <td className="px-5 py-5 text-xs text-gray-500">
                  {user.phone}
                </td>


                {/* Orders */}

                <td className="px-5 py-5">

                  <span className="text-sm font-medium text-white">
                    {user.orders}
                  </span>

                  <span className="ml-1 text-[10px] text-gray-700">
                    orders
                  </span>

                </td>


                {/* Spent */}

                <td className="px-5 py-5 text-sm font-semibold text-[#D3AF37]">
                  {user.spent}
                </td>


                {/* Joined */}

                <td className="px-5 py-5 text-xs text-gray-600">
                  {user.joined}
                </td>


                {/* Status */}

                <td className="px-5 py-5">

                  <span
                    className={`inline-block border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider ${getStatusStyle(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>

                </td>


                {/* Actions */}

                <td className="px-5 py-5">

                  <div className="flex items-center gap-4">

                    <button
                      title="View"
                      className="text-gray-600 transition hover:text-[#D3AF37]"
                    >
                      <FiEye size={16} />
                    </button>

                    <button
                      title="Edit"
                      className="text-gray-600 transition hover:text-[#D3AF37]"
                    >
                      <FiEdit2 size={16} />
                    </button>

                    <button
                      title="Delete"
                      className="text-gray-600 transition hover:text-red-500"
                    >
                      <FiTrash2 size={16} />
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

      </div>

    </div>
  )
}

export default Users
