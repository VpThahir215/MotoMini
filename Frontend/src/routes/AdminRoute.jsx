import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout";
import Products from "../pages/admin/ Products";
import Orders from "../pages/admin/ Orders";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";
import AddProduct from "../pages/admin/AddProduct";
import ProfileUser from "../pages/admin/ProfileUser";
import EditUser from "../pages/admin/EditUser";

const AdminRoute = () => {
  // Check whether admin is logged in
  const admin = JSON.parse(localStorage.getItem("admin"));

  // If not logged in, send to admin login
  if (!admin) {
    return <Navigate to="/notFound" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />  
        <Route path="products/add" element={<AddProduct />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="userProfile" element={<ProfileUser />} />
        <Route path="editUser" element={<EditUser />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;