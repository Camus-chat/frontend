import { Chip } from '@heroui/chip';

import { CHANNEL_TYPE_NAME_MAP } from '@/pages/channel/config/chips';
import { ChannelTypeKey } from '@/pages/channel/config/type';

interface Props<T extends ChannelTypeKey> {
  name: T;
}

const ChannelTypeChip = <T extends ChannelTypeKey>({ name }: Props<T>) => {
  const iconName = CHANNEL_TYPE_NAME_MAP[name];

  return (
    <Chip
      size='sm'
      variant='solid'
      classNames={{ content: 'text-white' }}
      color='secondary'
    >
      {iconName}
    </Chip>
  );
};

export default ChannelTypeChip;
