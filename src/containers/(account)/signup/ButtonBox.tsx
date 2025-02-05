import { Button } from '@/shared/ui';

import { useStepStore } from './store/step';

interface Props {
  disabled?: boolean;
}

const ButtonBox = ({ disabled }: Props) => {
  const { clickPrev, nextStep } = useStepStore((state) => ({
    clickPrev: state.prevStep,
    nextStep: state.nextStep,
  }));
  const clickNext = disabled ? () => {} : nextStep;
  const nextColor = disabled ? 'disable' : 'blue';

  return (
    <div className='mt-40 flex justify-between'>
      <Button size='large' color='transparent' onClick={clickPrev}>
        이전
      </Button>
      <Button size='large' color={nextColor} onClick={clickNext}>
        다음
      </Button>
    </div>
  );
};

export default ButtonBox;
