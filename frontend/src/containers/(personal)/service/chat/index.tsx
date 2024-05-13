import Chatting from '@/containers/(personal)/service/chat/Chatting';

import styles from './index.module.scss';

const Chat = () => {
  return (
    <>
      <div className={styles.title}>채팅</div>
      <div className={styles.chat}>
        <Chatting />
      </div>
    </>
  );
};

export default Chat;
