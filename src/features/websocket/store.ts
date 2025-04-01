import { create } from 'zustand';

import { CamusClient } from './model';

interface State {
  client: CamusClient;
}

interface Actions {}

type Store = State & Actions;

export const useWebsocketStore = create<Store>((set) => ({
  client: new CamusClient(),
}));
