import React from "react";
import {
  FiSearch,
  FiFilter,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
} from "react-icons/fi";

const ProductForm = () => {
     const products = [
    {
      id: "#PR-001",
      name: "Honda Monkey 125",
      brand: "Honda",
      category: "Classic",
      price: "₹2,499",
      stock: 42,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "#PR-002",
      name: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      category: "Classic",
      price: "₹3,299",
      stock: 25,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "#PR-003",
      name: "Yamaha R1",
      brand: "Yamaha",
      category: "Sport",
      price: "₹1,999",
      stock: 18,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "#PR-004",
      name: "Ducati Panigale V4",
      brand: "Ducati",
      category: "Super Bike",
      price: "₹4,599",
      stock: 7,
      status: "Low Stock",
      image:
        "https://images.unsplash.com/photo-1562141961-b8d4a9f7e2f1?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "#PR-005",
      name: "BMW S1000RR",
      brand: "BMW",
      category: "Super Bike",
      price: "₹3,899",
      stock: 0,
      status: "Out of Stock",
      image:
        "https://images.unsplash.com/photo-1591637333184-19aa84c3a1f4?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "border-green-800 bg-green-950/30 text-green-500";

      case "Low Stock":
        return "border-yellow-800 bg-yellow-950/30 text-yellow-500";

      case "Out of Stock":
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
            PRODUCTS
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Manage your miniature motorcycle collection
          </p>
        </div>

        {/* Add Product */}

        <button className="flex items-center gap-2 bg-[#D3AF37] px-5 py-3 text-xs font-semibold tracking-wider text-black transition hover:bg-[#b99725]">
          <FiPlus size={16} />
          ADD PRODUCT
        </button>

      </div>


      {/* ================= SUMMARY ================= */}

      <div className="mt-8 grid grid-cols-4 border border-[#29230d]">

        <div className="border-r border-[#29230d] p-5">
          <p className="text-[9px] tracking-widest text-gray-600">
            TOTAL PRODUCTS
          </p>

          <p className="mt-2 text-2xl font-semibold text-[#D3AF37]">
            248
          </p>
        </div>

        <div className="border-r border-[#29230d] p-5">
          <p className="text-[9px] tracking-widest text-gray-600">
            ACTIVE
          </p>

          <p className="mt-2 text-2xl font-semibold text-green-500">
            221
          </p>
        </div>

        <div className="border-r border-[#29230d] p-5">
          <p className="text-[9px] tracking-widest text-gray-600">
            LOW STOCK
          </p>

          <p className="mt-2 text-2xl font-semibold text-yellow-500">
            18
          </p>
        </div>

        <div className="p-5">
          <p className="text-[9px] tracking-widest text-gray-600">
            OUT OF STOCK
          </p>

          <p className="mt-2 text-2xl font-semibold text-red-500">
            9
          </p>
        </div>

      </div>


      {/* ================= FILTER BAR ================= */}

      <div className="mt-6 flex items-center justify-between border border-[#29230d] bg-[#080808] px-5 py-4">

        {/* Search */}

        <div className="flex w-80 items-center gap-3 border border-[#29230d] px-4 py-2.5">

          <FiSearch
            size={16}
            className="text-gray-600"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
          />

        </div>


        {/* Filters */}

        <div className="flex items-center gap-3">

          <select className="border border-[#29230d] bg-black px-4 py-2.5 text-xs text-gray-500 outline-none">
            <option>All Brands</option>
            <option>Honda</option>
            <option>Yamaha</option>
            <option>Ducati</option>
            <option>BMW</option>
            <option>Royal Enfield</option>
          </select>

          <select className="border border-[#29230d] bg-black px-4 py-2.5 text-xs text-gray-500 outline-none">
            <option>All Categories</option>
            <option>Classic</option>
            <option>Sport</option>
            <option>Super Bike</option>
            <option>Adventure</option>
          </select>

          <button className="flex items-center gap-2 border border-[#29230d] px-4 py-2.5 text-xs text-gray-500 transition hover:border-[#D3AF37] hover:text-[#D3AF37]">
            <FiFilter size={14} />
            FILTER
          </button>

        </div>

      </div>


      {/* ================= PRODUCT TABLE ================= */}

      <div className="mt-5 overflow-hidden border border-[#29230d]">

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b border-[#29230d] bg-[#080808] text-left">

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                PRODUCT
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                BRAND
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                CATEGORY
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                PRICE
              </th>

              <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                STOCK
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

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-b border-[#1c1c1c] transition hover:bg-[#0d0d0d]"
              >

                {/* Product */}

                <td className="px-5 py-4">

                  <div className="flex items-center gap-4">

                    <div className="h-14 w-14 overflow-hidden border border-[#29230d] bg-[#111]">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />

                    </div>

                    <div>

                      <p className="text-sm font-medium text-gray-200">
                        {product.name}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-700">
                        {product.id}
                      </p>

                    </div>

                  </div>

                </td>


                {/* Brand */}

                <td className="px-5 py-4 text-xs text-gray-500">
                  {product.brand}
                </td>


                {/* Category */}

                <td className="px-5 py-4">

                  <span className="border border-[#29230d] px-2.5 py-1 text-[9px] uppercase tracking-wider text-gray-500">
                    {product.category}
                  </span>

                </td>


                {/* Price */}

                <td className="px-5 py-4 text-sm font-semibold text-[#D3AF37]">
                  {product.price}
                </td>


                {/* Stock */}

                <td className="px-5 py-4">

                  <span
                    className={
                      product.stock === 0
                        ? "text-red-500"
                        : product.stock < 10
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }
                  >
                    {product.stock}
                  </span>

                  <span className="ml-1 text-[10px] text-gray-700">
                    units
                  </span>

                </td>


                {/* Status */}

                <td className="px-5 py-4">

                  <span
                    className={`inline-block border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider ${getStatusStyle(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>

                </td>


                {/* Actions */}

                <td className="px-5 py-4">

                  <div className="flex items-center gap-4">

                    <button className="text-gray-600 transition hover:text-[#D3AF37]">
                      <FiEye size={16} />
                    </button>

                    <button className="text-gray-600 transition hover:text-[#D3AF37]">
                      <FiEdit2 size={16} />
                    </button>

                    <button className="text-gray-600 transition hover:text-red-500">
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
          Showing 1–5 of 248 products
        </p>

        <div className="flex items-center gap-2">

          <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-600">
            ←
          </button>

          <button className="border border-[#D3AF37] bg-[#1c1a12] px-3 py-2 text-xs text-[#D3AF37]">
            1
          </button>

          <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-500">
            2
          </button>

          <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-500">
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

export default ProductForm
