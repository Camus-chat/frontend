'use client';

import { useEffect } from 'react';

import ChattingRoom from '@/containers/(personal)/service/chat/ChattingRoom';
import { useChatStore } from '@/states/chat';

import styles from './index.module.scss';

const GuestChat = () => {
  const { chattingClient, setConnected, setDisconnectd } = useChatStore(
    (state) => ({
      chattingClient: state.chattingClient,
      setConnected: state.setConnected,
      setDisconnectd: state.setDisconnected,
    }),
  );

  useEffect(() => {
    chattingClient.activate('', setConnected);

    return () => {
      chattingClient.deactivate();
      setDisconnectd();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <ChattingRoom />
    </div>
  );
};

export default GuestChat;
