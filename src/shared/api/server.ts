'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

import { ACCESS_TOKEN, API_BASE_URL } from '@/shared/config';

const server = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

server.interceptors.request.use(async (config) => {
  if (config.headers['X-Bypass-Authorization']) {
    return config;
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default server;
