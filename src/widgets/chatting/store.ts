import { create } from 'zustand';

interface State {
  currentRoomId: string | null;
}

interface Actions {
  setRoomId: (currentRoomId: string) => void;
}

type ChattingRoomStore = State & Actions;

export const useChattingStore = create<ChattingRoomStore>((set) => ({
  currentRoomId: null,
  setRoomId: (currentRoomId) => set({ currentRoomId }),
}));
