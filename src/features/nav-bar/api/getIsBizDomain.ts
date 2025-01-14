'use server';

import { BASE_URL } from '@/shared/config';

export const getIsBizDomain = async () => {
  const host = await fetch(`${BASE_URL}/api/host`).then((res) => res.json());
  return host.startsWith('biz');
};
