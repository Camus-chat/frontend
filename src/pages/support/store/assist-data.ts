import { create } from 'zustand';

interface States {
  email: string;
  name: string;
  company: string;
  isAgreed: boolean;
  emailError: string;
  nameError: string;
  companyError: string;
}

interface Actions {
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setCompany: (company: string) => void;
  setIsAgreed: (isAgreed: boolean) => void;

  setEmailError: (emailError: string) => void;
  setNameError: (nameError: string) => void;
  setCompanyError: (companyError: string) => void;
}

export const useAssistDataStore = create<States & Actions>((set) => ({
  email: '',
  name: '',
  company: '',
  isAgreed: false,
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setCompany: (company) => set({ company }),
  setIsAgreed: (isAgreed) => set({ isAgreed }),

  emailError: '',
  nameError: '',
  companyError: '',
  setEmailError: (emailError) => set({ emailError }),
  setNameError: (nameError) => set({ nameError }),
  setCompanyError: (companyError) => set({ companyError }),
}));
