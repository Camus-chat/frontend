import ServiceContent from '@/widgets/service-content';

import ChannelList from './channel-list';

const ChannelPage = () => {
  return (
    <ServiceContent>
      <ServiceContent.MainItem title='채널'>
        <ChannelList />
      </ServiceContent.MainItem>
    </ServiceContent>
  );
};

export default ChannelPage;
