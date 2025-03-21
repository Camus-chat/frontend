import { Chip } from '@heroui/chip';

import { FILTERS } from '@/pages/channel/config/chips';

interface Props {
  level: FilterType;
}

const ChannelFilterChip = ({ level }: Props) => {
  const { name, color } = FILTERS[level];

  return (
    <Chip variant='solid' className='h-6 w-6 text-xs text-white' color={color}>
      {name}
    </Chip>
  );
};

export default ChannelFilterChip;
