import { create } from 'zustand';

interface State {
  key: null | string;
}

interface Actions {
  open: (key: string) => void;
  close: () => void;
}

type Store = State & Actions;

export const useServicePopup = create<Store>((set) => ({
  key: null,
  open: (key) => set({ key }),
  close: () => set({ key: null }),
}));
