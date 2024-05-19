'use client';

import type { Chat, ChatRoom } from '@/lib/class/Chat';
import ChatList from '@/lib/componenets/ChatList';
import ChatListItem from '@/lib/componenets/ChatListItem';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import ChattingRoom from '@/containers/(personal)/service/chat/ChattingRoom';
import styles from '@/containers/(personal)/service/chat/index.module.scss';
import {
  exitChatRoom,
  getMessages,
  getUnreadMessages,
} from '@/containers/(personal)/service/chat/query';
import { getTokenClientSide } from '@/containers/query';
import { useChatStore } from '@/states/chat';

import Random from '@/components/ProfileImage/Random';

interface Props {
  chattings: ChatRoom[];
}

const Chattings = ({ chattings }: Props) => {
  const {
    chattingClient,
    isSelected,
    chat,
    enterChatting,
    close,
    setConnected,
    setToken,
  } = useChatStore((state) => ({
    chattingClient: state.chattingClient,
    isSelected: state.isSelected,
    chat: state.chat,
    enterChatting: state.enterChatting,
    close: state.close,
    setConnected: state.setConnected,
    setToken: state.setToken,
  }));

  const handleClickChatListItem = async (item: Chat) => {
    if (chat.roomId) {
      await exitChatRoom(chat.roomId);
    }
    const unreadMesageList = await getUnreadMessages(item.roomId);
    const { messageList, paginationDto } = await getMessages(
      item.roomId,
      '0-0',
    );
    enterChatting(item, messageList, unreadMesageList);
  };

  useEffect(() => {
    getTokenClientSide().then((token) => {
      setToken(token);
      chattingClient.activate(token, setConnected);
    });

    return () => {
      chattingClient.deactivate();
      close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeChattingRoom = async () => {
    await exitChatRoom(chat.roomId).then(() => {
      close();
    });
  };

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
            <ChattingRoom onClose={closeChattingRoom} />
          </div>,
          document.getElementById('content-wrapper') as HTMLDivElement,
        )}
    </>
  );
};

export default Chattings;
