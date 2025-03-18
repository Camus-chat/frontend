'use client';

import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

interface State {
  channels: Channel[];
}

interface Actions {
  addChannel: (channel: Channel) => void;
}

type ChannelStore = State & Actions;

const createChannelStore = (initial: Channel[]) => {
  const create = createStore<ChannelStore>();

  return create((set) => ({
    channels: initial,

    addChannel: (channel) =>
      set((state) => ({ channels: [...state.channels, channel] })),
  }));
};

type ChannelStoreApi = ReturnType<typeof createChannelStore>;

const ChannelContext = createContext<ChannelStoreApi | null>(null);

interface Props {
  children: ReactNode;
  channels: Channel[] | null;
}

export const ChannelProvider = ({ channels, children }: Props) => {
  const storeRef = useRef<ChannelStoreApi | null>(null);

  if (channels === null) {
    if (process.env.NODE_ENV === 'development') {
      channels = []; // eslint-disable-line no-param-reassign
    } else {
      throw new Error('채널 목록을 불러오는데 실패했습니다.');
    }
  }

  if (storeRef.current === null) {
    storeRef.current = createChannelStore(channels);
  }

  return (
    <ChannelContext.Provider value={storeRef.current}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannelStore = <T,>(
  selector: (store: ChannelStore) => T,
): T => {
  const channelStore = useContext(ChannelContext);

  if (!channelStore) {
    throw new Error('useChannelStore must be used within ChannelProvider');
  }

  return useStore(channelStore, selector);
};
