import { ReactNode } from 'react';

import styles from './index.module.css';

interface Props {
  children?: ReactNode;
  message: Message;
  isSent?: boolean;
}

const ChatBubble = ({ children, message, isSent }: Props) => {
  // TODO: 내가 보낸 메시지인지 받은 메시지인지 구별하는 로직 필요
  const wrapperStyle = isSent ? styles.sent : styles.received;

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
        <div className={styles.time}>12:34</div>
      </div>
    </div>
  );
};

export default ChatBubble;
