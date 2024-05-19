import { CamusClient } from '@/lib/class/CamusClient';
import Image from 'next/image';
import { useRef } from 'react';

import styles from './index.module.css';
import sendIcon from './send.svg';

interface Props {
  chattingClient: CamusClient;
  roomId: string;
}

const ChatInputBox = ({ chattingClient, roomId }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if (input.current?.value) {
      chattingClient.sendMessage(roomId, input.current.value).then(() => {
        input.current!.value = '';
      });
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
