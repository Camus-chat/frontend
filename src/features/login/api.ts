'use server';

import { cookies } from 'next/headers';

import { callAPI } from '@/shared/api';
import { ACCESS_TOKEN } from '@/shared/config';

export const signIn = async (account: Account) => {
  const cookieStore = await cookies();

  const {
    data: { accessToken },
  } = await callAPI.serverSide.post<{ accessToken: string }>(
    '/member/login',
    account,
    {
      headers: {
        'X-Bypass-Authorization': true,
      },
    },
  );

  cookieStore.set(ACCESS_TOKEN, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });

  return accessToken;
};
