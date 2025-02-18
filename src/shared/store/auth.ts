import { create } from 'zustand';

interface AuthState {
  token: string;
}

interface AuthActions {
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  token: '',
  setToken: (token: string) => set({ token }),
}));
