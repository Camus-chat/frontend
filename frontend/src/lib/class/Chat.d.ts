import type { ChannelType } from '@/containers/(personal)/service/channel/type';

type MessageType = 'NoticeMessage' | 'CommonMessage';

interface LastMessage {
  type: MessageType;
  userId: string;
  content: string;
}

interface ChatRoomDetail {
  lastMessage: LastMessage;
  unreadCount: number;
}

interface Chat {
  roomId: string;
  channelType: ChannelType;
  channelTitle: string;
  userList: string[];
  closed: boolean;
}

interface ChatRoom extends Chat, ChatRoomDetail {}
