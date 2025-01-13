'use client';

import { useEffect } from 'react';

import ChannelListItem from '@/containers/(personal)/service/channel/ChannelListItem';
import { useChannelStore } from '@/states/channel';

const NewChannels = () => {
  const { newChannels, resetNewChannels } = useChannelStore((state) => ({
    newChannels: state.newChannels,
    resetNewChannels: state.resetNewChannels,
  }));

  useEffect(() => {
    return resetNewChannels;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return newChannels.map((channel) => (
    <ChannelListItem channel={channel} key={channel.link} />
  ));
};

export default NewChannels;
