'use client';

import { useChannelStore } from '../store/channel';

const ChannelList = () => {
  const channels = useChannelStore((state) => state.channels);

  // TODO: replace with channel item component
  return channels.map((channel) => (
    <div key={channel.link}>{channel.title}</div>
  ));
};

export default ChannelList;
