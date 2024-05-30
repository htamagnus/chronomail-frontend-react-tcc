import axios from 'axios';

const baseURL = 'https://chronomail-backend-nestjs-tcc-production.up.railway.app';

export const Api = axios.create({ baseURL });
