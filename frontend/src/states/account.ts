import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface accountState {
  index: number;
  isEnterprise: boolean;
  id: string;
  password: string;
  profileImg: string;
  nickname: string;
}

interface accountAction {
  prevIndex: () => void;
  nextIndex: () => void;
  setIsEnterprise: (isEnterprise: boolean) => void;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setProfileImg: (profileImg: string) => void;
  setNickname: (nickname: string) => void;
}

export const useAccountStore = create<accountState & accountAction>()(
  devtools((set) => ({
    index: 0,
    isEnterprise: true,
    id: '',
    password: '',
    profileImg: '',
    nickname: '',

    prevIndex: () =>
      set((prev) => ({
        index: prev.index - 1,
      })),
    nextIndex: () =>
      set((prev) => ({
        index: prev.index + 1,
      })),
    setIsEnterprise: (isEnterprise: boolean) => set({ isEnterprise }),
    setId: (id: string) => set({ id }),
    setPassword: (password: string) => set({ password }),
    setProfileImg: (profileImg: string) => set({ profileImg }),
    setNickname: (nickname: string) => set({ nickname }),
  })),
);
