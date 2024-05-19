import ChatMessageBubble from '@/lib/componenets/ChatMessageBubble';
import ChatMessageNotice from '@/lib/componenets/ChatMessageNotice';

interface Props {
  message: Message;
}

const ChatMessageItem = ({ message }: Props) => {
  if (message.type === 'NoticeMessage') {
    return (
      <li>
        <ChatMessageNotice message={message} />
      </li>
    );
  }

  return (
    <li>
      <ChatMessageBubble message={message} />
    </li>
  );
};

export default ChatMessageItem;
