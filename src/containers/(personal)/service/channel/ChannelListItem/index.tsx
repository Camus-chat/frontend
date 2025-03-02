import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';

import TextIcon from '@/components/TextIcon';
import ChannelDeleteButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelDeleteButton';
import ChannelLinkCopyButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelLinkCopyButton';
import ChannelUpdateButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelUpdateButton';
import { FILTER_CLASS_MAP } from '@/containers/(personal)/service/channel/constants';
import type { Channel } from '@/containers/(personal)/service/channel/type';

interface Props {
  channel: Channel;
}

const ChannelListItem = ({ channel }: Props) => {
  return (
    <Card
      fullWidth
      className='hover:shadow-[0_1px_4px_rgba(0, 0, 0, 0.07)] m-2 flex min-h-[110px] flex-col rounded-lg border border-gray-100 p-2 shadow-none hover:transition-all hover:duration-300'
    >
      <CardHeader className='mt-1 flex items-center'>
        <div className='mr-0.5 overflow-hidden text-ellipsis text-xl font-semibold'>
          {channel.title}
        </div>
        <div className='mx-2 flex items-center gap-1'>
          <TextIcon name={channel.type} />
          <TextIcon name={FILTER_CLASS_MAP[channel.filterLevel]} />
        </div>
      </CardHeader>
      <CardBody className='py-0 font-light'>{channel.content}</CardBody>
      <CardFooter className='flex justify-start gap-1.5'>
        <ChannelDeleteButton channel={channel} />
        <ChannelUpdateButton channel={channel} />
        <ChannelLinkCopyButton link={channel.link} />
      </CardFooter>
    </Card>
  );
};

export default ChannelListItem;
