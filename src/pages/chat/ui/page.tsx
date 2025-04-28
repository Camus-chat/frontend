import { WebsocketProvider as WebsocketConnector } from '@/features/websocket';
import { requestChattingMemberMap } from '@/pages/chat/api/member';
import { Chatting } from '@/widgets/chatting';
import ServiceContent from '@/widgets/service-content';

import { requestChattingList } from '../api/chatting';
import { CHATTING_ACTION_KEY } from '../config';
import { ChattingRoomProvider } from '../store/chatting-room';
import ChattingList from './chatting/list';

const ChattingPage = async () => {
  const chattingRooms = await requestChattingList();
  const chattingMemberMap = await requestChattingMemberMap(chattingRooms);

  return (
    <ServiceContent>
      <WebsocketConnector roomIds={[]} />
      <ServiceContent.MainItem title='채팅'>
        <ChattingRoomProvider
          chattingRooms={chattingRooms}
          chattingMemberMap={chattingMemberMap}
        >
          <ChattingList />
        </ChattingRoomProvider>
      </ServiceContent.MainItem>
      <ServiceContent.PopupItem id={CHATTING_ACTION_KEY.enter}>
        <Chatting />
      </ServiceContent.PopupItem>
    </ServiceContent>
  );
};

export default ChattingPage;
