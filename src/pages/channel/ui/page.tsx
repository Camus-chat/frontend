import ServiceContent from '@/widgets/service-content';

import { getChannels } from '../api/channel';
import { CHANNEL_ACTION_KEY } from '../config';
import ChannelAddButton from './channel-add-button';
import ChannelCreate from './channel-create';
import Channels from './channels';
import NewChannels from './new-channels';

const ChannelPage = async () => {
  const channels = await getChannels();
  const error =
    process.env.NODE_ENV === 'development' ? false : channels === null;

  return (
    <ServiceContent>
      <ServiceContent.MainItem title='채널'>
        <div className='grid grid-cols-2 gap-3'>
          <ChannelAddButton serverListFetchingError={error} />
          <Channels list={channels} />
          <NewChannels />
        </div>
      </ServiceContent.MainItem>
      <ServiceContent.PopupItem id={CHANNEL_ACTION_KEY.create}>
        <ChannelCreate />
      </ServiceContent.PopupItem>
    </ServiceContent>
  );
};

export default ChannelPage;
