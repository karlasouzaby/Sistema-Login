import React, { useState } from 'react';
import { Container, Form, SubContainerSign } from './styles';
import Input from '../../Components/Input';
import Botao from '../../Components/Botao';
import { validarEmail, validarSenha, validarTelefone, validarNome, validarConfirmarSenha } from '../../Utils/validadores';
import UserService from '../../Services/UserService';
import { NavLink, useNavigate } from 'react-router-dom';

const userService = new UserService();

const Cadastro = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    password: '',
    confirmarPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await userService.cadastrar({
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        password: form.password,
      });
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        });
        if (responseLogin) {
          alert('Usuário cadastrado com sucesso');
          navigate('/home');
        }
      }
      setLoading(false);
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
      alert('Algo deu errado com o Cadastro. Tente novamente.');
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validadorInput = () => {
    return (
      validarEmail(form.email) &&
      validarSenha(form.password) &&
      validarTelefone(form.telefone) &&
      validarConfirmarSenha(form.password, form.confirmarPassword) &&
      validarNome(form.nome)
    );
  };

  return (
    <Container>
      <Form><p>Bem-vindo! <span role="img" aria-label="rosto sorridente">😄</span></p>

  



        <Input name="nome" placeholder="Digite o seu nome" onChange={handleChange} type="text" />
        <Input name="telefone" placeholder="Digite o seu telefone" onChange={handleChange} type="number" />
        <Input name="email" placeholder="Digite o seu e-mail" onChange={handleChange} type="email" />
        <Input name="password" placeholder="Digite a sua senha" onChange={handleChange} type="password" />
        <Input name="confirmarPassword" placeholder="Confirme a sua senha" onChange={handleChange} type="password" />
        <Botao
          type="submit"
          text={loading ? 'Cadastrando...' : 'Efetuar Cadastro!'}
          onClick={handleSubmit}
          disabled={loading || !validadorInput()}
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="/login">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Cadastro;
