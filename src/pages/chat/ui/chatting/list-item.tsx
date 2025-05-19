'use client';

import { Avatar } from '@heroui/react';

import { CHATTING_ACTION_KEY } from '@/pages/chat/config';
import { Button } from '@/shared/ui';
import { useChattingStore } from '@/widgets/chatting';
import { useServicePopup } from '@/widgets/service-content';

import Nickname from './list-item-nickname';
import Preview from './list-item-preview';

const ChattingListItem: FC<{ chatting: ChattingRoom }> = ({ chatting }) => {
  const onClick = () => {
    useServicePopup.getState().open(CHATTING_ACTION_KEY.enter);
    useChattingStore.getState().setRoomId(chatting.roomId);
  };

  return (
    <Button
      variant='light'
      className='grid h-auto w-full grid-cols-[auto,1fr] items-start p-4'
      onClick={onClick}
    >
      <Avatar />
      <div className='flex flex-col items-start gap-0.5'>
        <span className='text-xs'>{`#${chatting.channelTitle}`}</span>
        <Nickname chattingRoom={chatting} />
        <Preview chattingRoomId={chatting.roomId} />
      </div>
    </Button>
  );
};

export default ChattingListItem;
