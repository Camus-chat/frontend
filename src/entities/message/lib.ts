export const addParsedTime = (message: Message) => {
  const time = new Date(message.createdDate).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });
  message.time = time;
  return message;
};
