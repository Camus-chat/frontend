import ChatMessageItem from '@/lib/componenets/ChatMessageItem';
import { useEffect, useState } from 'react';

import { useChatStore } from '@/states/chat';

interface Props {
  roomId: string;
  scrollToBottom: () => void;
}

const NewMessages = ({ roomId, scrollToBottom }: Props) => {
  const { chattingClient, isConnected, token, chat, myId, userMap } =
    useChatStore((state) => ({
      chattingClient: state.chattingClient,
      isConnected: state.isConnected,
      token: state.token,
      chat: state.chat,
      myId: state.myId,
      userMap: state.userMap,
    }));

  const [newMessages, setNewMessages] = useState<Message[]>([]);

  const receiveMessage = async (newMessage: Message) => {
    if (newMessage.type !== 'FilteredMessage') {
      setNewMessages((prev) => [...prev, newMessage]);
      return;
    }

    setNewMessages((prev) =>
      prev.map((item) => {
        if (`filtered:${item.messageId}` === newMessage.messageId) {
          item.filteredLevel = newMessage.filteredLevel;
        }
        return item;
      }),
    );
  };

  const callback = (message: Message) => {
    receiveMessage(message).then(() => {
      scrollToBottom();
    });
  };

  useEffect(() => {
    scrollToBottom();
    if (isConnected) {
      chattingClient.subscribeRoom(roomId, token).then(() => {
        chattingClient.receiveMessage(roomId, callback);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, chat]);

  return newMessages.map((message) => {
    const userId = message.senderId || message.targetId;

    return (
      <ChatMessageItem
        message={message}
        key={message.messageId}
        roomFilterLevel={chat.filteredLevel}
        receiverId={myId}
        senderInfo={userMap.get(userId)!}
      />
    );
  });
};

export default NewMessages;
