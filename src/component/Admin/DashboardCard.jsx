import React from "react";
import {
  FiPackage,
  FiDollarSign,
  FiUsers,
  FiClock,
} from "react-icons/fi";
import { useState,useEffect } from "react";
import { getDashboardData } from "../../services/dashBoardServices";
import { useNavigate } from "react-router-dom";
import {BarChart,Bar,XAxis,Tooltip,ResponsiveContainer,YAxis} from "recharts"

/* =========================================================
   MINI GRAPH
========================================================= */

// const MiniGraph = ({ points }) => {
//   return (
//     <svg
//       viewBox="0 0 100 35"
//       className="h-10 w-28"
//       preserveAspectRatio="none"
//     >
//       <polyline
//         points={points}
//         fill="none"
//         stroke="#D3AF37"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// };


/* =========================================================
   DASHBOARD
========================================================= */

const Dashboard = () => {

  const now = new Date();

  const date = now.toLocaleDateString();

  const time = now.toLocaleTimeString();

  const [dashboardData, setDashboardData] = useState({
  users: [],
  products: [],
  orders: [],
});

const [loading, setLoading] = useState(true);
const { users, products, orders } = dashboardData;
console.log("DashBoard",users.length);
console.log("products",products.length);
console.log("orders",orders.length);

const totalRevenue=orders.filter((val)=>val.status==="Delivered").reduce((sum,order)=>sum+order.total,0)

const navigate=useNavigate()


const monthNames = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const monthlyTotals = {};

orders.forEach((order) => {
  const month = monthNames[new Date(order.orderDate).getMonth()];

  monthlyTotals[month] =
    (monthlyTotals[month] || 0) + order.total;
});
const revenueData = monthNames.map((month) => ({
  month,
  revenue: monthlyTotals[month]
}));


useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const data = await getDashboardData();

      setDashboardData(data);
    } catch (error) {
      console.log("Dashboard error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchDashboard();
}, []);
const totalUsers = users.length;
const totalProducts = orders.length;
const totalOrders = orders.length;

const pendingCount = orders.filter(
  (order) => order.status === "Pending"
).length;

const processingCount = orders.filter(
  (order) => order.status === "Processing"
).length;

const shippedCount = orders.filter(
  (order) => order.status === "Shipped"
).length;

const deliveredCount = orders.filter(
  (order) => order.status === "Delivered"
).length;

const cancelledCount = orders.filter(
  (order) => order.status === "Cancelled"
).length;



const productSales = {};

orders.forEach((order) => {
  order.products?.forEach((item) => {
    if (!productSales[item.productId]) {
      productSales[item.productId] = 0;
    }

    productSales[item.productId] += item.quantity;
  });
});


