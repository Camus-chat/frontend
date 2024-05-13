import ChannelActionPopup from '@/containers/(personal)/service/channel/ChannelActionPopup';
import ChannelCreateButton from '@/containers/(personal)/service/channel/ChannelCreateButton';

import ChannelListitem from './ChannelListItem';

const Channel = () => {
  return (
    <>
      <ChannelCreateButton />
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
      <ChannelActionPopup />
    </>
  );
};

export default Channel;
