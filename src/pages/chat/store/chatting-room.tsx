'use client';

import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

type RoomId = ChattingRoom['roomId'];

interface State {
  chattingRoomMap: Record<RoomId, ChattingRoom>;
}

interface Actions {
  read: (roomId: RoomId) => void;
}

type ChattingRoomStore = State & Actions;

const createChattingRoomStore = (initial: State['chattingRoomMap']) => {
  const create = createStore<ChattingRoomStore>();

  return create((set) => ({
    chattingRoomMap: initial,

    read: (roomId) => {
      set((state) => {
        const room = state.chattingRoomMap[roomId];
        if (!room) {
          return state;
        }
        state.chattingRoomMap[roomId] = {
          ...room,
          unreadCount: 0,
        };
        return state;
      });
    },
  }));
};

type ChattingRoomStoreApi = ReturnType<typeof createChattingRoomStore>;

const ChattingRoomContext = createContext<ChattingRoomStoreApi | null>(null);

export const ChattingRoomProvider: FC<{
  children: ReactNode;
  chattingRooms: ChattingRoom[];
}> = ({ chattingRooms, children }) => {
  const storeRef = useRef<ChattingRoomStoreApi | null>(null);

  if (storeRef.current === null) {
    const map = Object.fromEntries(
      chattingRooms.map((room) => [room.roomId, room]),
    );
    storeRef.current = createChattingRoomStore(map);
  }

  return (
    <ChattingRoomContext.Provider value={storeRef.current}>
      {children}
    </ChattingRoomContext.Provider>
  );
};

export const useChattingRoomStore = <T,>(
  selector: (store: ChattingRoomStore) => T,
): T => {
  const chattingRoomStore = useContext(ChattingRoomContext);

  if (!chattingRoomStore) {
    throw new Error(
      'useChattingRoomStore must be used within ChattingRoomProvider',
    );
  }

  return useStore(chattingRoomStore, selector);
};
