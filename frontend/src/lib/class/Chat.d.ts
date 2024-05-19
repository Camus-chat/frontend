import type { ChannelType } from '@/containers/(personal)/service/channel/type';

interface ChatRoomDetail {
  lastMessage: Message;
  unreadCount: number;
}

interface Chat {
  roomId: string;
  channelType: ChannelType;
  channelTitle: string;
  userList: string[];
  closed: boolean;
  filteredLevel: number;
}

interface ChatRoom extends Chat, ChatRoomDetail {}
