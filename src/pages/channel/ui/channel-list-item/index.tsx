import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';

import ChannelFilterChip from '@/pages/channel/ui/channel-filter-chip';
import ChannelTypeChip from '@/pages/channel/ui/channel-type-chip';
import { listItem } from '@/pages/channel/ui/styles';
import { Button } from '@/shared/ui';

import ChannelLinkCopyButton from './channel-link-copy-button';

interface Props {
  channel: Channel;
}

const ChannelListItem = ({ channel }: Props) => {
  return (
    <Card shadow='sm' className={listItem({ class: 'flex-col p-1' })}>
      <CardHeader className='flex items-center gap-1'>
        <div className='text-3xl'>{channel.title}</div>
        <ChannelTypeChip name={channel.type} />
        <ChannelFilterChip level={channel.filterLevel} />
      </CardHeader>
      <CardBody
        className='overflow-auto'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {channel.content}
      </CardBody>
      <CardFooter className='mb-1 gap-1'>
        <Button size='sm' variant='flat' className='hover:text-red-500'>
          삭제
        </Button>
        <Button size='sm' color='primary' variant='flat'>
          수정
        </Button>
        <ChannelLinkCopyButton link={channel.link} />
      </CardFooter>
    </Card>
  );
};

export default ChannelListItem;
