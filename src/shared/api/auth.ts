import axios from 'axios';

import { API_BASE_URL } from '@/shared/config';

const baseURL =
  process.env.NODE_ENV === 'development' ? '/client' : API_BASE_URL;

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
      config.baseURL = API_BASE_URL;
    }
    return config;
  });
}
