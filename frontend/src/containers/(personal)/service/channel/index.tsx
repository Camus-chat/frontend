import type { Channel } from './type';
import ChannelActionPopup from '@/containers/(personal)/service/channel/ChannelActionPopup';
import ChannelCreateButton from '@/containers/(personal)/service/channel/ChannelCreateButton';
import { getChannels } from '@/containers/(personal)/service/channel/query';

import ChannelListitem from './ChannelListItem';

const ChannelPage = async () => {
  const channels: Channel[] = await getChannels();

  return (
    <>
      <ChannelCreateButton />
      <ul>
        {channels.map((channel) => (
          <ChannelListitem channel={channel} key={channel.link} />
        ))}
      </ul>
      <ChannelActionPopup />
    </>
  );
};

export default ChannelPage;
