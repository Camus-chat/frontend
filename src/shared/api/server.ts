import axios from 'axios';

export const server = axios.create({
  baseURL: process.env.SERVER_SIDE_FETCH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

server.interceptors.request.use((config) => {
  if (config.headers['X-Bypass-Interceptor']) {
    delete config.headers['X-Bypass-Interceptor'];
    return config;
  }

  // TODO: Add token

  return config;
});
