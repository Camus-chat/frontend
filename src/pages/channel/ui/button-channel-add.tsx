'use client';

import { Button } from '@heroui/button';

import { PlusIcon } from '@/shared/ui';
import { useServicePopup } from '@/widgets/service-content';

import { CHANNEL_ACTION_KEY } from '../config';
import { listItem } from './styles';
import { useChannelFormStore } from '../store/form';

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
      <PlusIcon />
      채널 추가
    </Button>
  );
};

export default ButtonChannelAdd;
