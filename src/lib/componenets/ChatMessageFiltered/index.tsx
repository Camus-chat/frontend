'use client';

import styles from '@/lib/componenets/ChatMessageFiltered/index.module.css';
import { ReactNode, useState } from 'react';

interface Props {
  children?: ReactNode;
  message: Message;
  receiverId: string;
  senderNickname: string;
}

const ChatMessageFiltered = ({
  children,
  message,
  receiverId,
  senderNickname,
}: Props) => {
  const isSentMessage = message.senderId === receiverId;
  const [isFiltered, setIsFiltered] = useState<boolean>(true);
  const wrapperStyle = isSentMessage ? styles.sent : styles.received;
  const messageStyle = isFiltered ? styles.filtered : styles.nofilter;
  const bubbleMessage = isFiltered ? '필터링 되었습니다.' : message.content;
  const time = new Date(message.createdDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleNoFilter = () => {
    setIsFiltered(false);
  };

  return (
    <div className={wrapperStyle}>
      {!isSentMessage && children && (
        <div className={styles.profileImageWrapper}>{children}</div>
      )}
      <div className={styles.messageWrapper}>
        <div className={messageStyle}>
          {!isSentMessage && (
            <div className={styles.nickname}>{senderNickname}</div>
          )}
          <div className={styles.text}>
            {bubbleMessage}
            {isFiltered && (
              <button type='button' onClick={handleNoFilter}>
                해제하기
              </button>
            )}
          </div>
        </div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default ChatMessageFiltered;
