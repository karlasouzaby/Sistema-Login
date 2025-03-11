import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem('token'); // Verifica o token no localStorage

  if (!token) {
    // Se não tiver token, redireciona para o login
    return <Navigate to="/login" />;
  }

  // Se tiver token, renderiza o conteúdo protegido
  return children;
};

export default ProtectedRoutes;
