'use client';

import { Button } from '@heroui/button';

import { PlusIcon } from '@/shared/ui';
import { useServicePopup } from '@/widgets/service-content';

import { CHANNEL_ACTION_KEY } from '../config';
import { listItem } from './styles';

const ButtonChannelAdd = () => {
  const open = useServicePopup((state) => state.open);

  return (
    <Button
      variant='bordered'
      className={listItem({ class: 'flex-col text-default-500' })}
      onPress={() => open(CHANNEL_ACTION_KEY.create)}
    >
      <PlusIcon />
      채널 추가
    </Button>
  );
};

export default ButtonChannelAdd;
