import React, { useState } from 'react';
import { Container, Form, SubContainerSign } from './styles';
import Input from '../../Components/Input/index';
import Botao from '../../Components/Botao/index';
import { validarEmail, validarSenha } from '../../Utils/validadores';
import UserService from '../../Services/UserService';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const userService = new UserService();

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation(); // Para capturar de onde o usuário veio

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await userService.login(form);
      console.log('response do Login', response);

      // Verifique a resposta do backend
      if (response && response.success) {
        // Salvando o token no localStorage
        localStorage.setItem('token', response.token); // Salve o token conforme o formato de resposta do seu backend
        
        alert('Usuário logado com sucesso');

        // Redireciona para a página de onde o usuário veio (se houver) ou para a página inicial
        const from = location.state?.from || '/home'; // Se não houver, vai para /home
        navigate(from);
      } else {
        alert('Erro ao logar. Tente novamente!');
      }

      setLoading(false);
    } catch (err) {
      console.error('Erro no login:', err);
      alert('Algo deu errado com o Login. Tente novamente.');
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Faça o seu Login <span role="img" aria-label="emoji de onda">👋</span></h1>

        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
          value={form.email}
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
          value={form.password}
        />

        <Botao
          type='submit'
          text={loading ? 'Entrando...' : 'Entrar!'}
          disabled={loading || !validadorInput()}
        />

        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="/cadastrar">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
