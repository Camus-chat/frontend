import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const CREATE = true;
export const UPDATE = false;

interface channelState {
  isOpen: boolean;
  action: boolean;
  channel: Channel;
  newChannels: Channel[];
}

interface channelAction {
  openCreate: () => void;
  openUpdate: (channel: Channel) => void;
  close: () => void;
  addNewChannel: (channel: Channel) => void;
  resetNewChannels: () => void;
}

export const useChannelStore = create<channelState & channelAction>()(
  devtools((set) => ({
    isOpen: false,
    action: CREATE,
    channel: {} as Channel,
    newChannels: [],

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
    addNewChannel: (channel: Channel) =>
      set((prev) => ({
        ...prev,
        newChannels: [...prev.newChannels, channel],
      })),
    resetNewChannels: () =>
      set((prev) => ({
        ...prev,
        newChannels: [],
      })),
  })),
);
