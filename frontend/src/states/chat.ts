import { CamusClient } from '@/lib/class/CamusClient';
import type { Chat } from '@/lib/class/Chat';
import { create } from 'zustand';

interface chatState {
  chattingClient: CamusClient;
  isSelected: boolean;
  chat: Chat;
  messages: Message[];
  unreadMessages: Message[];
  isConnected: boolean;
  token: string;
}

interface chatAction {
  enterChatting: (
    chat: Chat,
    messages: Message[],
    unreadMessages: Message[],
  ) => void;
  close: () => void;
  setConnected: () => void;
  setDisconnected: () => void;
  setToken: (token: string) => void;
}

export const useChatStore = create<chatState & chatAction>((set) => ({
  chattingClient: new CamusClient(),
  isSelected: false,
  chat: {} as Chat,
  messages: [],
  unreadMessages: [],
  isConnected: false,
  token: '',

  enterChatting: (chat: Chat, messages: Message[], unreadMessages: Message[]) =>
    set(() => ({
      isSelected: true,
      chat,
      messages,
      unreadMessages,
    })),
  close: () => set(() => ({ isSelected: false, chat: {} as Chat })),
  setConnected: () => set(() => ({ isConnected: true })),
  setDisconnected: () => set(() => ({ isConnected: false })),
  setToken: (token: string) => set(() => ({ token })),
}));
