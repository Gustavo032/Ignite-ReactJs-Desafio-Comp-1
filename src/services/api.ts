import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://server-read-me.vercel.app/',
});