import ServiceContent from '@/widgets/service-content';

import { CHANNEL_ACTION_KEY } from '../config';
import ChannelCreate from './channel-create';
import ChannelList from './channel-list';

const ChannelPage = () => {
  return (
    <ServiceContent>
      <ServiceContent.MainItem title='채널'>
        <ChannelList />
      </ServiceContent.MainItem>
      <ServiceContent.PopupItem id={CHANNEL_ACTION_KEY.create}>
        <ChannelCreate />
      </ServiceContent.PopupItem>
    </ServiceContent>
  );
};

export default ChannelPage;
