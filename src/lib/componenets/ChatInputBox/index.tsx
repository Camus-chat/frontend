import Image from 'next/image';
import { useRef } from 'react';

import { CamusClient } from '@/features/websocket';

import styles from './index.module.css';
import sendIcon from './send.svg';

interface Props {
  chattingClient?: CamusClient;
  roomId: string;
  onClick?: () => void;
  token: string;
}

const ChatInputBox = ({ chattingClient, roomId, onClick, token }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if (input.current?.value && chattingClient) {
      chattingClient
        .sendMessage(roomId, input.current.value, token)
        .then(() => {
          input.current!.value = '';
        });
    }

    if (!chattingClient && onClick) {
      onClick();
    }
  };

  return (
    <div className={styles.inputBoxWrapper}>
      <div className={styles.inputBox}>
        <input ref={input} type='text' placeholder='메시지를 입력해주세요' />
        <button
          className={styles.sendButton}
          type='button'
          onClick={sendMessage}
        >
          <Image className={styles.sendButtonIcon} src={sendIcon} alt='send' />
        </button>
      </div>
    </div>
  );
};

export default ChatInputBox;
