import { messageStyle } from './styles';

interface Props {
  message: string;
  time: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const MessageSent = ({ message, time, isFirst, isLast }: Props) => {
  const styles = messageStyle({ type: 'sent', isFirst });

  return (
    <div className={styles.wrapper()}>
      {isLast && <div className={styles.subText()}>{time}</div>}
      <div className={styles.bubbleWrapper()}>
        <div className={styles.bubble()}>{message}</div>
      </div>
    </div>
  );
};

export default MessageSent;
