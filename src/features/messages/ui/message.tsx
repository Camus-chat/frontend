import { usePathname } from 'next/navigation';
import { memo } from 'react';

import { useChattingRoomStore } from '@/entities/chatting-room';
import { useMemberStore } from '@/entities/member';
import {
  MessageNotice,
  MessageReceived,
  MessageSent,
} from '@/entities/message';
import { TUTORIAL_CHAT_MEMBER_ID } from '@/shared/config';

const evaluateIsFirst = (message: Message.Common, prevMessage?: Message) => {
  if (!prevMessage || prevMessage.type === 'NoticeMessage') {
    return true;
  }
  return message.senderId !== prevMessage.senderId;
};

const evaluateIsLast = (message: Message.Common, nextMessage?: Message) => {
  if (!nextMessage || nextMessage.type === 'NoticeMessage') {
    return true;
  }
  return (
    message.senderId !== nextMessage.senderId ||
    message.time !== nextMessage.time
  );
};

const useMemberId = () => {
  const memberId = useMemberStore((state) => state.member?.uuid);

  const pathname = usePathname();
  if (pathname === '/') {
    return TUTORIAL_CHAT_MEMBER_ID.user;
  }

  return memberId;
};

const Message = memo<{
  message: Message;
  prevMessage: Message | undefined;
  nextMessage: Message | undefined;
  chattingFilterLevel: Channel['filterLevel'];
}>(({ message, prevMessage, nextMessage, chattingFilterLevel }) => {
  const currentMemberId = useMemberId();
  const chattingMemberMap = useChattingRoomStore(
    (state) => state.chattingMemberMap,
  );

  if (message.type === 'NoticeMessage') {
    const text = message.content; // TODO: 테스트 필요
    return <MessageNotice message={text} />;
  }

  const isFirst = evaluateIsFirst(message, prevMessage);
  const isLast = evaluateIsLast(message, nextMessage);
  const isFiltered =
    !!message.filteredLevel && message.filteredLevel <= chattingFilterLevel;

  if (message.senderId === currentMemberId) {
    return (
      <MessageSent
        message={message.content}
        time={message.time}
        isFirst={isFirst}
        isLast={isLast}
        isFiltered={isFiltered}
      />
    );
  }

  const sender = chattingMemberMap[message.senderId];

  return (
    <MessageReceived
      message={message.content}
      time={message.time}
      sender={sender}
      isFirst={isFirst}
      isLast={isLast}
      isFiltered={isFiltered}
    />
  );
});

export default Message;
