'use client';

import { useEffect } from 'react';

import { useTokenStore } from '@/shared/store';

const TokenProvider: FC<{ children: ReactNode; token: string }> = ({
  children,
  token,
}) => {
  useEffect(() => {
    useTokenStore.getState().setToken(token);
  }, []);

  return children;
};

export default TokenProvider;
