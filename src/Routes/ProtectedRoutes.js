import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';  // Importação de Login
import Cadastro from '../Pages/Cadastro';  // Importação de Cadastro
import ProtectedRoutes from './ProtectedRoutes';  // Importação de ProtectedRoutes

const Routering = () => {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota de Cadastro */}
        <Route path="/cadastrar" element={<Cadastro />} />
        
        {/* Rota Protegida */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoutes>
              {/* Conteúdo da rota protegida */}
              <h1>Home - Página Protegida</h1>
            </ProtectedRoutes>
          } 
        />

        {/* Redireciona para a página de login caso a rota não seja encontrada */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default Routering;
