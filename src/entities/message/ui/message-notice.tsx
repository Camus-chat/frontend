import { messageStyle } from './styles';

interface Props {
  message: string;
}

const styles = messageStyle({ type: 'notice', isFirst: true });

export const MessageNotice = ({ message }: Props) => {
  return (
    <div className={styles.wrapper()}>
      <div className={styles.subText()}>{message}</div>
    </div>
  );
};
