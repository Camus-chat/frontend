import { create } from 'zustand';

interface State {
  step: number;
}

interface Action {
  nextStep: () => void;
  prevStep: () => void;
}

export const useStepStore = create<State & Action>((set) => ({
  step: 0,
  nextStep: () => set((prevState) => ({ step: prevState.step + 1 })),
  prevStep: () => set((prevState) => ({ step: prevState.step - 1 })),
}));
