type MessageType = 'NoticeMessage' | 'CommonMessage' | 'FilteredMessage';

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
  messageId: number | string;
  createdDate: string;
}
