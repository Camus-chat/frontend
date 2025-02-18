import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? '/client'
    : process.env.SERVER_SIDE_FETCH_URL;

export const auth = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

if (process.env.NODE_ENV === 'development') {
  auth.interceptors.request.use((config) => {
    if (config.url?.startsWith('/member/login')) {
      config.baseURL = process.env.SERVER_SIDE_FETCH_URL;
    }
    return config;
  });
}
