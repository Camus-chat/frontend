import { useMessageStore } from '@/entities/message';
import { Messages } from '@/features/messages';

const MessagesNew: FC<{ roomId: string }> = ({ roomId }) => {
  const newMessages = useMessageStore((state) => state.newMessageMap[roomId]);

  if (!roomId || !newMessages) {
    return null;
  }

  return <Messages messages={newMessages} />;
};

export default MessagesNew;
