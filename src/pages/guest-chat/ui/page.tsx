import { WebsocketProvider } from '@/features/websocket';
import { ChattingFooter, InputMessage } from '@/widgets/chatting';
import ServiceContent from '@/widgets/service-content';

const GuestChattingPage: FC<{
  params: Promise<{
    roomId: string;
  }>;
}> = async ({ params }) => {
  const { roomId } = await params;

  return (
    <ServiceContent>
      <ServiceContent.ContentItem>
        <WebsocketProvider roomIds={[roomId]}>
          <ChattingFooter>
            <InputMessage roomId={roomId} />
          </ChattingFooter>
        </WebsocketProvider>
      </ServiceContent.ContentItem>
    </ServiceContent>
  );
};

export default GuestChattingPage;
