import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../services/api'

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    console.log("Checking authentication...");

    api.get("http://localhost:3001/api/auth/check-auth", {
      withCredentials: true
    })
    .then((res) => {
      console.log("Backend response:", res.data);
      setIsAuthenticated(true);
    })
    .catch((err) => {
      console.log("Authentication error:", err.response?.data);
      setIsAuthenticated(false);
    });
  }, []);

if (isAuthenticated === null) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600 mx-auto"></div>

                <p className="mt-4 text-gray-600">
                    Checking authentication...
                </p>
            </div>
        </div>
    );
}

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;