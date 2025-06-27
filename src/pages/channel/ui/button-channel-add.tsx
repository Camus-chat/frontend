'use client';

import { Button } from '@heroui/react';
import { Plus } from 'lucide-react';

import { useServicePopup } from '@/widgets/service-content';

import { CHANNEL_ACTION_KEY } from '../config';
import { useChannelFormStore } from '../store/form';
import { listItem } from './styles';

const ButtonChannelAdd = () => {
  const open = useServicePopup((state) => state.open);
  const reset = useChannelFormStore((state) => state.reset);

  const onOpen = () => {
    reset();
    open(CHANNEL_ACTION_KEY.create);
  };

  return (
    <Button
      variant='bordered'
      className={listItem({ class: 'flex-col text-default-500' })}
      onPress={onOpen}
    >
      <Plus />
      채널 추가
    </Button>
  );
};

export default ButtonChannelAdd;
