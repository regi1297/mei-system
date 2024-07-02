// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Ajuste a URL base se necessário
});

export default api;
