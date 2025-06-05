import { useEffect, useRef } from 'react';

import MessageBubble from './message';

interface Props {
  messages: Message[];
  filterLevel: number;
}

const Messages = ({ messages, filterLevel }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });

  return (
    <div ref={ref} className='overflow-y-auto pb-2 scrollbar-hide'>
      {messages.map((message, index) => {
        const key =
          message.type === 'NoticeMessage'
            ? message.messageId
            : `${message.messageId}-${message.filteredLevel}`;

        return (
          <MessageBubble
            key={key}
            message={message}
            prevMessage={messages[index - 1]}
            nextMessage={messages[index + 1]}
            chattingFilterLevel={filterLevel}
          />
        );
      })}
    </div>
  );
};

export default Messages;
