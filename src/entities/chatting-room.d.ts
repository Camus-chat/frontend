namespace ChattingRoom {
  interface Info {
    roomId: string;
    channelType: ChannelType;
    channelTitle: Channel['title'];
    filteredLevel: Channel['filterLevel'];
    userList: Member['uuid'][];
    isClosed: boolean;
  }

  interface Preview {
    lastMessage: Message;
    unreadCount: number;
  }
}

type ChattingRoom = ChattingRoom.Info & ChattingRoom.Preview;
