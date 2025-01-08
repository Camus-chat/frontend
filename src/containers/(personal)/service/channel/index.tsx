import type { Channel } from './type';
import ChannelActionPopup from '@/containers/(personal)/service/channel/ChannelActionPopup';
import ChannelCreateButton from '@/containers/(personal)/service/channel/ChannelCreateButton';
import NewChannels from '@/containers/(personal)/service/channel/NewChannels';
import { getChannels } from '@/containers/(personal)/service/channel/query';

import ChannelListItem from './ChannelListItem';
import styles from './index.module.scss';

const ChannelPage = async () => {
  const channels: Channel[] = await getChannels();

  return (
    <>
      <div className={styles.channel}>
        <div className={styles.title}>채널</div>
        <div className={styles.list}>
          <ChannelCreateButton />
          <ul>
            {channels.map((channel) => (
              <ChannelListItem channel={channel} key={channel.link} />
            ))}
            <NewChannels />
          </ul>
        </div>
      </div>

      <ChannelActionPopup />
    </>
  );
};

export default ChannelPage;
