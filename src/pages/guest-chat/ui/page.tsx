import { redirect } from 'next/navigation';

import { WebsocketProvider } from '@/features/websocket';
import { ROUTE } from '@/shared/config';
import { Chatting, ChattingHeader, ChattingTitle } from '@/widgets/chatting';
import ServiceContent from '@/widgets/service-content';

import { requestRoomInfo } from '../api/room';

const GuestChattingPage: FC<{
  params: Promise<{
    link: string;
    roomId: string;
  }>;
}> = async ({ params }) => {
  const { link, roomId } = await params;
  const roomInfo = await requestRoomInfo(link, roomId);

  if (!roomInfo) {
    redirect(`${ROUTE.guest}/${link}`);
  }

  return (
    <ServiceContent>
      <ServiceContent.ContentItem>
        <WebsocketProvider roomIds={[roomId]}>
          <ChattingHeader>
            <ChattingTitle title={roomInfo.channelTitle} />
          </ChattingHeader>
          <Chatting roomId={roomId} />
        </WebsocketProvider>
      </ServiceContent.ContentItem>
    </ServiceContent>
  );
};

export default GuestChattingPage;
