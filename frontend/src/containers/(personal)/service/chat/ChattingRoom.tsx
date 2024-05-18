'use-client';

import type { Chat } from '@/lib/class/Chat';
import ChatInputBox from '@/lib/componenets/ChatInputBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useChatStore } from '@/states/chat';

import styles from './index.module.scss';

interface Props {
  chat: Chat;
  onClose?: () => void;
}

const ChattingRoom = ({ chat, onClose }: Props) => {
  const { messages } = useChatStore((state) => ({
    messages: state.messages,
  }));

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
        <ol className={styles.messages}>
          {messages.map((message) => (
            <li key={message.messageId}>{message.content}</li>
          ))}
        </ol>
      </div>
      <ChatInputBox />
    </>
  );
};

export default ChattingRoom;
