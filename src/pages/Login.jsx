import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Login() {
  // Authentication is disabled. Redirecting to home.
  return <Navigate to="/" replace />;
}