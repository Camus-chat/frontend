import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const CREATE = true;
export const UPDATE = false;

interface channelState {
  isOpen: boolean;
  action: boolean;
}

interface channelAction {
  openCreate: () => void;
  openUpdate: () => void;
  close: () => void;
}

export const useChannelStore = create<channelState & channelAction>()(
  devtools((set) => ({
    isOpen: false,
    action: CREATE,

    openCreate: () =>
      set((prev) => ({
        isOpen: true,
        action: CREATE,
      })),
    openUpdate: () =>
      set((prev) => ({
        isOpen: true,
        action: UPDATE,
      })),
    close: () =>
      set((prev) => ({
        isOpen: false,
      })),
  })),
);
