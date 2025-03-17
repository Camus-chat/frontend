import { Slider, type SliderProps } from '@heroui/slider';

import { useChannelFormStore } from '../store/form';

const MARKS = [
  {
    value: 0,
    label: '없음',
  },
  {
    value: 100,
    label: '약',
  },
  {
    value: 200,
    label: '중',
  },
  {
    value: 300,
    label: '강',
  },
];

const ChannelFilterLevelSlider = () => {
  const filterLevel = useChannelFormStore((state) => state.filterLevel);
  const setFilterLevel = useChannelFormStore(
    (state) => state.setFilterLevel,
  ) as SliderProps['onChange'];

  return (
    <Slider
      value={filterLevel}
      onChange={setFilterLevel}
      color='secondary'
      classNames={{
        label: 'font-semibold',
      }}
      label='필터링 강도'
      maxValue={300}
      step={100}
      minValue={0}
      marks={MARKS}
      hideValue
      hideThumb
      showSteps
    />
  );
};

export default ChannelFilterLevelSlider;
