import { useStepStore } from '../store/step';

interface Props {
  children: ReactNode;
  index: number;
}

const Step = ({ children, index }: Props) => {
  const { step } = useStepStore((state) => ({ step: state.step }));

  if (step !== index) {
    return null;
  }

  return children;
};

export default Step;
