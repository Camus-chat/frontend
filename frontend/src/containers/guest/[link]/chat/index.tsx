'use client';

import ChattingRoom from '@/containers/(personal)/service/chat/ChattingRoom';
import { useChatStore } from '@/states/chat';

const Index = () => {
  const { chat, close } = useChatStore((state) => ({
    chat: state.chat,
    close: state.close,
  }));
  return (
    <div>
      <ChattingRoom chat={chat} onClose={close} />
    </div>
  );
};

export default Index;
