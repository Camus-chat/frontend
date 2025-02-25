'use server';

import { cookies } from 'next/headers';

import { callAPI } from '@/shared/api';
import { ACCESS_TOKEN } from '@/shared/config';

export const signIn = async (data: LogIn) => {
  const cookieStore = await cookies();

  return callAPI.serverSide
    .post('/member/login', data, {
      headers: {
        'X-Bypass-Authorization': true,
      },
    })
    .then((res) => {
      const { accessToken } = res.data;

      cookieStore.set(ACCESS_TOKEN, accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });

      return accessToken;
    });
};
