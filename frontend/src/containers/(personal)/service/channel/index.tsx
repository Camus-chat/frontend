'use client';

import AddIcon from '@mui/icons-material/Add';

import { createChannel } from '@/containers/(personal)/service/query';

import ChannelListitem from './ChannelListItem';
import styles from './index.module.scss';

const Channel = () => {
  const Example = {
    type: 'group',
    title: '이건예시',
    content: '호호안녕하세요',
    filterLevel: 0,
  };

  const handleClick = async () => {
    await createChannel(Example);
  };

  return (
    <div>
      <button
        type='button'
        className={styles.channelAddButton}
        onClick={handleClick}
      >
        <AddIcon />
        채널 추가
      </button>
      <ul>
        <ChannelListitem
          channel={{
            name: '채널 이름',
            private: false,
            filter: 100,
            description: '채널 설명',
            link: '/',
          }}
        />
      </ul>
    </div>
  );
};

export default Channel;
