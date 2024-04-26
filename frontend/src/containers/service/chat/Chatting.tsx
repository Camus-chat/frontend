'use client';

import { useState } from 'react';

import ChattingRoom from '@/containers/service/chat/ChattingRoom';
import styles from '@/containers/service/index.module.scss';

const Chatting = () => {
  const [selectedRoomId, setSelectRoomId] = useState<number>(-1);

  return (
    <>
      <div className={styles.contentList}>
        <div className={styles.title}>채팅</div>
      </div>
      {selectedRoomId >= 0 && <ChattingRoom />}
    </>
  );
};

export default Chatting;
