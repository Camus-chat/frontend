type MessageType = 'NoticeMessage' | 'CommonMessage';

interface Notice {
  targetId: string;
  noticeType: string;
}

interface Common {
  senderId: string;
  filteredLevel: number;
}

interface Message extends Notice, Common {
  type: MessageType;
  userId: string;
  content: string;
  messageId: number;
  createdDate: string;
}
