import TextIcon from '@/components/TextIcon';
import ChannelLinkCopyButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelLinkCopyButton';
import ChannelUpdateButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelUpdateButton';
import { FILTER_CLASS_MAP } from '@/containers/(personal)/service/channel/constants';
import type { Channel } from '@/containers/(personal)/service/channel/type';
import { Button } from '@/shared/ui';

import styles from './index.module.scss';

interface Props {
  channel: Channel;
}

const ChannelListItem = ({ channel }: Props) => {
  return (
    <li className={styles.channelListItem}>
      <div className={styles.info}>
        <div className={styles.title}>{channel.title}</div>
        <TextIcon name={channel.type} />
        <TextIcon name={FILTER_CLASS_MAP[channel.filterLevel]} />
      </div>
      <div className={styles.description}>{channel.content}</div>
      <div className={styles.buttons}>
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
