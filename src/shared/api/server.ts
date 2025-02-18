'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

import { ACCESS_TOKEN } from '@/shared/config';

const server = axios.create({
  baseURL: process.env.SERVER_SIDE_FETCH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const get = async (url: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;

  return server.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
