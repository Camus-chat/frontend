'use client';

import { useRef } from 'react';

import NewMessages from '@/containers/(personal)/service/chat/NewMessages';
import ChatInputBox from '@/lib/componenets/ChatInputBox';
import ChatMessageItem from '@/lib/componenets/ChatMessageItem';
import { useChatStore } from '@/states/chat';
import ChatRoomHeader from '@/widgets/chat/ui/chat-room-header';
import ServiceContent from '@/widgets/service-content';

import styles from './index.module.scss';

interface Props {
  onClose?: () => void;
}

const ChattingRoom = ({ onClose }: Props) => {
  const { chat, chattingClient, messages, token, myId, userMap } = useChatStore(
    (state) => ({
      chat: state.chat,
      chattingClient: state.chattingClient,
      messages: state.messages,
      token: state.token,
      myId: state.myId,
      userMap: state.userMap,
    }),
  );

  const scrollRef = useRef<HTMLOListElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  };

  return (
    <ServiceContent.ContentItem>
      <div className={styles.roomWrapper}>
        <ChatRoomHeader
          title='CAMUS'
          onClose={onClose}
          channelType='private'
          userName=''
        />
        <ol ref={scrollRef} className={styles.messages}>
          {messages.map((message) => {
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
          })}
          <NewMessages roomId={chat.roomId} scrollToBottom={scrollToBottom} />
        </ol>
      </div>
      <ChatInputBox
        roomId={chat.roomId}
        chattingClient={chattingClient}
        token={token}
      />
    </ServiceContent.ContentItem>
  );
};

export default ChattingRoom;
