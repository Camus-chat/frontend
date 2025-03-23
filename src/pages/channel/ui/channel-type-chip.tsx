import { Chip } from '@heroui/chip';

import { CHANNEL_TYPE_NAME } from '../config';

interface Props {
  name: ChannelType;
}

const ChannelTypeChip = ({ name }: Props) => {
  const iconName = CHANNEL_TYPE_NAME[name];

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
