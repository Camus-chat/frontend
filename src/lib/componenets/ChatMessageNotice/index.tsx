import styles from './index.module.css';

interface Props {
  message: Message;
  targetNickname: string;
}

const ChatMessageNotice = ({ message, targetNickname }: Props) => {
  return (
    <div
      className={styles.message}
    >{`${targetNickname}${message.content}`}</div>
  );
};

export default ChatMessageNotice;
