import LinkIcon from '@mui/icons-material/Link';

import ChannelUpdateButton from '@/containers/(personal)/service/channel/ChannelListItem/ChannelUpdateButton';
import { FILTER_TYPE_MAP } from '@/containers/(personal)/service/channel/ChannelListItem/constants';
import type { Channel } from '@/containers/(personal)/service/channel/type';

import styles from './index.module.scss';
import Button from '@/components/Button';
import TextIcon from '@/components/TextIcon';

interface Props {
  channel: Channel;
}

const ChannelListitem = ({ channel }: Props) => {
  const filterName = FILTER_TYPE_MAP[channel.filterLevel];

  return (
    <li className={styles.channelListItem}>
      <div className={styles.info}>
        <div className={styles.title}>{channel.title}</div>
        <TextIcon name={channel.type} />
        <TextIcon name={filterName} />
      </div>
      <div className={styles.description}>{channel.content}</div>
      <div className={styles.buttons}>
        <Button size='small' color='lightgray' option='red'>
          삭제
        </Button>
        <ChannelUpdateButton />
        <Button size='small' color='blue' option='link'>
          <LinkIcon />
        </Button>
      </div>
    </li>
  );
};

export default ChannelListitem;
