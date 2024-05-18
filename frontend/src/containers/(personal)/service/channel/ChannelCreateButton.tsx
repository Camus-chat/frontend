'use client';

import AddIcon from '@mui/icons-material/Add';

import styles from '@/containers/(personal)/service/channel/index.module.scss';
import { useChannelStore } from '@/states/channel';

const ChannelCreateButton = () => {
  const openCreate = useChannelStore((state) => state.openCreate);

  return (
    <button
      type='button'
      className={styles.channelCreateButton}
      onClick={openCreate}
    >
      <AddIcon />
      채널 추가
    </button>
  );
};

export default ChannelCreateButton;
