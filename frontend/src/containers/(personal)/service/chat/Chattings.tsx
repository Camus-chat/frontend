'use client';

import type { Chat, ChatRoom } from '@/lib/class/Chat';
import ChatList from '@/lib/componenets/ChatList';
import ChatListItem from '@/lib/componenets/ChatListItem';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import ChattingRoom from '@/containers/(personal)/service/chat/ChattingRoom';
import styles from '@/containers/(personal)/service/chat/index.module.scss';
import {
  getMessages,
  getUnreadMessages,
} from '@/containers/(personal)/service/chat/query';
import { useChatStore } from '@/states/chat';

import Random from '@/components/ProfileImage/Random';

interface Props {
  chattings: ChatRoom[];
}

const Chattings = ({ chattings }: Props) => {
  const { isSelected, chat, enterChatting, close } = useChatStore((state) => ({
    isSelected: state.isSelected,
    chat: state.chat,
    enterChatting: state.enterChatting,
    close: state.close,
  }));

  const handleClickChatListItem = async (item: Chat) => {
    const unreadMesageList = await getUnreadMessages(item.roomId);
    const { messageList, paginationDto } = await getMessages(
      item.roomId,
      '0-0',
    );
    enterChatting(item, [...unreadMesageList, ...messageList]);
  };

  useEffect(() => {
    return close;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ChatList>
        {chattings.map((item) => (
          <ChatListItem
            key={item.roomId}
            isSelected={item.roomId === chat.roomId}
            chat={item}
            onClick={() => handleClickChatListItem(item)}
          >
            <Random size='medium' color='red' />
          </ChatListItem>
        ))}
      </ChatList>

      {isSelected &&
        createPortal(
          <div className={styles.chattingRoom}>
            <ChattingRoom chat={chat} onClose={close} />
          </div>,
          document.getElementById('content-wrapper') as HTMLDivElement,
        )}
    </>
  );
};

export default Chattings;
