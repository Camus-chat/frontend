'use client';

import { useEffect } from 'react';

import { useChannelListStore } from '@/pages/channel/store/channel';

const NewChannels = () => {
  const newChannels = useChannelListStore((state) => state.channels);

  useEffect(() => {
    return () => useChannelListStore.getState().setChannels([]);
  }, []);

  // TODO: render new channel list
  return null;
};

export default NewChannels;
