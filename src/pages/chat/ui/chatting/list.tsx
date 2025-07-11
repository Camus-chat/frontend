'use client';

import { useChattingRoomStore } from '@/entities/chatting-room';
import ChattingListItem from '@/pages/chat/ui/chatting/list-item';

const compareDate = (a: ChattingRoom, b: ChattingRoom) => {
  if (a.lastMessage.createdDate > b.lastMessage.createdDate) {
    return -1;
  }
  if (a.lastMessage.createdDate < b.lastMessage.createdDate) {
    return 1;
  }
  return 0;
};

const ChattingList = () => {
  const chattingRoomMap = useChattingRoomStore(
    (state) => state.chattingRoomMap,
  );
  const chattingRooms = Object.values(chattingRoomMap).sort(compareDate);

  return chattingRooms.map((chatting) => (
    <ChattingListItem chatting={chatting} key={chatting.roomId} />
  ));
};

export default ChattingList;
