interface ChatRoom {
  id: string;
  channelName: string;
  createTime: string;
  userList: string[]; // TODO: user class 로 받음. 타입 수정 해야함.
  isClosed: boolean;
}

interface Chat {
  content: string;
  sendingTime: string;
}
