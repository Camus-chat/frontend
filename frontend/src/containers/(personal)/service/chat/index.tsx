import Chattings from '@/containers/(personal)/service/chat/Chattings';
import { tmpChatList } from '@/containers/(personal)/service/chat/query';

import styles from './index.module.scss';

const Chat = async () => {
  const chattings = await tmpChatList();

  return (
    <>
      <div className={styles.title}>채팅</div>
      <div className={styles.chat}>
        <Chattings chattings={chattings} />
      </div>
    </>
  );
};

export default Chat;
