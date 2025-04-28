'use client';

import { Avatar } from '@heroui/avatar';

import { CHATTING_ACTION_KEY } from '@/pages/chat/config';
import { Button } from '@/shared/ui';
import { useChattingStore } from '@/widgets/chatting';
import { useServicePopup } from '@/widgets/service-content';

import Nickname from './list-item-nickname';
import Preview from './list-item-preview';
import {requestUnreadMessageList} from "@/pages/chat/api/message";
import {useMessageStore} from "@/entities/message";

const ChattingListItem: FC<{ chatting: ChattingRoom }> = ({ chatting }) => {
  const addUnreadMessages = useMessageStore((state) => state.addUnreadMessages);

  const onClick = async () => {
    useServicePopup.getState().open(CHATTING_ACTION_KEY.enter);
    useChattingStore.getState().setRoomId(chatting.roomId);

    const unreadMessages = await requestUnreadMessageList(chatting.roomId);
    addUnreadMessages(chatting.roomId, unreadMessages);
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
