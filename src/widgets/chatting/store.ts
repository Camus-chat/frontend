import { create } from 'zustand';

interface State {
  currentRoom: ChattingRoom | null;
}

interface Actions {
  setRoom: (selectedRoom: ChattingRoom) => void;
}

type ChattingRoomStore = State & Actions;

export const useChattingStore = create<ChattingRoomStore>((set) => ({
  currentRoom: null,
  setRoom: (selectedRoom) => set({ currentRoom: selectedRoom }),
}));
