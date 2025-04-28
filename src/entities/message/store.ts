import { create } from 'zustand';

type RoomId = ChattingRoom.Info['roomId'];

interface State {
  newMessageMap: Record<RoomId, Message[]>;
}

interface Actions {
  addNewMessage: (roomId: RoomId, message: Message) => void;
}

type Store = State & Actions;

export const useMessageStore = create<Store>((set) => ({
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
