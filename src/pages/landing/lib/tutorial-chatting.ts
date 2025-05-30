'use client';

let id = 0;

export const createMessage = (
  content: string,
  senderId: string,
): Message.Common => {
  const messageId = id++;
  const date = new Date();
  const createdDate = date.toISOString();
  const time = date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return {
    type: 'Common',
    content,
    messageId,
    createdDate,
    time,
    senderId,
    filteredLevel: 0,
  };
};
