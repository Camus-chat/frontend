import { Avatar } from '@heroui/react';

import { messageStyle } from './styles';

interface Props {
  message: string;
  time: string;
  sender: Pick<Member, 'nickname' | 'profileLink'>;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MessageReceived = ({
  message,
  time,
  sender,
  isFirst,
  isLast,
}: Props) => {
  const styles = messageStyle({ type: 'received', isFirst });

  return (
    <div className={styles.base()}>
      {isFirst && (
        <Avatar
          size='sm'
          src={sender.profileLink || undefined}
          className='mr-1 self-start'
        />
      )}
      <div className={styles.bubbleWrapper()}>
        {isFirst && <div className={styles.mainText()}>{sender.nickname}</div>}
        <div className={styles.bubble()}>{message}</div>
      </div>
      {isLast && <div className={styles.subText()}>{time}</div>}
    </div>
  );
};
