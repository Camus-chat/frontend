import type { Channel } from './type';
import ChannelActionPopup from '@/containers/(personal)/service/channel/ChannelActionPopup';
import ChannelCreateButton from '@/containers/(personal)/service/channel/ChannelCreateButton';
import { getChannels } from '@/containers/(personal)/service/channel/query';

import ChannelListItem from './ChannelListItem';
import styles from './index.module.scss';

const ChannelPage = async () => {
  const channels: Channel[] = await getChannels();

  return (
    <div className={styles.channelList}>
      <ChannelCreateButton />
      <ul>
        {channels.map((channel) => (
          <ChannelListItem channel={channel} key={channel.link} />
        ))}
      </ul>
      <ChannelActionPopup />
    </div>
  );
};

export default ChannelPage;
