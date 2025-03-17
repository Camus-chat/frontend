import { Chip } from '@heroui/chip';

import {
  FILTER_COLOR_MAP,
  FILTER_NAME_MAP,
} from '@/pages/channel/config/chips';
import { FilterKey } from '@/pages/channel/config/type';

interface Props<T extends FilterKey> {
  name: T;
}

const ChannelFilterChip = <T extends FilterKey>({ name }: Props<T>) => {
  const iconName = FILTER_NAME_MAP[name];
  const color = FILTER_COLOR_MAP[name];

  return (
    <Chip
      size='sm'
      variant='solid'
      classNames={{ content: 'text-white' }}
      color={color}
    >
      {iconName}
    </Chip>
  );
};

export default ChannelFilterChip;
