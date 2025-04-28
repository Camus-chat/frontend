namespace ChattingRoom {
  interface Info {
    roomId: string;
    channelType: ChannelType;
    channelTitle: Channel['title'];
    filteredLevel: Channel['filterLevel'];
    userList: MemberId[];
    isClosed: boolean;
  }

  interface Preview {
    lastMessage: Message;
    unreadCount: number;
  }

  type RawData = Info & Preview;
}

interface GroupChattingRoom extends ChattingRoom.RawData {
  channelType: 'group';
}

interface PrivateChattingRoom extends ChattingRoom.RawData {
  channelType: 'private';
  counterpart: MemberId | undefined;
}

type ChattingRoom = GroupChattingRoom | PrivateChattingRoom;
