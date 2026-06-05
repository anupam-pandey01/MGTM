import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { clearAccessToken, setAccessToken } from "../../utils/tokenService";
import { handleSuccess } from "../../utils/handler";

const AdminAuthContext = createContext();

export const useAuth = () => {
  return useContext(AdminAuthContext);
};

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);


  const checkAuth = async () => {
    try {
      const res = await api.get("/api/admin/refresh-token");

      setAccessToken(res.data.accessToken);
      setAdmin(res.data.userId);
      setIsLoggedIn(true);
    } catch (err) {
      clearAccessToken();
      setIsLoggedIn(false);
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isAdminRoute = window.location.pathname.startsWith("/admin");

    if (isAdminRoute) {
      checkAuth();
    }
  }, []);

  const logout = async () => {
    try {
      const res = await api.post("/logout"); // clears cookie backend
      handleSuccess(res.data.message);
    } catch (err) {
      console.log("Logout error:", err);
    }

    clearAccessToken();
    setIsLoggedIn(false);
    setAdmin(null);
  };

  const value = {
    admin,
    setAdmin,
    isLoggedIn,
    setIsLoggedIn,
    logout,
    loading,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
