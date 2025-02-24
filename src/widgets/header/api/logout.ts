'use server';

import { cookies } from 'next/headers';

import { ACCESS_TOKEN } from '@/shared/config';

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_TOKEN);
};
