'use client';

import type { Channel } from '@/containers/(personal)/service/channel/type';
import { Button } from '@/shared/ui';
import { useChannelStore } from '@/states/channel';

interface Props {
  channel: Channel;
}

const ChannelUpdateButton = ({ channel }: Props) => {
  const openUpdate = useChannelStore((state) => state.openUpdate);

  return (
    <Button size='sm' color='skyblue' onClick={() => openUpdate(channel)}>
      수정
    </Button>
  );
};

export default ChannelUpdateButton;
