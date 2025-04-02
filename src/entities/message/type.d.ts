type MessageType = 'NoticeMessage' | 'Common' | 'FilteredMessage';

namespace Message {
  interface Base {
    type: MessageType;
    content: string;
    messageId: number | string;
    createdDate: string;
  }

  interface Notice extends Base {
    type: 'NoticeMessage';
    targetId: string;
    noticeType: string;
  }

  interface Common extends Base {
    senderId: string;
    filteredLevel: number;
  }
}

type Message = Message.Notice | Message.Common;
