import type { ChannelType } from '@/containers/(personal)/service/channel/type';

type MessageType = 'NoticeMessage' | 'CommonMessage';

interface LastMessage {
  _class: MessageType; // TODO: 삭제
  get_class: MessageType;
  userId: string;
  content: string;
}

interface ChatDetail {
  lastMessage: LastMessage;
  unreadCount: number;
}

interface Chat extends ChatDetail {
  _id: string; // TODO: 삭제
  get_id: string;
  channelType: ChannelType;
  channelTitle: string;
  userList: string[];
  closed: boolean;
}
