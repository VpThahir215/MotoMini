
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const PublicRoute = () => {
  const [status, setStatus] = useState("checking");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/auth/check-auth");

        const currentUser = response.data.user;

        if (
          response.data.success &&
          currentUser &&
          !currentUser.isBlocked
        ) {
          setUser(currentUser);
          setStatus("authenticated");
        } else {
          setStatus("unauthenticated");
        }
      } catch (error) {
        console.log(
          "PUBLIC ROUTE ERROR:",
          error.response?.data || error.message
        );

        setStatus("unauthenticated");
      }
    };

    checkAuth();
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-gray-400">
          Checking authentication...
        </p>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <Navigate
        to={user.role === "admin" ? "/admin" : "/"}
        replace
      />
    );
  }

  return <Outlet />;
};

export default PublicRoute;
