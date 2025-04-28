'use server';

import axios from 'axios';

import { API_BASE_URL, BACKEND_INTERNAL_URL } from '@/shared/config';

import { getToken } from './token';

const baseURL =
  process.env.NODE_ENV === 'production' ? BACKEND_INTERNAL_URL : API_BASE_URL;

const server = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

server.interceptors.request.use(async (config) => {
  if (config.headers['X-Bypass-Authorization']) {
    return config;
  }

  const accessToken = await getToken();
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default server;
