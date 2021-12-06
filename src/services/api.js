import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-serasa-api.herokuapp.com/serasa',
});

export default api;
