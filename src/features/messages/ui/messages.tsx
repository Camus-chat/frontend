import Message from './message';

interface Props {
  messages: Message[];
}

const Messages = ({ messages }: Props) => {
  return messages.map((message, index) => (
    <Message
      key={message.messageId}
      message={message}
      prevMessage={messages[index - 1]}
      nextMessage={messages[index + 1]}
    />
  ));
};

export default Messages;
