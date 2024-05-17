import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { Channel } from '@/containers/(personal)/service/channel/type';

export const CREATE = true;
export const UPDATE = false;

interface channelState {
  isOpen: boolean;
  action: boolean;
  channel: Channel;
}

interface channelAction {
  openCreate: () => void;
  openUpdate: (channel: Channel) => void;
  close: () => void;
}

export const useChannelStore = create<channelState & channelAction>()(
  devtools((set) => ({
    isOpen: false,
    action: CREATE,
    channel: {} as Channel,

    openCreate: () =>
      set((prev) => ({
        ...prev,
        isOpen: true,
        action: CREATE,
      })),
    openUpdate: (channel: Channel) =>
      set((prev) => ({
        ...prev,
        isOpen: true,
        action: UPDATE,
        channel,
      })),
    close: () =>
      set((prev) => ({
        ...prev,
        isOpen: false,
      })),
  })),
);
