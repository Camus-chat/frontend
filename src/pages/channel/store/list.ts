import { create } from 'zustand';

interface State {
  channels: Channel[];
}

interface Actions {
  addChannel: (channel: Channel) => void;
}

type Store = State & Actions;

export const useChannelListStore = create<Store>((set) => ({
  channels: [],

  addChannel: (channel) =>
    set((state) => ({ channels: [...state.channels, channel] })),
}));
