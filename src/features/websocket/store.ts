import { create } from 'zustand';

import { CamusClient } from './model';

type RoomId = ChattingRoom['roomId'];

interface State {
  client: CamusClient;
  isConnected: boolean;
  newMessageMap: Record<RoomId, Message[]>;
}

interface Actions {
  setIsConnected: (isConnected: boolean) => void;
  addNewMessage: (roomId: RoomId, message: Message) => void;
}

type Store = State & Actions;

export const useWebsocketStore = create<Store>((set) => ({
  client: new CamusClient(),
  isConnected: false,
  setIsConnected: (isConnected: boolean) => set(() => ({ isConnected })),

  newMessageMap: {},
  addNewMessage: (roomId: RoomId, message: Message) =>
    set((prev) => {
      const messages = prev.newMessageMap[roomId] || [];
      return {
        newMessageMap: {
          ...prev.newMessageMap,
          [roomId]: [...messages, message],
        },
      };
    }),
}));
