'use client';

import { Button } from '@heroui/button';
import { useEffect } from 'react';

import { PlusIcon } from '@/shared/ui';
import { useServicePopup } from '@/widgets/service-content';

import { CHANNEL_ACTION_KEY } from '../config';
import { listItem } from './styles';

interface Props {
  serverListFetchingError: boolean;
}

const ChannelAddButton = ({ serverListFetchingError }: Props) => {
  const open = useServicePopup((state) => state.open);

  useEffect(() => {
    if (serverListFetchingError) {
      alert('채널 목록을 불러오는데 실패했습니다.');
    }
  }, []);

  return (
    <Button
      variant='bordered'
      className={listItem({ class: 'flex-col text-default-500' })}
      isDisabled={serverListFetchingError}
      onPress={() => open(CHANNEL_ACTION_KEY.create)}
    >
      <PlusIcon />
      채널 추가
    </Button>
  );
};

export default ChannelAddButton;
