'use client';

import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

import { useMemberStore } from '@/entities/member';
import { addParsedTime } from '@/entities/message';

import { getCounterpart } from '../lib';

type RoomId = ChattingRoom['roomId'];
type MemberId = Member['uuid'];

interface State {
  chattingRoomMap: Record<RoomId, ChattingRoom>;
  chattingMemberMap: Record<MemberId, Member>;
}

interface Actions {
  read: (roomId: RoomId) => void;
}

type ChattingRoomStore = State & Actions;

const createChattingRoomStore = ({
  chattingRoomMap,
  chattingMemberMap,
}: State) => {
  const create = createStore<ChattingRoomStore>();

  return create((set) => ({
    chattingRoomMap,
    chattingMemberMap,

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
  chattingRooms: ChattingRoom.RawData[];
  chattingMemberMap: Record<MemberId, Member>;
}> = ({ children, chattingRooms, chattingMemberMap }) => {
  const storeRef = useRef<ChattingRoomStoreApi | null>(null);
  const memberId = useMemberStore((state) => state.member?.uuid);

  if (storeRef.current === null) {
    const chattingRoomMap = Object.fromEntries(
      chattingRooms.map((room) => {
        return [
          room.roomId,
          {
            ...room,
            lastMessage: addParsedTime(room.lastMessage),
            counterpart: getCounterpart(room, memberId),
          },
        ];
      }),
    );
    storeRef.current = createChattingRoomStore({
      chattingRoomMap,
      chattingMemberMap,
    });
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
