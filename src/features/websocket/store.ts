import { create } from 'zustand';

import { CamusClient } from './model';

interface State {
  client: CamusClient;
  isConnected: boolean;
}

interface Actions {
  setIsConnected: (isConnected: boolean) => void;
}

type Store = State & Actions;

export const useWebsocketStore = create<Store>((set) => ({
  client: new CamusClient(),
  isConnected: false,
  setIsConnected: (isConnected: boolean) => set(() => ({ isConnected })),
}));
