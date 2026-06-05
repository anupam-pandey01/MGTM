import React from 'react'
import { useAuth } from '../admin/context/AdminAuthContext';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
   const { isLoggedIn, loading } = useAuth();

   if (loading) {
      return null;
   }

   return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace/>;
};

export default ProtectedRoute