'use client';

import { useEffect } from 'react';
import { create } from 'zustand';

interface AuthState {
  token: string;
}

interface AuthActions {
  setToken: (token: string) => void;
}

export const useTokenStore = create<AuthState & AuthActions>((set) => ({
  token: '',
  setToken: (token: string) => set({ token }),
}));

export const TokenProvider: FC<{ children: ReactNode; token: string }> = ({
  children,
  token,
}) => {
  useEffect(() => {
    useTokenStore.getState().setToken(token);
  }, []);

  return children;
};
