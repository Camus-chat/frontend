'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import ChannelCreate from '@/containers/(personal)/service/channel/ChannelCreate';
import ChannelUpdate from '@/containers/(personal)/service/channel/ChannelUpdate';
import styles from '@/containers/(personal)/service/channel/index.module.scss';
import { CREATE, useChannelStore } from '@/states/channel';

const ChannelActionPopup = () => {
  const { isOpen, action, close } = useChannelStore((state) => ({
    isOpen: state.isOpen,
    action: state.action,
    close: state.close,
  }));

  useEffect(() => {
    return close;
  }, []);

  if (!isOpen) {
    return null;
  }

  if (action === CREATE) {
    return createPortal(
      <div className={styles.channelCreate}>
        <ChannelCreate />
      </div>,
      document.getElementById('content-wrapper') as HTMLDivElement,
    );
  }

  return createPortal(
    <div className={styles.channelCreate}>
      <ChannelUpdate />
    </div>,
    document.getElementById('content-wrapper') as HTMLDivElement,
  );
};

export default ChannelActionPopup;
