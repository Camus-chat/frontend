import { create } from 'zustand';

type State = Omit<Channel, 'link'>;

interface Actions {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
}

type Store = State & Actions;

export const useChannelFormStore = create<Store>((set) => ({
  type: 'private',
  title: '',
  content: '',
  filterLevel: 0,

  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
}));
