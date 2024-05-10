'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import ChattingRoom from '@/containers/(personal)/service/chat/ChattingRoom';
import styles from '@/containers/(personal)/service/index.module.scss';

const Chatting = () => {
  const [selectedChatIndex, setSelectChatIndex] = useState<number>(-1);

  return (
    <>
      {/* <ChatList> */}
      {/*  {chattings.map((chat, index) => ( */}
      {/*    <ChatListItem */}
      {/*      key={chat.uuid} */}
      {/*      isSelected={index === selectedChatIndex} */}
      {/*      chat={chat} */}
      {/*      onClick={() => setSelectChatIndex(index)} */}
      {/*    > */}
      {/*      <Random size='medium' color='red' /> */}
      {/*    </ChatListItem> */}
      {/*  ))} */}
      {/* </ChatList> */}
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
