import MessageBubble from './message';

interface Props {
  messages: Message[];
  filterLevel: number;
}

const Messages = ({ messages, filterLevel }: Props) => {
  return messages.map((message, index) => {
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
  });
};

export default Messages;
