import ChatMessageBubble from '@/lib/componenets/ChatMessageBubble';
import ChatMessageFiltered from '@/lib/componenets/ChatMessageFiltered';
import ChatMessageNotice from '@/lib/componenets/ChatMessageNotice';

interface Props {
  message: Message;
  roomFilterLevel: number;
}

const ChatMessageItem = ({ message, roomFilterLevel }: Props) => {
  if (message.type === 'NoticeMessage') {
    return (
      <li>
        <ChatMessageNotice message={message} />
      </li>
    );
  }

  if (message.filteredLevel && message.filteredLevel <= roomFilterLevel) {
    return <ChatMessageFiltered message={message} />;
  }

  return (
    <li>
      <ChatMessageBubble message={message} />
    </li>
  );
};

export default ChatMessageItem;
