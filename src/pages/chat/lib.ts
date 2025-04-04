export const getCounterpart = (
  chattingRoom: ChattingRoom.RawData,
  currentMemberId?: MemberId,
) => {
  if (chattingRoom.channelType === 'group' || !currentMemberId) {
    return undefined;
  }
  return chattingRoom.userList.find((id) => id !== currentMemberId);
};
