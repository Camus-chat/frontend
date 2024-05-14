'use client';

import { createPortal } from 'react-dom';

import ChannelCreate from '@/containers/(personal)/service/channel/ChannelCreate';
import ChannelUpdate from '@/containers/(personal)/service/channel/ChannelUpdate';
import styles from '@/containers/(personal)/service/channel/index.module.scss';
import { CREATE, useChannelStore } from '@/states/channel';

const ChannelActionPopup = () => {
  const { isOpen, action } = useChannelStore((state) => ({
    isOpen: state.isOpen,
    action: state.action,
  }));

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
