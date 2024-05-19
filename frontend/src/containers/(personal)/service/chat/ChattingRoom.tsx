'use client';

import ChatInputBox from '@/lib/componenets/ChatInputBox';
import ChatMessageItem from '@/lib/componenets/ChatMessageItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRef } from 'react';

import NewMessages from '@/containers/(personal)/service/chat/NewMessages';
import { useChatStore } from '@/states/chat';

import styles from './index.module.scss';

interface Props {
  onClose?: () => void;
}

const ChattingRoom = ({ onClose }: Props) => {
  const { chat, chattingClient, messages, unreadMessages, token } =
    useChatStore((state) => ({
      chat: state.chat,
      chattingClient: state.chattingClient,
      messages: state.messages,
      unreadMessages: state.unreadMessages,
      token: state.token,
    }));

  const scrollRef = useRef<HTMLOListElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  };

  return (
    <>
      <div className={styles.roomWrapper}>
        <div className={styles.top}>
          {onClose && (
            <button type='button' onClick={onClose}>
              <ExpandMoreIcon />
            </button>
          )}
          {chat.channelType === 'private' && (
            <div className={styles.nickname}>유저 이름 넣어라</div>
          )}
          <div className={styles.channelTitle}>{`#${chat.channelTitle}`}</div>
        </div>
        <ol ref={scrollRef} className={styles.messages}>
          {messages.map((message) => (
            <ChatMessageItem
              message={message}
              key={`m${message.messageId}`}
              roomFilterLevel={chat.filteredLevel}
            />
          ))}
          {unreadMessages.map((message) => (
            <ChatMessageItem
              message={message}
              key={`u${message.messageId}`}
              roomFilterLevel={chat.filteredLevel}
            />
          ))}
          <NewMessages roomId={chat.roomId} scrollToBottom={scrollToBottom} />
        </ol>
      </div>
      <ChatInputBox
        roomId={chat.roomId}
        chattingClient={chattingClient}
        token={token}
      />
    </>
  );
};

export default ChattingRoom;
