import TextIcon from '@/components/TextIcon';
import ChannelLinkCopyButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelLinkCopyButton';
import ChannelUpdateButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelUpdateButton';
import { FILTER_CLASS_MAP } from '@/containers/(personal)/service/channel/constants';
import type { Channel } from '@/containers/(personal)/service/channel/type';
import { Button } from '@/shared/ui';

interface Props {
  channel: Channel;
}

const ChannelListItem = ({ channel }: Props) => {
  return (
    <li className='hover:shadow-[0 1px 4px 0 rgba(0, 0, 0, 0.07)] m-2 flex min-h-[110px] flex-col rounded-lg border border-gray-100 p-4 hover:transition-all hover:duration-300'>
      <div className='flex items-center'>
        <div className='mr-0.5 overflow-hidden text-ellipsis text-xl font-semibold'>
          {channel.title}
        </div>
        <div className='mx-2 flex items-center gap-1'>
          <TextIcon name={channel.type} />
          <TextIcon name={FILTER_CLASS_MAP[channel.filterLevel]} />
        </div>
      </div>
      <div className='py-1'>{channel.content}</div>
      <div className='flex justify-start gap-1'>
        <Button size='sm' variant='flat' className='hover:text-red-500'>
          삭제
        </Button>
        <ChannelUpdateButton channel={channel} />
        <ChannelLinkCopyButton link={channel.link} />
      </div>
    </li>
  );
};

export default ChannelListItem;
