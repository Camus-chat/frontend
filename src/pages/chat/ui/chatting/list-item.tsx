'use client';

import { Avatar } from '@heroui/avatar';

import { CHATTING_ACTION_KEY } from '@/pages/chat/config';
import { Button } from '@/shared/ui';
import { useChattingStore } from '@/widgets/chatting';
import { useServicePopup } from '@/widgets/service-content';

import Nickname from './list-item-nickname';
import Preview from './list-item-preview';
import {requestReadMessageList, requestUnreadMessageList} from "@/pages/chat/api/message";
import {useMessageStore} from "@/entities/message";

const ChattingListItem: FC<{ chatting: ChattingRoom }> = ({ chatting }) => {
  const addUnreadMessages = useMessageStore((state) => state.addUnreadMessages);
  const addReadMessages = useMessageStore((state) => state.addReadMessages)

  const onClick = async () => {
    useServicePopup.getState().open(CHATTING_ACTION_KEY.enter);
    useChattingStore.getState().setRoomId(chatting.roomId);

    const [unreadMessages, readMessages] = await Promise.all([
      requestUnreadMessageList(chatting.roomId),
      requestReadMessageList(chatting.roomId, "0-0"),
    ]);

    addReadMessages(chatting.roomId, readMessages);
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
