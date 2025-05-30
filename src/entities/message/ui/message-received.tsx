import { Avatar } from '@heroui/react';
import { useMemo, useState } from 'react';

import { messageStyle } from './styles';

interface Props {
  message: string;
  time: string;
  sender: Pick<Member, 'nickname' | 'profileLink'>;
  isFirst?: boolean;
  isLast?: boolean;
  isFiltered: boolean;
}

export const MessageReceived = ({
  message,
  time,
  sender,
  isFirst,
  isLast,
  isFiltered,
}: Props) => {
  const [filtered, setFiltered] = useState(isFiltered);
  const text = filtered ? '필터링 되었습니다.' : message;

  const styles = messageStyle({ type: 'received', isFirst, isFiltered });

  const avatar = useMemo(() => {
    if (!isFirst) {
      return null;
    }
    return (
      <Avatar
        size='sm'
        src={sender.profileLink || undefined}
        className='mr-1 self-start'
      />
    );
  }, []);

  return (
    <div className={styles.base()}>
      {avatar}
      <div className={styles.bubbleWrapper()}>
        {isFirst && <div className={styles.mainText()}>{sender.nickname}</div>}
        <div className={styles.bubble()}>
          <p>{text}</p>
          {isFiltered && (
            <button
              type='button'
              className={styles.button()}
              onClick={() => setFiltered((prev) => !prev)}
            >
              {filtered ? '해제하기' : '가리기'}
            </button>
          )}
        </div>
      </div>
      {isLast && <div className={styles.subText()}>{time}</div>}
    </div>
  );
};
