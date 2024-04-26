import Image from 'next/image';

import styles from './index.module.css';
import sendIcon from './send.svg';

const ChatInputBox = () => {
  return (
    <div className={styles.inputBoxWrapper}>
      <div className={styles.inputBox}>
        <input type='text' placeholder='메시지를 입력해주세요' />
        <button className={styles.sendButton} type='button'>
          <Image className={styles.sendButtonIcon} src={sendIcon} alt='send' />
        </button>
      </div>
    </div>
  );
};

export default ChatInputBox;
