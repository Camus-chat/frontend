import AddIcon from '@mui/icons-material/Add';

import ChannelListitem from '@/containers/service/channel/ChannelListItem';

import styles from './index.module.scss';

const Channel = () => {
  return (
    <div>
      <button type='button' className={styles.channelAddButton}>
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
