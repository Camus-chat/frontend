'use client';

import ChatList from '@/lib/componenets/ChatList';
import ChatListItem from '@/lib/componenets/ChatListItem';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import ChattingRoom from '@/containers/(personal)/service/chat/ChattingRoom';
import styles from '@/containers/(personal)/service/index.module.scss';

import Random from '@/components/ProfileImage/Random';

const chattings: Chat[] = [
  {
    uuid: '1',
    userList: ['user1', 'user2'],
    tag: 'tag1',
    lastMessage: 'lastMessage1',
    unreadCount: 1,
  },
];

const Chatting = () => {
  const [selectedChatIndex, setSelectChatIndex] = useState<number>(-1);

  return (
    <>
      <ChatList>
        {chattings.map((chat, index) => (
          <ChatListItem
            key={chat.uuid}
            isSelected={index === selectedChatIndex}
            chat={chat}
            onClick={() => setSelectChatIndex(index)}
          >
            <Random size='medium' color='red' />
          </ChatListItem>
        ))}
      </ChatList>
      {selectedChatIndex >= 0 &&
        createPortal(
          <div className={styles.content}>
            <ChattingRoom />
          </div>,
          document.getElementById('content-wrapper') as HTMLDivElement,
        )}
    </>
  );
};

export default Chatting;
