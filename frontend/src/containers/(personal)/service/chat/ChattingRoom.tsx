import type { Chat } from '@/lib/class/Chat';
import ChatInputBox from '@/lib/componenets/ChatInputBox';
import ChatMessageItem from '@/lib/componenets/ChatMessageItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from 'react';

import { useChatStore } from '@/states/chat';

import styles from './index.module.scss';

interface Props {
  chat: Chat;
  onClose?: () => void;
}

const ChattingRoom = ({ chat, onClose }: Props) => {
  const [newMessages, setNewMessages] = useState<Message[]>([]);
  const { chattingClient, messages, unreadMessages } = useChatStore(
    (state) => ({
      chattingClient: state.chattingClient,
      messages: state.messages,
      unreadMessages: state.unreadMessages,
    }),
  );

  const scrollRef = useRef<HTMLOListElement>(null);

  const getNewMessages = (message: Message) => {
    setNewMessages((prev) => [...prev, message]);
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
    chattingClient.subscribeRoom(chat.roomId).then(() => {
      chattingClient.receiveMessage(chat.roomId, getNewMessages);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat]);

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
            <ChatMessageItem message={message} key={`m${message.messageId}`} />
          ))}
          {unreadMessages.map((message) => (
            <ChatMessageItem message={message} key={`u${message.messageId}`} />
          ))}
          {newMessages.map((message) => (
            <ChatMessageItem message={message} key={`n${message.messageId}`} />
          ))}
        </ol>
      </div>
      <ChatInputBox roomId={chat.roomId} chattingClient={chattingClient} />
    </>
  );
};

export default ChattingRoom;
