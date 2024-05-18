type MessageType = 'NoticeMessage' | 'CommonMessage';

interface Message {
  type: MessageType;
  userId: string;
  content: string;
  messageId: number;
  createdDate: string;
}
