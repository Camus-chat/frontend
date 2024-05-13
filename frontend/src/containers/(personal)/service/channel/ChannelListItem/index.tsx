import LinkIcon from '@mui/icons-material/Link';

import { FILTER_TYPE_MAP } from '@/containers/(personal)/service/channel/ChannelListItem/constants';
import type { Channel } from '@/containers/(personal)/service/channel/ChannelListItem/type';

import styles from './index.module.scss';
import Button from '@/components/Button';
import TextIcon from '@/components/TextIcon';

interface Props {
  channel: Channel;
}

const ChannelListitem = ({ channel }: Props) => {
  const channelTypeName = channel.private ? 'private' : 'group';
  const filterName = FILTER_TYPE_MAP[channel.filter];

  return (
    <li className={styles.channelListItem}>
      <div className={styles.info}>
        <div className={styles.title}>{channel.name}</div>
        <TextIcon name={channelTypeName} />
        <TextIcon name={filterName} />
      </div>
      <div className={styles.description}>{channel.description}</div>
      <div className={styles.buttons}>
        <Button size='small' color='lightgray' option='red'>
          삭제
        </Button>
        <Button size='small' color='skyblue'>
          수정
        </Button>
        <Button size='small' color='blue' option='link'>
          <LinkIcon />
        </Button>
      </div>
    </li>
  );
};

export default ChannelListitem;
