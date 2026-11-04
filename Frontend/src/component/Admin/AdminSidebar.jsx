// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// import {
//   FiGrid,
//   FiPackage,
//   FiUsers,
//   FiSettings,
// } from "react-icons/fi";

// import { FaMotorcycle } from "react-icons/fa";

// const AdminSideBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     {
//       id: "dashboard",
//       name: "Dashboard",
//       path: "/admin",
//       icon: FiGrid,
//     },
//     {
//       id: "orders",
//       name: "Orders",
//       path: "/admin/orders",
//       icon: FiPackage,
//     },
//     {
//       id: "products",
//       name: "Products",
//       path: "/admin/products",
//       icon: FaMotorcycle,
//     },
//     {
//       id: "users",
//       name: "Users",
//       path: "/admin/users",
//       icon: FiUsers,
//     },
  
//   ];

//   return (
//     <aside className="fixed top-0 left-0 flex h-screen w-52 flex-col border-r border-[#29230d] bg-[#080808]">

//       {/* Logo */}
//       <div className="border-b border-[#29230d] px-4 py-5">

//         <h1 className="font-heading text-2xl tracking-wider text-[#D3AF37]">
//           MOTOMINI
//         </h1>

//         <p className="mt-1 text-[9px] tracking-[0.25em] text-gray-600">
//           ADMIN PANEL
//         </p>

//       </div>

//       {/* Menu */}
//       <nav className="flex-1 pt-4">

//         {menuItems.map((item) => {
//           const Icon = item.icon;

//           // Check current URL
//           const isActive =
//             item.path === "/admin"
//               ? location.pathname === "/admin"
//               : location.pathname.startsWith(item.path);

//           return (
//             <button
//               key={item.id}
//               onClick={() => navigate(item.path)}
//               className={`flex w-full items-center gap-4 px-4 py-4 text-sm transition
//                 ${
//                   isActive
//                     ? "border-l-2 border-l-[#D3AF37] bg-[#1c1a12] text-[#D3AF37]"
//                     : "text-gray-600 hover:bg-[#15140f] hover:text-[#D3AF37]"
//                 }
//               `}
//             >
//               <Icon size={17} />

//               <span className="font-medium">
//                 {item.name}
//               </span>

//             </button>
//           );
//         })}

//       </nav>

//     </aside>
//   );
// };

// export default AdminSideBar;


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiGrid, FiPackage, FiUsers, FiX } from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa";

const AdminSideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", name: "Dashboard", path: "/admin", icon: FiGrid },
    { id: "orders", name: "Orders", path: "/admin/orders", icon: FiPackage },
    { id: "products", name: "Products", path: "/admin/products", icon: FaMotorcycle },
    { id: "users", name: "Users", path: "/admin/users", icon: FiUsers },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-52 flex-col border-r border-[#29230d] bg-[#080808] transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#29230d] px-4 py-5">
          <div>
            <h1 className="font-heading text-2xl tracking-wider text-[#D3AF37]">
              MOTOMINI
            </h1>

            <p className="mt-1 text-[9px] tracking-[0.25em] text-gray-600">
              ADMIN PANEL
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 lg:hidden"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 pt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.path === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(item.path);

            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-4 px-4 py-4 text-sm transition ${
                  isActive
                    ? "border-l-2 border-l-[#D3AF37] bg-[#1c1a12] text-[#D3AF37]"
                    : "text-gray-600 hover:bg-[#15140f] hover:text-[#D3AF37]"
                }`}
              >
                <Icon size={17} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default AdminSideBar;