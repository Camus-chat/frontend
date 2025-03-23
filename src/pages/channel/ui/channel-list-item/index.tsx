import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';

import ChipChannelFilter from '@/pages/channel/ui/chip-channel-filter';
import ChipChannelType from '@/pages/channel/ui/chip-channel-type';
import { listItem } from '@/pages/channel/ui/styles';
import { Button } from '@/shared/ui';

import ChannelLinkCopyButton from './channel-link-copy-button';

interface Props {
  channel: Channel;
}

const ChannelListItem = ({ channel }: Props) => {
  return (
    <Card shadow='none' className={listItem({ class: 'flex-col p-1' })}>
      <CardHeader className='flex items-center gap-1 pb-1'>
        <div className='text-3xl font-medium'>{channel.title}</div>
        <ChipChannelType type={channel.type} />
        <ChipChannelFilter level={channel.filterLevel} />
      </CardHeader>
      <CardBody className='overflow-auto truncate pt-1 scrollbar-hide'>
        {channel.content}
      </CardBody>
      <CardFooter className='gap-1'>
        <Button
          size='sm'
          variant='flat'
          className='hover:text-red-500'
          isDisabled
        >
          삭제
        </Button>
        <Button size='sm' color='primary' variant='flat' isDisabled>
          수정
        </Button>
        <ChannelLinkCopyButton link={channel.link} />
      </CardFooter>
    </Card>
  );
};

export default ChannelListItem;
