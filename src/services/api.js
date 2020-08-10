import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gabrielguima-com.umbler.net/serasa',
});

export default api;
