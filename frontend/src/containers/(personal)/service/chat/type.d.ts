import type { LastMessage } from '@/lib/class/Chat';

interface MessageListRequest {
  roomId: string;
  nextMessageTimeStamp: string;
}

interface Message extends LastMessage {
  messageId: number;
  createdDate: string;
}

interface PaginationDto {
  nextMessageTimeStamp: string;
  size: number;
}

interface MessageList {
  messageList: Message[];
  paginationDto: PaginationDto;
}
