import { create } from 'zustand';

interface States {
  email: string;
  name: string;
  lastName: string;
  company: string;
  isAgreed: boolean;

  emailError: string;
  nameError: string;
  lastNameError: string;
  companyError: string;
}

interface Actions {
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setCompany: (company: string) => void;
  setIsAgreed: (isAgreed: boolean) => void;

  setEmailError: (emailError: string) => void;
  setNameError: (nameError: string) => void;
  setLastNameError: (lastNameError: string) => void;
  setCompanyError: (companyError: string) => void;

  reset: () => void;
}

export const useAssistDataStore = create<States & Actions>((set) => ({
  email: '',
  name: '',
  lastName: '',
  company: '',
  isAgreed: false,
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setLastName: (lastName) => set({ lastName }),
  setCompany: (company) => set({ company }),
  setIsAgreed: (isAgreed) => set({ isAgreed }),

  emailError: '',
  nameError: '',
  lastNameError: '',
  companyError: '',
  setEmailError: (emailError) => set({ emailError }),
  setNameError: (nameError) => set({ nameError }),
  setLastNameError: (lastNameError) => set({ lastNameError }),
  setCompanyError: (companyError) => set({ companyError }),

  reset: () =>
    set({
      email: '',
      name: '',
      lastName: '',
      company: '',
      isAgreed: false,
    }),
}));
