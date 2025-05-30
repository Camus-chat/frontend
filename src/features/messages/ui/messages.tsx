import Message from './message';

interface Props {
  messages: Message[];
  filterLevel: number;
}

const Messages = ({ messages, filterLevel }: Props) => {
  return messages.map((message, index) => (
    <Message
      key={message.messageId}
      message={message}
      prevMessage={messages[index - 1]}
      nextMessage={messages[index + 1]}
      chattingFilterLevel={filterLevel}
    />
  ));
};

export default Messages;
