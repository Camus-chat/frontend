import type { ChatRoom } from '@/lib/class/Chat';
import { ReactNode, useState } from 'react';

import styles from './index.module.css';

interface Props {
  children?: ReactNode;
  isSelected: boolean;
  chat: ChatRoom;
  onClick: () => void;
}

const ChatListItem = ({ children, isSelected, chat, onClick }: Props) => {
  const [lastMessage, setLastMessage] = useState(chat.lastMessage);
  const [unreadCount, setUnreadCount] = useState(chat.unreadCount);

  const displayedCount = unreadCount > 999 ? '999+' : unreadCount;

  const chatListItemStyle = isSelected
    ? styles.chatListItem_selected
    : styles.chatListItem;

  const handleClick = () => {
    setUnreadCount(0);
    onClick();
  };

  return (
    <li className={chatListItemStyle}>
      <button
        type='button'
        className={styles.chatListItem_bg}
        onClick={handleClick}
      >
        <div className={styles.profile}>{children}</div>
        <div className={styles.chatWrapper}>
          <div className={styles.chatInfo}>
            {chat.channelType === 'private' && (
              <div className={styles.nickname}>유저 이름 조회해서 넣어라</div>
            )}
            <div className={styles.tag}>{`#${chat.channelTitle}`}</div>
            {chat.channelType === 'group' && (
              <div className={styles.headcount}>{chat.userList.length}</div>
            )}
          </div>
          <div className={styles.chatDetails}>
            <div className={styles.lastMessage}>{lastMessage.content}</div>
            {unreadCount > 0 && (
              <div className={styles.unreadCount}>{displayedCount}</div>
            )}
          </div>
        </div>
      </button>
    </li>
  );
};

export default ChatListItem;
