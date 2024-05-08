// frontend/src/utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Port that express runs on
});

export default api;
