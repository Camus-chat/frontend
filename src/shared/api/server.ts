import axios from 'axios';

export const server = axios.create({
  baseURL: process.env.SERVER_SIDE_FETCH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

server.interceptors.request.use((config) => {
  // TODO: Add token

  return config;
});
