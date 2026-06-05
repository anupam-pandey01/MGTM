import React from 'react'
import { useAuth } from '../admin/context/AdminAuthContext'
import { Navigate, Outlet } from 'react-router';

const PublicProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Outlet/> : <Navigate to="/admin/dashboard" replace />
}

export default PublicProtectedRoute