import React from "react";
import {
  FiPackage,
  FiDollarSign,
  FiUsers,
  FiClock,
} from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    {
      title: "TOTAL ORDERS",
      value: "1,284",
      icon: <FiPackage size={22} />,
      change: "+12% vs last month",
      positive: true,
    },
    {
      title: "TOTAL REVENUE",
      value: "₹9,42,580",
      icon: <FiDollarSign size={22} />,
      change: "+8.4% vs last month",
      positive: true,
    },
    {
      title: "TOTAL USERS",
      value: "3,471",
      icon: <FiUsers size={22} />,
      change: "+21% vs last month",
      positive: true,
    },
    {
      title: "PENDING ORDERS",
      value: "38",
      icon: <FiClock size={22} />,
      change: "-5% vs last month",
      positive: false,
    },
  ];

  const revenue = [
    { month: "MAR", height: "65%" },
    { month: "APR", height: "82%" },
    { month: "MAY", height: "58%" },
    { month: "JUN", height: "86%" },
    { month: "JUL", height: "86%" },
    { month: "AUG", height: "92%" },
  ];

  const products = [
    {
      name: "Honda Monkey 125 — Scale 1:12",
      sold: "284 sold",
      stock: "42 in stock",
      price: "₹2,55,716",
      width: "90%",
    },
    {
      name: "MotoMini Rider Jacket — Black/Gold",
      sold: "197 sold",
      stock: "18 in stock",
      price: "₹2,93,553",
      width: "82%",
    },
    {
      name: "Kawasaki Z125 Pro — Scale 1:6",
      sold: "143 sold",
      stock: "7 in stock",
      price: "₹3,13,170",
      width: "50%",
      lowStock: true,
    },
    {
      name: "Royal Enfield Bullet 350 — Scale 1:10",
      sold: "118 sold",
      stock: "25 in stock",
      price: "₹1,58,120",
      width: "40%",
    },
    {
      name: "Mini Bike Display Stand — Gold Edition",
      sold: "96 sold",
      stock: "61 in stock",
      price: "₹47,990",
      width: "25%",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HEADER ================= */}
      <header className="flex h-14 items-center justify-between border-b border-[#29230d] px-8">

        <h1 className="font-heading text-2xl tracking-widest">
          DASHBOARD
        </h1>

        <div className="flex items-center gap-5">
          <span className="text-xs text-gray-600">
            08 Aug 2026
          </span>

          <span className="border border-[#D3AF37] px-3 py-1 text-[10px] tracking-wider text-[#D3AF37]">
            • LIVE
          </span>
        </div>

      </header>


      {/* ================= CONTENT ================= */}
      <main className="p-8">

        {/* ================= STAT CARDS ================= */}
        <section className="grid grid-cols-4 border border-[#29230d]">

          {stats.map((stat, index) => (
            <div
              key={index}
              className={`min-h-36 border-[#29230d] p-6 ${
                index !== stats.length - 1 ? "border-r" : ""
              }`}
            >

              <div className="flex items-start justify-between">

                <p className="text-[10px] tracking-widest text-gray-600">
                  {stat.title}
                </p>

                <span className="text-[#D3AF37]">
                  {stat.icon}
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-semibold text-[#D3AF37]">
                {stat.value}
              </h2>

              <p
                className={`mt-2 text-xs font-semibold ${
                  stat.positive
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </p>

            </div>
          ))}

        </section>


        {/* ================= CHART + PRODUCTS ================= */}
        <section className="mt-8 grid grid-cols-3 gap-6">

          {/* ================= REVENUE CHART ================= */}
          <div className="col-span-2 min-h-[490px] border border-[#29230d] p-6">

            <div className="flex items-start justify-between">

              <div>
                <h2 className="font-heading text-lg tracking-widest text-[#D3AF37]">
                  MONTHLY REVENUE
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Mar – Aug 2026
                </p>
              </div>

              <p className="text-xl font-semibold">
                ₹9,42,580
              </p>

            </div>


            {/* Chart */}
            <div className="mt-10 flex h-64 items-end gap-3 px-1">

              {revenue.map((item, index) => (
                <div
                  key={index}
                  className="flex h-full flex-1 flex-col justify-end"
                >

                  <div
                    className={`w-full ${
                      index === revenue.length - 1
                        ? "bg-[#D3AF37]"
                        : "bg-[#403719]"
                    }`}
                    style={{
                      height: item.height,
                    }}
                  />

                  <p className="mt-3 text-center text-[10px] tracking-wider text-gray-600">
                    {item.month}
                  </p>

                </div>
              ))}

            </div>

          </div>


          {/* ================= TOP PRODUCTS ================= */}
          <div className="border border-[#29230d] p-6">

            <h2 className="font-heading text-lg tracking-widest text-[#D3AF37]">
              TOP PRODUCTS
            </h2>


            <div className="mt-6">

              {products.map((product, index) => (
                <div
                  key={index}
                  className="border-b border-[#1c1c1c] py-4"
                >

                  <div className="flex items-start justify-between gap-3">

                    <p className="text-sm text-gray-300">
                      {product.name}
                    </p>

                    <p className="whitespace-nowrap text-xs font-semibold text-[#D3AF37]">
                      {product.price}
                    </p>

                  </div>


                  <div className="mt-3 flex gap-3 text-[10px] text-gray-600">

                    <span>
                      {product.sold}
                    </span>

                    <span
                      className={
                        product.lowStock
                          ? "text-red-500"
                          : ""
                      }
                    >
                      {product.lowStock && "⚠ "}
                      {product.stock}
                    </span>

                  </div>


                  {/* Progress line */}
                  <div className="mt-3 h-[2px] w-full bg-[#151515]">

                    <div
                      className="h-full bg-[#6b5b1c]"
                      style={{
                        width: product.width,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>
                
          </div>

        </section>

      </main>

    </div>
  );
};

export default Dashboard;