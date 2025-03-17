import { create } from 'zustand';

type State = ChannelCreateRequest;

interface Actions {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setFilterLevel: (filterLevel: number) => void;
}

type Store = State & Actions;

export const useChannelFormStore = create<Store>((set) => ({
  type: 'private',
  title: '',
  content: '',
  filterLevel: 0,

  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
  setFilterLevel: (filterLevel) => set({ filterLevel }),
}));
