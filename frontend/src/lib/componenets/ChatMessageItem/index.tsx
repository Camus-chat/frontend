import ChatMessageBubble from '@/lib/componenets/ChatMessageBubble';
import ChatMessageFiltered from '@/lib/componenets/ChatMessageFiltered';
import ChatMessageNotice from '@/lib/componenets/ChatMessageNotice';

interface Props {
  message: Message;
  roomFilterLevel: number;
  receiverId: string;
  senderInfo: UserProfile;
}

const ChatMessageItem = ({
  message,
  roomFilterLevel,
  receiverId,
  senderInfo,
}: Props) => {
  if (message.type === 'NoticeMessage') {
    return (
      <li>
        <ChatMessageNotice
          message={message}
          targetNickname={senderInfo.nickname}
        />
      </li>
    );
  }

  if (message.filteredLevel && message.filteredLevel <= roomFilterLevel) {
    return (
      <ChatMessageFiltered
        message={message}
        receiverId={receiverId}
        senderNickname={senderInfo.nickname}
      />
    );
  }

  return (
    <li>
      <ChatMessageBubble
        message={message}
        receiverId={receiverId}
        senderNickname={senderInfo.nickname}
      />
    </li>
  );
};

export default ChatMessageItem;
