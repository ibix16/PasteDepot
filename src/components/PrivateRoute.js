import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = () => {
  const { user } = useAuth();

  // If the user is still being fetched, show a loading message
  if (user === undefined) {
    return <p>Loading...</p>;
  }

  // If the user is logged in, render the protected route, otherwise redirect to login
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
