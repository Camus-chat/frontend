'use client';

import axios from 'axios';

import { API_BASE_URL } from '@/shared/config';
import { useTokenStore } from '@/shared/store';

const baseURL =
  process.env.NODE_ENV === 'development' ? '/client' : API_BASE_URL;

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

client.interceptors.request.use((config) => {
  if (config.headers['X-Bypass-Authorization']) {
    return config;
  }

  const { token } = useTokenStore.getState();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default client;
