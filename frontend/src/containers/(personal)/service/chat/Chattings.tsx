'use client';

import type { Chat } from '@/lib/class/Chat';
import ChatList from '@/lib/componenets/ChatList';
import ChatListItem from '@/lib/componenets/ChatListItem';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import ChattingRoom from '@/containers/(personal)/service/chat/ChattingRoom';
import styles from '@/containers/(personal)/service/index.module.scss';

import Random from '@/components/ProfileImage/Random';

interface Props {
  chattings: Chat[];
}

const Chattings = ({ chattings }: Props) => {
  const [selectedChatIndex, setSelectChatIndex] = useState<number>(-1);

  return (
    <>
      <ChatList>
        {chattings.map((chat, index) => (
          <ChatListItem
            key={chat.get_id}
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

export default Chattings;
