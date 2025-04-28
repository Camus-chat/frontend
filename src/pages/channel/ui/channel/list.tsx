'use client';

import ChannelListItem from './list-item';
import { useChannelStore } from '../../store/channel';

const ChannelList = () => {
  const channels = useChannelStore((state) => state.channels);

  return channels.map((channel) => (
    <ChannelListItem key={channel.link} channel={channel} />
  ));
};

export default ChannelList;
