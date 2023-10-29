import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://motors-shop-alinecarvalho.onrender.com',
  timeout: 15000,
});
