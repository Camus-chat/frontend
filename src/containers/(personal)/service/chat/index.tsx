import Chattings from '@/containers/(personal)/service/chat/Chattings';
import { getChatList } from '@/containers/(personal)/service/chat/query';

import styles from './index.module.scss';

const ChatPage = async () => {
  const chattings = await getChatList().then((res) => {
    console.log(res);
    return res;
  });

  return (
    <div className={styles.contentList}>
      <div className={styles.title}>채팅</div>
      <div className={styles.chat}>
        <Chattings chattings={chattings} />
      </div>
    </div>
  );
};

export default ChatPage;
