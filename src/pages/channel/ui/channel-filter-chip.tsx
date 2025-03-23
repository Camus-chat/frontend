import { Chip } from '@heroui/chip';

import { CHANNEL_FILTER_LEVEL } from '../config';

interface Props {
  level: number;
}

const ChannelFilterChip = ({ level }: Props) => {
  const { name, color } = CHANNEL_FILTER_LEVEL[level];

  if (!color) {
    return null;
  }

  return (
    <Chip variant='solid' className='h-6 w-6 text-xs text-white' color={color}>
      {name}
    </Chip>
  );
};

export default ChannelFilterChip;
