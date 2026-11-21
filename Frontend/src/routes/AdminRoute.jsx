
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const AdminRoute = () => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await api.get("/auth/check-auth");
        const user = response.data.user;

        if (!response.data.success || !user) {
          setStatus("unauthorized");
          return;
        }

        if (user.isBlocked) {
          setStatus("blocked");
          return;
        }

        if (user.role === "admin") {
          setStatus("admin");
        } else {
          setStatus("unauthorized");
        }

      } catch (error) {
        console.log(
          "ADMIN ROUTE ERROR:",
          error.response?.data || error.message
        );

        setStatus("unauthorized");
      }
    };

    checkAdmin();
  }, []);

  if (status === "checking") {
    return <p>Checking admin authentication...</p>;
  }

  if (status === "blocked") {
    return <Navigate to="/login" replace />;
  }

  if (status === "unauthorized") {
    return <Navigate to="/notFound" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
