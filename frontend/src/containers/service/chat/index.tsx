import Chatting from '@/containers/service/chat/Chatting';
import styles from '@/containers/service/index.module.scss';
import Menu from '@/containers/service/Menu';

const Chat = () => {
  return (
    <>
      <Menu selectedMenuKey='chat' />
      <div className={styles.contentWrapper}>
        <Chatting />
      </div>
    </>
  );
};

export default Chat;
