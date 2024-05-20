import { ReactNode } from 'react';

import styles from './index.module.css';

interface Props {
  children?: ReactNode;
  message: Message;
  receiverId: string;
  senderNickname: string;
}

const ChatMessageBubble = ({
  children,
  message,
  receiverId,
  senderNickname,
}: Props) => {
  const isSentMessage = message.senderId === receiverId;
  const wrapperStyle = isSentMessage ? styles.sent : styles.received;
  const time = new Date(message.createdDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={wrapperStyle}>
      {!isSentMessage && children && (
        <div className={styles.profileImageWrapper}>{children}</div>
      )}
      <div className={styles.messageWrapper}>
        <div className={styles.message}>
          {!isSentMessage && (
            <div className={styles.nickname}>{senderNickname}</div>
          )}
          <div className={styles.text}>{message.content}</div>
        </div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default ChatMessageBubble;