const topProducts = products
  .map((product) => {
    const sold = productSales[product.id] || 0;

    return {
      ...product,
      sold,
      lowStock: product.stock <= 5,
      width: `${Math.min((sold / Math.max(...Object.values(productSales), 1)) * 100, 100)}%`,
    };
  })
  .sort((a, b) => b.sold - a.sold)
  .slice(0, 4);



  /* =========================================================
     STAT CARDS
  ========================================================= */

  const stats = [
    {
      title: "TOTAL USERS",
      value: totalUsers,
      icon: <FiUsers size={22} />,
      // change: "+12%",
      // changeText: "vs last month",
      // positive: true,

      // // Mini graph
      // graph: "0,30 15,25 30,27 45,18 60,22 75,12 100,8",
    },

    {
      title: "TOTAL PRODUCTS",
      value: totalProducts,
      icon: <FiPackage size={22} />,
      // change: "+8%",
      // changeText: "vs last month",
      // positive: true,

      // graph: "0,28 15,25 30,20 45,23 60,15 75,18 100,10",
    },

    {
      title: "TOTAL ORDERS",
      value: totalProducts,
      icon: <FiClock size={22} />,
      // change: "+15%",
      // changeText: "vs last month",
      // positive: true,

      // graph: "0,30 15,26 30,28 45,15 60,20 75,10 100,6",
    },

    {
      title: "TOTAL REVENUE",
      value: totalRevenue,
      icon: <FiDollarSign size={22} />,
      // change: "+10%",
      // changeText: "vs last month",
      // positive: true,

      // graph: "0,30 15,22 30,25 45,18 60,20 75,8 100,4",
    },
  ];


  /* =========================================================
     ORDER STATUS
  ========================================================= */

 const orderStatuses = [
  {
    name: "Pending",
    count: pendingCount,
  },
  {
    name: "Processing",
    count: processingCount,
  },
  {
    name: "Shipped",
    count: shippedCount,
  },
  {
    name: "Delivered",
    count: deliveredCount,
  },
  {
    name: "Cancelled",
    count: cancelledCount,
  },
];


  /* =========================================================
     MONTHLY REVENUE
  ========================================================= */

  // const revenue = [
  //   {
  //     month: "MAR",
  //     height: "65%",
  //   },

  //   {
  //     month: "APR",
  //     height: "82%",
  //   },

  //   {
  //     month: "MAY",
  //     height: "58%",
  //   },

  //   {
  //     month: "JUN",
  //     height: "86%",
  //   },

  //   {
  //     month: "JUL",
  //     height: "86%",
  //   },

  //   {
  //     month: "AUG",
  //     height: "92%",
  //   },
  // ];


  /* =========================================================
     RECENT ORDERS
  ========================================================= */

  // const recentOrders = [
  //   {
  //     id: "XwSkyn9vZVE",
  //     customer: "THAHIR",
  //     amount: "₹3,553",
  //     status: "Pending",
  //   },

  //   {
  //     id: "PrZwFHy",
  //     customer: "Afla",
  //     amount: "₹1,775",
  //     status: "Shipped",
  //   },

  //   {
  //     id: "MK92KLP",
  //     customer: "Rahul",
  //     amount: "₹2,450",
  //     status: "Delivered",
  //   },

  //   {
  //     id: "QW83NML",
  //     customer: "Fahad",
  //     amount: "₹4,250",
  //     status: "Processing",
  //   },

  //   {
  //     id: "TR92KPL",
  //     customer: "Arjun",
  //     amount: "₹1,899",
  //     status: "Delivered",
  //   },
  // ];
const recentOrders = [...orders]
  .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
  .slice(0, 5);

  /* =========================================================
     LOW STOCK PRODUCTS
  ========================================================= */

  const lowStockProducts = [
    {
      name: "Himalayan 450",
      stock: 3,
    },

    {
      name: "Aprilia RSV4",
      stock: 2,
    },

    {
      name: "Yamaha R1",
      stock: 4,
    },

    {
      name: "Ducati Panigale V4",
      stock: 5,
    },
  ];


  /* =========================================================
     STATUS STYLE
  ========================================================= */

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


// Create an object to store revenue for each month
const monthlyRevenue = {};

orders.forEach((order) => {
  const date = new Date(order.orderDate);
  const month = monthNames[date.getMonth()];

  if (!monthlyRevenue[month]) {
    monthlyRevenue[month] = 0;
  }

  monthlyRevenue[month] += Number(order.total || 0);
});


const maxRevenue = Math.max(...Object.values(monthlyRevenue), 1);

