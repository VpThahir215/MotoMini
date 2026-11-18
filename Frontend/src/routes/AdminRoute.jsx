
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import api from "../services/api";

import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout";
import Products from "../pages/admin/ Products";
import Orders from "../pages/admin/ Orders";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";
import AddProduct from "../pages/admin/AddProduct";
import ProfileUser from "../pages/admin/ProfileUser";
import EditUser from "../pages/admin/EditUser";
import Trash from "../pages/Trash";

const AdminRoute = () => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await api.get("/auth/check-auth");
        const user = response.data.user;
        console.log("CHECK AUTH RESPONSE:", response.data);
console.log("USER ROLE:", response.data.user?.role);

        if (user.role === "admin") {
          setStatus("admin");
        } else {
          setStatus("unauthorized");
        }
      } catch (error) {
        setStatus("unauthorized");
      }
    };

    checkAdmin();
  }, []);

  if (status === "checking") {
    return <p>Checking authentication...</p>;
  }

  if (status !== "admin") {
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
        <Route path="trash" element={<Trash />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
