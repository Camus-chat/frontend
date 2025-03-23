interface ChattingRoom {
  roomId: string;
  channelType: ChannelType;
  channelTitle: Channel['title'];
  filteredLevel: Channel['filterLevel'];
  userList: Member['uuid'][];
  isClosed: boolean;
}
