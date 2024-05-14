import { ReactNode, useState } from 'react';

import styles from './index.module.css';

interface Props {
  children?: ReactNode;
  isSelected: boolean;
  chat: Chat;
  onClick: () => void;
}

const ChatListItem = ({ children, isSelected, chat, onClick }: Props) => {
  const [chatDetails, setChatDetails] = useState<ChatDetail>({
    lastMessage: chat.lastMessage,
    unreadCount: chat.unreadCount,
  });

  const isGroup = chat.userList.length > 2;

  const displayedCount =
    chatDetails.unreadCount > 999 ? '999+' : chatDetails.unreadCount;

  const chatListItemStyle = isSelected
    ? styles.chatListItem_selected
    : styles.chatListItem;

  const handleClick = () => {
    setChatDetails((prev) => ({ ...prev, unreadCount: 0 }));
    onClick();
  };

  return (
    <li className={chatListItemStyle} onClick={handleClick} role='presentation'>
      <div className={styles.chatListItem_bg}>
        <div className={styles.profile}>{children}</div>
        <div className={styles.chatWrapper}>
          <div className={styles.chatInfo}>
            {!isGroup && (
              <div className={styles.nickname}>{chat.userList[0]}</div>
            )}
            <div className={styles.tag}>{`#${chat.tag}`}</div>
            {isGroup && (
              <div className={styles.headcount}>{chat.userList.length}</div>
            )}
          </div>
          <div className={styles.chatDetails}>
            <div className={styles.lastMessage}>{chatDetails.lastMessage}</div>
            {chatDetails.unreadCount > 0 && (
              <div className={styles.unreadCount}>{displayedCount}</div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChatListItem;
