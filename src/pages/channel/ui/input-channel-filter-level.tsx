import { Slider, type SliderProps } from '@heroui/slider';

import { CHANNEL_FILTER_LEVEL } from '../config';
import { useChannelFormStore } from '../store/form';

const MARKS = Object.entries(CHANNEL_FILTER_LEVEL).map(([key, value]) => ({
  value: parseInt(key, 10),
  label: value.name,
}));

const InputChannelFilterLevel = () => {
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

export default InputChannelFilterLevel;
