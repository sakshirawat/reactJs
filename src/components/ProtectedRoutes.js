// src/components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);

  if (!user) {
    alert("Please sign in first!");
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
