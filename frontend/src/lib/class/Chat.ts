interface ChatDetail {
  lastMessage: string;
  unreadCount: number;
}

interface Chat extends ChatDetail {
  uuid: string;
  tag: string;
  userList: string[];
}
