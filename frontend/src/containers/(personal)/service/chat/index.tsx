import Chattings from '@/containers/(personal)/service/chat/Chattings';
import { getChatList } from '@/containers/(personal)/service/chat/query';

import styles from './index.module.scss';

const Chat = async () => {
  const chattings = await getChatList();

  return (
    <div className={styles.contentList}>
      <div className={styles.title}>채팅</div>
      <div className={styles.chat}>
        <Chattings chattings={chattings} />
      </div>
    </div>
  );
};

export default Chat;
