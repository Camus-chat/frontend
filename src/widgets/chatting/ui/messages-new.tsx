import { useMessageStore } from '@/entities/message';
import { Messages } from '@/features/messages';

interface Props {
  roomInfo: ChattingRoom.Info;
}

const MessagesNew = ({ roomInfo }: Props) => {
  const { roomId, filteredLevel } = roomInfo;
  const newMessages = useMessageStore((state) => state.newMessageMap[roomId]);

  if (!roomId || !newMessages) {
    return null;
  }

  return <Messages messages={newMessages} filterLevel={filteredLevel} />;
};

export default MessagesNew;
