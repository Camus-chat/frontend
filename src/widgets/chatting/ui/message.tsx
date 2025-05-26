import { memo } from 'react';

import { useMemberStore } from '@/entities/member';
import {
  MessageNotice,
  MessageReceived,
  MessageSent,
} from '@/entities/message';

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

const Message = memo<{
  message: Message;
  prevMessage: Message | undefined;
  nextMessage: Message | undefined;
}>(({ message, prevMessage, nextMessage }) => {
  const currentMemberId = useMemberStore((state) => state.member?.uuid);

  if (message.type === 'NoticeMessage') {
    const text = message.content; // TODO: 테스트 필요
    return <MessageNotice message={text} />;
  }

  const isFirst = evaluateIsFirst(message, prevMessage);
  const isLast = evaluateIsLast(message, nextMessage);

  if (message.senderId === currentMemberId) {
    return (
      <MessageSent
        message={message.content}
        time={message.time}
        isFirst={isFirst}
        isLast={isLast}
      />
    );
  }

  // TODO: senderId를 통해서 유저 정보를 가져와야 함
  const sender = { nickname: '테스트', profileLink: null };

  return (
    <MessageReceived
      message={message.content}
      time={message.time}
      sender={sender}
      isFirst={isFirst}
      isLast={isLast}
    />
  );
});

export default Message;
