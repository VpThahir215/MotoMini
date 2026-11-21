
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/check-auth");

        if (res.data.success && res.data.user && !res.data.user.isBlocked) {
          setStatus("authenticated");
        } else {
          setStatus("unauthenticated");
        }
      } catch (error) {
        console.log("Authentication error:", error.response?.data);
        setStatus("unauthenticated");
      }
    };

    checkAuth();
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-gray-400">Checking authentication...</p>
      </div>
    );
  }

  if (status !== "authenticated") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
