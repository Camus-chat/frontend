'use client';

import { useChannelStore } from '@/states/channel';

import Button from '@/components/Button';

const ChannelUpdateButton = () => {
  const openUpdate = useChannelStore((state) => state.openUpdate);

  return (
    <Button size='small' color='skyblue' onClick={openUpdate}>
      수정
    </Button>
  );
};

export default ChannelUpdateButton;
