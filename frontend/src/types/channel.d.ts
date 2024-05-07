interface ChannelInfo {
  channelLink: string;
  isPrivate: boolean;
  channelName: string;
  description: string;
  filter: string;
  isAvailable: boolean;
}

interface ChatRoom {
  id: string;
  channelName: string;
  createTime: string;
  userList: string[]; // TODO: user class 로 받음. 타입 수정 해야함.
  isClosed: boolean;
}
