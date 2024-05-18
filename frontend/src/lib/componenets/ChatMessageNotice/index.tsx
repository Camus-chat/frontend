import styles from './index.module.css';

interface Props {
  message: Message;
}

const ChatMessageNotice = ({ message }: Props) => {
  return (
    <div
      className={styles.message}
    >{`'유저이름 넣어라'${message.content}`}</div>
  );
};

export default ChatMessageNotice;
