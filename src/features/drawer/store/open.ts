import { create } from 'zustand';

interface drawerState {
  open: boolean;
}

interface drawerAction {
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useDrawerStore = create<drawerState & drawerAction>((set) => ({
  open: false,
  openDrawer: () => set({ open: true }),
  closeDrawer: () => set({ open: false }),
}));
