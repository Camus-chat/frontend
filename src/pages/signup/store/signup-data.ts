import { create } from 'zustand';

interface States extends Account.SignUp {
  isAgreed: boolean;
  nicknameError: string;
  usernameError: string;
  passwordError: string;
}

interface Actions {
  setNickname: (nickname: string) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setIsEnterprise: (isEnterprise: boolean) => void;
  setIsAgreed: (isAgree: boolean) => void;

  setNicknameError: (nicknameError: string) => void;
  setUsernameError: (usernameError: string) => void;
  setPasswordError: (passwordError: string) => void;
}

export const useSignupDataStore = create<States & Actions>((set) => ({
  nickname: '',
  username: '',
  password: '',
  isEnterprise: false,
  isAgreed: false,
  setNickname: (nickname) => set({ nickname }),
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setIsEnterprise: (isEnterprise) => set({ isEnterprise }),
  setIsAgreed: (isAgreed) => set({ isAgreed }),

  nicknameError: '',
  usernameError: '',
  passwordError: '',
  setNicknameError: (nicknameError) => set({ nicknameError }),
  setUsernameError: (usernameError) => set({ usernameError }),
  setPasswordError: (passwordError) => set({ passwordError }),
}));
