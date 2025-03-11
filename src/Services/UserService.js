import axios from 'axios';

export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN + '/api', // Certifique-se de que está pegando o baseURL correto
    });
  }

  // Login com tratamento de erro
  async login(dados) {
    try {
      const { data } = await this.axios.post('/login', dados);

      if (data) {
        localStorage.setItem('nome', data.user.nome);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('token', data.token.token);

        return true; // Sucesso no login
      }

      return false; // Caso não tenha retornado dados válidos
    } catch (error) {
      console.error('Erro ao tentar fazer login', error);
      return false; // Retorna false em caso de erro
    }
  }

  // Cadastro de usuário
  async cadastrar(dados) {
    try {
      return await this.axios.post('/user', dados); // Ajuste o endpoint de cadastro conforme sua API
    } catch (error) {
      console.error('Erro ao tentar cadastrar', error);
      throw error; // Propaga o erro
    }
  }

  // Verificação de usuário autenticado
  usuarioAutenticado() {
    return localStorage.getItem('token') !== null;
  }

  // Logout, removendo dados do usuário
  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
  }
}
