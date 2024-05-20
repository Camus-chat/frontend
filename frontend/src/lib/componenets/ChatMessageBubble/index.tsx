import { ReactNode } from 'react';

import styles from './index.module.css';

interface Props {
  children?: ReactNode;
  message: Message;
  isSent?: boolean;
}

const ChatMessageBubble = ({ children, message, isSent }: Props) => {
  // TODO: 내가 보낸 메시지인지 받은 메시지인지 구별하는 로직 필요
  const wrapperStyle = isSent ? styles.sent : styles.received;
  const time = new Date(message.createdDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={wrapperStyle}>
      {!isSent && children && (
        <div className={styles.profileImageWrapper}>{children}</div>
      )}
      <div className={styles.messageWrapper}>
        <div className={styles.message}>
          {!isSent && <div className={styles.nickname}>민돌멩이</div>}
          <div className={styles.text}>{message.content}</div>
        </div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default ChatMessageBubble;
