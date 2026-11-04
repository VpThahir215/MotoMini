import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../component/Admin/AdminSidebar";
import AdminNavbar from "../component/Admin/AdminNavbar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <AdminSideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="lg:ml-52">
        {/* Navbar (works on mobile + desktop) */}
        <AdminNavbar setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="min-h-screen p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;