import { useState } from 'react';

import { messageStyle } from './styles';

interface Props {
  message: string;
  time: string;
  isFirst?: boolean;
  isLast?: boolean;
  isFiltered: boolean;
}

export const MessageSent = ({
  message,
  time,
  isFirst,
  isLast,
  isFiltered,
}: Props) => {
  const [filtered, setFiltered] = useState(isFiltered);
  const text = filtered ? '필터링 되었습니다.' : message;

  const styles = messageStyle({ type: 'sent', isFirst, isFiltered });

  return (
    <div className={styles.base()}>
      {isLast && <div className={styles.subText()}>{time}</div>}
      <div className={styles.wrapper()}>
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
    </div>
  );
};
