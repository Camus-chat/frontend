import { Chip } from '@heroui/chip';

import { CHANNEL_TYPE_NAME } from '../config';

interface Props {
  type: ChannelType;
}

const ChipChannelType = ({ type }: Props) => {
  const name = CHANNEL_TYPE_NAME[type];

  return (
    <Chip
      size='sm'
      variant='solid'
      classNames={{ content: 'text-white' }}
      color='secondary'
    >
      {name}
    </Chip>
  );
};

export default ChipChannelType;
