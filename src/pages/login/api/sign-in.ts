'use client';

import { callAPI } from '@/shared/api';
import { useAuthStore } from '@/shared/store';

export const signIn = async (data: LogIn) => {
  return callAPI
    .auth('/api/login', data)
    .then((res) => {
      const token = res.data;
      const { setToken } = useAuthStore.getState();
      setToken(token);
      return true;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(err);
      }
      return false;
    });
};
