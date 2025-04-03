import { WebsocketProvider as WebsocketConnector } from '@/features/websocket';
import { Chatting } from '@/widgets/chatting';
import ServiceContent from '@/widgets/service-content';

import { requestChattingList } from '../api/chatting';
import { CHATTING_ACTION_KEY } from '../config';
import ChattingList from './chatting/list';

const ChattingPage = async () => {
  const chattingRooms = await requestChattingList();

  return (
    <ServiceContent>
      <WebsocketConnector roomIds={[]} />
      <ServiceContent.MainItem title='채팅'>
        <ChattingList list={chattingRooms} />
      </ServiceContent.MainItem>
      <ServiceContent.PopupItem id={CHATTING_ACTION_KEY.enter}>
        <Chatting />
      </ServiceContent.PopupItem>
    </ServiceContent>
  );
};

export default ChattingPage;
