'use client';

import type { Channel } from '@/containers/(personal)/service/channel/type';
import { useChannelStore } from '@/states/channel';

import Button from '@/components/Button';

interface Props {
  channel: Channel;
}

const ChannelUpdateButton = ({ channel }: Props) => {
  const openUpdate = useChannelStore((state) => state.openUpdate);

  return (
    <Button size='small' color='skyblue' onClick={() => openUpdate(channel)}>
      수정
    </Button>
  );
};

export default ChannelUpdateButton;
