import type { Chat } from '@/lib/class/Chat';
import { revalidateTag } from 'next/cache';

import { query } from '@/containers/query';

const CHAT_LIST_TAG = 'chat-list';

export const getChatList = async () => {
  revalidateTag(CHAT_LIST_TAG);
  return query.serverSide.get<Chat[]>('/room/list', CHAT_LIST_TAG);
};

export const tmpChatList = async () => {
  return query.serverSide
    .post<Chat[], undefined>('/room/list', undefined)
    .then((res) => {
      return res.map((chat) => ({
        ...chat,
        get_id: chat._id,
      }));
    });
};
