'use server';

import { cookies } from 'next/headers';

export const getTokenServerSide = async () => {
  const refreshToken = cookies().get('refresh')?.value;

  return fetch(`${process.env.SERVER_SIDE_FETCH_URL}/reissue`, {
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
