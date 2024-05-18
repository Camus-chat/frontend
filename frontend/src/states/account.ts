import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import defaultProfileImg from '../../public/images/defaultProfileImg.svg';

interface accountState {
  index: number;
  isEnterprise: boolean;
  username: string;
  password: string;
  profileImg: File;
  nickname: string;
  companyName: string;
  companyEmail: string;
}

interface accountAction {
  prevIndex: () => void;
  nextIndex: () => void;
  setIsEnterprise: (isEnterprise: boolean) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setProfileImg: (profileImg: File) => void;
  setNickname: (nickname: string) => void;
  setCompanyName: (companyName: string) => void;
  setCompanyEmail: (companyEmail: string) => void;
}

export const useAccountStore = create<accountState & accountAction>()(
  devtools((set) => ({
    index: 0,
    isEnterprise: true,
    username: '',
    password: '',
    profileImg: defaultProfileImg,
    nickname: '',
    companyName: '',
    companyEmail: '',

    prevIndex: () =>
      set((prev) => ({
        index: prev.index - 1,
      })),
    nextIndex: () =>
      set((prev) => ({
        index: prev.index + 1,
      })),
    setIsEnterprise: (isEnterprise: boolean) => set({ isEnterprise }),
    setUsername: (username: string) => set({ username }),
    setPassword: (password: string) => set({ password }),
    setProfileImg: (profileImg: File) => set({ profileImg }),
    setNickname: (nickname: string) => set({ nickname }),
    setCompanyName: (companyName: string) => set({ companyName }),
    setCompanyEmail: (companyEmail: string) => set({ companyEmail }),
  })),
);
