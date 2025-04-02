import { useMessageStore } from '@/entities/message';

import Message from './message';

const MessagesNew: FC<{ roomId: string }> = ({ roomId }) => {
  const newMessages = useMessageStore((state) => state.newMessageMap[roomId]);

  if (!roomId || !newMessages) {
    return null;
  }

  return newMessages.map((message, index) => (
    <Message
      key={message.messageId}
      message={message}
      prevMessage={newMessages[index - 1]}
      nextMessage={newMessages[index + 1]}
    />
  ));
};

export default MessagesNew;
