'use client';

import { useLayoutEffect } from 'react';

import { useTokenStore } from '@/shared/store';

const TokenProvider: FC<{ children: ReactNode; token: string }> = ({
  children,
  token,
}) => {
  useLayoutEffect(() => {
    useTokenStore.getState().setToken(token);
  }, []);

  return children;
};

export default TokenProvider;
