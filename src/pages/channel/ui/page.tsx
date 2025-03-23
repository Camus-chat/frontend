import ServiceContent from '@/widgets/service-content';

import { getChannels } from '../api/channel';
import { CHANNEL_ACTION_KEY } from '../config';
import ChannelAddButton from './channel-add-button';
import ChannelCreate from './channel-create';
import ChannelList from './channel-list';
import { ChannelProvider } from '../store/channel';

const ChannelPage = async () => {
  const channels = await getChannels();

  return (
    <ServiceContent>
      <ChannelProvider channels={channels}>
        <ServiceContent.MainItem title='채널'>
          <div className='flex flex-col gap-3'>
            <ChannelAddButton />
            <ChannelList />
          </div>
        </ServiceContent.MainItem>
        <ServiceContent.PopupItem id={CHANNEL_ACTION_KEY.create}>
          <ChannelCreate />
        </ServiceContent.PopupItem>
      </ChannelProvider>
    </ServiceContent>
  );
};

export default ChannelPage;
