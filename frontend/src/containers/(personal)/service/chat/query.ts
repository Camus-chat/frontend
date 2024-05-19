import type { ChatRoom } from '@/lib/class/Chat';
import { revalidateTag } from 'next/cache';

import { query } from '@/containers/query';

const CHAT_LIST_TAG = 'chat-list';

export const getChatList = async () => {
  revalidateTag(CHAT_LIST_TAG);
  return query.serverSide.get<ChatRoom[]>('/room/list', CHAT_LIST_TAG);
};

export const getUnreadMessages = async (roomId: string) => {
  return query.clientSide.post<Message[], { roomId: string }>(
    `/chat/data/unread`,
    { roomId },
  );
};

export const getMessages = async (
  roomId: string,
  nextMessageTimeStamp: string,
) => {
  return query.clientSide.post<MessageList, MessageListRequest>(`/chat/data`, {
    roomId,
    nextMessageTimeStamp,
  });
};

export const exitChatRoom = async (roomId: string) => {
  return query.clientSide.post<string, { roomId: string }>('/chat/room/exit', {
    roomId,
  });
};
