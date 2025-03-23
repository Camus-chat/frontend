import ServiceContent from '@/widgets/service-content';

import { getChannels } from '../api/channel';
import { CHANNEL_ACTION_KEY } from '../config';
import ButtonChannelAdd from './button-channel-add';
import { ChannelProvider } from '../store/channel';
import ChannelList from './channel/list';
import FormChannelCreate from './form-channel-create';

const ChannelPage = async () => {
  const channels = await getChannels();

  return (
    <ServiceContent>
      <ChannelProvider channels={channels}>
        <ServiceContent.MainItem title='채널'>
          <div className='flex flex-col gap-3'>
            <ButtonChannelAdd />
            <ChannelList />
          </div>
        </ServiceContent.MainItem>
        <ServiceContent.PopupItem id={CHANNEL_ACTION_KEY.create}>
          <FormChannelCreate />
        </ServiceContent.PopupItem>
      </ChannelProvider>
    </ServiceContent>
  );
};

export default ChannelPage;
