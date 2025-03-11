import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'; // Certifique-se de que está usando importação padrão
import Cadastro from './Pages/Cadastro'; // Importando Cadastro
import Routering from './Routes/routes'; // Roteamento principal

function App() {
  return (
    <Routering />
  );
}

export default App;
