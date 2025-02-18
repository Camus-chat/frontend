import axios from 'axios';

import { API_BASE_URL } from '@/shared/config';
import { useAuthStore } from '@/shared/store';

const baseURL =
  process.env.NODE_ENV === 'development' ? '/client' : API_BASE_URL;

export const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

client.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
