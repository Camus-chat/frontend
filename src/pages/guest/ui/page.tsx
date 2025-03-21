import { redirect } from 'next/navigation';

import EnterChatting from '@/pages/guest/ui/enter-chatting';
import ServiceContent from '@/widgets/service-content';

import EnterAsGuest from './enter-as-guest';
import EnterAsMember from './enter-as-member';
import { requestChannelInfo } from '../api/channel';

const GuestChat: FC<{
  params: Promise<{
    link: string;
  }>;
}> = async ({ params }) => {
  const { link } = await params;
  const channelInfo = await requestChannelInfo(link);

  if (!channelInfo) {
    redirect('/');
  }

  return (
    <ServiceContent>
      <ServiceContent.ContentItem>
        <EnterChatting info={channelInfo}>
          <EnterAsMember link={link} />
          <EnterAsGuest />
        </EnterChatting>
      </ServiceContent.ContentItem>
    </ServiceContent>
  );
};

export default GuestChat;
