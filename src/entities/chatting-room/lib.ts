import { addParsedTime } from '@/entities/message';

const getCounterpart = (
  chattingRoom: ChattingRoom.RawData,
  currentMemberId?: MemberId,
) => {
  if (chattingRoom.channelType === 'group' || !currentMemberId) {
    return undefined;
  }
  return chattingRoom.userList.find((id) => id !== currentMemberId);
};

export const getChattingRoomMap = ({
  chattingRooms,
  memberId,
}: {
  chattingRooms?: ChattingRoom.RawData[];
  memberId?: MemberId;
}) => {
  if (!chattingRooms) {
    return {};
  }

  return Object.fromEntries(
    chattingRooms.map((room) => {
      return [
        room.roomId,
        {
          ...room,
          lastMessage: addParsedTime(room.lastMessage),
          counterpart: getCounterpart(room, memberId),
        },
      ];
    }),
  );
};
