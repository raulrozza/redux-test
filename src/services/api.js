import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.16.103:5000',
});

export default api;
