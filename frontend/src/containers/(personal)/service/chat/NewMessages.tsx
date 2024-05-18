import ChatMessageItem from '@/lib/componenets/ChatMessageItem';
import { useEffect, useState } from 'react';

import { useChatStore } from '@/states/chat';

interface Props {
  roomId: string;
  scrollToBottom: () => void;
}

const NewMessages = ({ roomId, scrollToBottom }: Props) => {
  const { chattingClient } = useChatStore((state) => ({
    chattingClient: state.chattingClient,
  }));

  const [newMessages, setNewMessages] = useState<Message[]>([]);

  const receiveMessage = async (message: Message) => {
    setNewMessages((prev) => [...prev, message]);
  };

  const callback = (message: Message) => {
    receiveMessage(message).then(() => {
      scrollToBottom();
    });
  };

  useEffect(() => {
    scrollToBottom();
    chattingClient.subscribeRoom(roomId).then(() => {
      chattingClient.receiveMessage(roomId, callback);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return newMessages.map((message) => (
    <ChatMessageItem message={message} key={message.messageId} />
  ));
};

export default NewMessages;
