'use server';

import { cookies } from 'next/headers';

import { API_BASE_URL } from '@/shared/config';

export const getTokenServerSide = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refresh')?.value;

  return fetch(`${API_BASE_URL}/reissue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `refresh=${refreshToken}; HttpOnly; Secure; Path=/; SameSite=None`,
    },
    credentials: 'include',
  }).then((res) => {
    const accessToken = res.headers.get('access');
    return accessToken || '';
  });
};