const revenuee = monthNames.slice(2, 8).map((month) => ({
  month,
  value: monthlyRevenue[month] || 0,
  height: `${((monthlyRevenue[month] || 0) / maxRevenue) * 100}%`,
}));


  return (

    <div className="min-h-screen bg-black text-white">


      {/* =====================================================
          HEADER
      ===================================================== */}

     <header className="flex h-14 items-center justify-between border-b border-[#29230d] px-4 md:px-6 lg:px-8">

        <div>

          <h1 className="font-heading text-xl md:text-2xl tracking-widest">
            DASHBOARD
          </h1>

        </div>


        <div className="flex items-center gap-5">

          <span className="text-xs text-gray-600">
            {date}
          </span>

        

          <span className="border border-[#D3AF37] px-3 py-1 text-[10px] tracking-wider text-[#D3AF37]">
            • LIVE
          </span>

        </div>

      </header>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <main className="p-8">


        {/* ===================================================
            STAT CARDS
        =================================================== */}

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          {stats.map((stat, index) => (

            <div
              key={index}
              className={`relative min-h-36 border border-[#29230d] bg-[#080808] p-5 ${
                index !== stats.length - 1
                  ? "border-r"
                  : ""
              }`}
            >

              {/* Top */}

              <div className="flex items-start justify-between">

                <p className="text-[10px] tracking-widest text-gray-600">
                  {stat.title}
                </p>

                <span className="text-[#D3AF37]">
                  {stat.icon}
                </span>

              </div>


              {/* Value */}

              <h2 className="mt-4 text-3xl font-semibold text-[#D3AF37]">
                {stat.value}
              </h2>


              {/* Bottom */}

             

            </div>

          ))}

        </section>


        {/* ===================================================
            ORDER STATUS
        =================================================== */}
<section className="mt-8">
  <div className="mb-4">
    <h2 className="font-heading text-lg md:text-xl tracking-widest text-[#D3AF37]">
      ORDER STATUS
    </h2>

    <p className="mt-1 text-xs text-gray-600">
      Current order overview
    </p>
  </div>

  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
    {orderStatuses.map((item) => (
      <div
        key={item.name}
        className="border border-[#29230d] bg-[#080808] p-4 md:p-5 transition hover:border-[#D3AF37]"
      >
        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-600">
          {item.name}
        </p>

        <p className="mt-2 text-xl md:text-2xl font-semibold text-[#D3AF37]">
          {item.count}
        </p>
      </div>
    ))}
  </div>
</section>


        {/* ===================================================
            RECENT ORDERS + LOW STOCK
        =================================================== */}

        <section className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">


          {/* =================================================
              RECENT ORDERS
          ================================================= */}

          <div className="xl:col-span-2 border border-[#29230d] overflow-x-auto">

            <div className="flex items-center justify-between border-b border-[#29230d] p-6">

              <div>

                <h2 className="font-heading text-lg tracking-widest text-[#D3AF37]">
                  RECENT ORDERS
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Latest customer orders
                </p>

              </div>


              <button 
              onClick={()=>navigate('/admin/orders')}
              className="text-[10px] tracking-widest text-gray-600 transition hover:text-[#D3AF37]">
                VIEW ALL
              </button>

            </div>


            {/* Table */}

            <div>

              {/* Header */}

              <div className="grid grid-cols-4 border-b border-[#1c1c1c] px-6 py-4">

                <p className="text-[9px] tracking-widest text-gray-700">
                  ORDER ID
                </p>

                <p className="text-[9px] tracking-widest text-gray-700">
                  CUSTOMER
                </p>

                <p className="text-[9px] tracking-widest text-gray-700">
                  AMOUNT
                </p>

                <p className="text-[9px] tracking-widest text-gray-700">
                  STATUS
                </p>

              </div>


              {/* Orders */}

              {/* {recentOrders.map((order, index) => (

                <div
                  key={index}
                  className="grid grid-cols-4 items-center border-b border-[#1c1c1c] px-6 py-4 transition hover:bg-[#080808]"
                >

                  <p className="text-xs font-medium text-[#D3AF37]">
                    #{order.id}
                  </p>

                  <p className="text-xs text-gray-400">
                    {order.customer}
                  </p>

                  <p className="text-xs font-semibold text-white">
                    {order.amount}
                  </p>

                  <div>

                    <span
                      className={`inline-flex border px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wider ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>

                  </div>

                </div>

              ))} */}
              {recentOrders.map((order) => (
  <div
    key={order.id}
     className="grid grid-cols-4 items-center border-b border-[#1c1c1c] px-6 py-4 transition hover:bg-[#080808]"
                >

   
       <p className="text-xs font-medium text-[#D3AF37]">
        #{order.userId}
      </p>

       <p className="text-xs text-gray-400">
        {order.customer?.name}
      </p>

     <p className="text-xs font-semibold text-white">
      ₹{order.total}
    </p>

    <span
        className={`inline-flex justify-center border px-2.5 py-1 text-[8px]  font-semibold uppercase tracking-wider ${getStatusStyle(
                        order.status
                      )}`}
                    >
    
      {order.status}
    </span>

  </div>
))}

            </div>

          </div>


          {/* =================================================
              LOW STOCK
          ================================================= */}

          {/* <div className="border border-[#29230d]">

            <div className="border-b border-[#29230d] p-6">

              <h2 className="font-heading text-lg tracking-widest text-[#D3AF37]">
                LOW STOCK
              </h2>

              <p className="mt-1 text-xs text-gray-600">
                Products that need attention
              </p>

            </div>


            <div className="p-6">

              {lowStockProducts.map((product, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between border-b border-[#1c1c1c] py-4 last:border-b-0"
                >

                  <div>

                    <p className="text-sm text-gray-300">
                      {product.name}
                    </p>

                    <p className="mt-1 text-[9px] tracking-wider text-gray-700">
                      INVENTORY
                    </p>

                  </div>


                  <div className="text-right">

                    <p
                      className={`text-sm font-semibold ${
                        product.stock <= 2
                          ? "text-red-500"
                          : "text-[#D3AF37]"
                      }`}
                    >
                      {product.stock}
                    </p>

                    <p className="text-[9px] text-gray-700">
                      LEFT
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div> */}
           <div className="border border-[#29230d] p-6">

            <h2 className="font-heading text-lg tracking-widest text-[#D3AF37]">
              TOP PRODUCTS
            </h2>


            {topProducts.map((product) => (
  <div
    key={product.id}
    className="border-b border-[#1c1c1c] py-4 last:border-b-0"
  >
    <div className="flex items-start justify-between gap-3">
      <p className="text-sm text-gray-300">
        {product.name}
      </p>

      <p className="whitespace-nowrap text-xs font-semibold text-[#D3AF37]">
        ₹{Number(product.price).toLocaleString("en-IN")}
      </p>
    </div>

    <div className="mt-3 flex gap-3 text-[10px] text-gray-600">
      <span>{product.sold} sold</span>

      <span className={product.lowStock ? "text-red-500" : ""}>
        {product.lowStock && "⚠ "}
        {product.stock} in stock
      </span>
    </div>

    <div className="mt-3 h-[2px] w-full bg-[#151515]">
      <div
        className="h-full bg-[#6b5b1c]"
        style={{ width: product.width }}
      />
    </div>
  </div>
))}

          </div>


        </section>


        {/* ===================================================
            REVENUE + TOP PRODUCTS
        =================================================== */}

        {/* <section className="mt-8 grid grid-cols-3 gap-6"> */}


          {/* =================================================
              REVENUE CHART
          ================================================= */}

       {/* <div className="col-span-3 min-h-[420px] border border-[#29230d] p-6">

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
                ₹72,450
              </p>

            </div>


            {/* Chart */}

            {/* <div className="mt-10 flex h-64 items-end gap-3 px-1"> */}

              {/* {revenue.map((item, index) => (

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

              ))} */}

            {/* </div> */}

          {/* </div>  */}


         <div className="mt-8 h-64 sm:h-72 md:h-80 border border-[#29230d] p-4 md:p-6">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={revenueData}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="revenue" fill="#D3AF37" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>


          {/* =================================================
              TOP PRODUCTS
          ================================================= */}
{/* 
          <div className="border border-[#29230d] p-6">

            <h2 className="font-heading text-lg tracking-widest text-[#D3AF37]">
              TOP PRODUCTS
            </h2>


            {topProducts.map((product) => (
  <div
    key={product.id}
    className="border-b border-[#1c1c1c] py-4 last:border-b-0"
  >
    <div className="flex items-start justify-between gap-3">
      <p className="text-sm text-gray-300">
        {product.name}
      </p>

      <p className="whitespace-nowrap text-xs font-semibold text-[#D3AF37]">
        ₹{Number(product.price).toLocaleString("en-IN")}
      </p>
    </div>

    <div className="mt-3 flex gap-3 text-[10px] text-gray-600">
      <span>{product.sold} sold</span>

      <span className={product.lowStock ? "text-red-500" : ""}>
        {product.lowStock && "⚠ "}
        {product.stock} in stock
      </span>
    </div>

    <div className="mt-3 h-[2px] w-full bg-[#151515]">
      <div
        className="h-full bg-[#6b5b1c]"
        style={{ width: product.width }}
      />
    </div>
  </div>
))}

          </div> */}

        {/* </section> */}

      </main>

    </div>
  );
};

export default Dashboard;