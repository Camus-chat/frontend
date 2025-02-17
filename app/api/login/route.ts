import { NextRequest, NextResponse } from 'next/server';

import { api } from '@/shared/api';
import { ACCESS_TOKEN } from '@/shared/config';

export const POST = async (request: NextRequest) => {
  const { username, password }: LogIn = await request.json();
  const { accessToken } = await api.serverSide
    .post(
      '/member/login',
      { username, password },
      {
        headers: { 'X-Bypass-Interceptor': true },
      },
    )
    .then((res) => res.data);

  const clientResponse = NextResponse.json(accessToken);
  clientResponse.cookies.set(ACCESS_TOKEN, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
  return clientResponse;
};
