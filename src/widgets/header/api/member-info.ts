'use server';

import { cookies } from 'next/headers';

import { callAPI } from '@/shared/api';
import { ACCESS_TOKEN } from '@/shared/config';

export const fetchMemberInfo = async (): Promise<Member | null> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  if (!accessToken) {
    return null;
  }

  return callAPI.serverSide
    .get('/member/info')
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
      return null;
    });
};
