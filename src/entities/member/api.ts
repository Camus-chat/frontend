'use server';

import { callAPI } from '@/shared/api';

export const requestMemberInfo = async (): Promise<Member | null> => {
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
