import { create } from 'zustand';

interface State {
  channels: Channel[];
}

interface Actions {
  addChannel: (channel: Channel) => void;
  setChannels: (channels: Channel[]) => void;
}

type Store = State & Actions;

export const useChannelListStore = create<Store>((set) => ({
  channels: [],

  addChannel: (channel) =>
    set((state) => ({ channels: [...state.channels, channel] })),
  setChannels: (channels) => set({ channels }),
}));
