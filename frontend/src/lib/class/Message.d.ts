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
  content: string;
  messageId: number | string;
  createdDate: string;
}
