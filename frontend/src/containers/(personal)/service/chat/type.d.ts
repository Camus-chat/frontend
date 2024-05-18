interface MessageListRequest {
  roomId: string;
  nextMessageTimeStamp: string;
}

interface PaginationDto {
  nextMessageTimeStamp: string;
  size: number;
}

interface MessageList {
  messageList: Message[];
  paginationDto: PaginationDto;
}
