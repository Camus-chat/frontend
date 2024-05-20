import { CamusClient } from '@/lib/class/CamusClient';
import type { Chat } from '@/lib/class/Chat';
import { create } from 'zustand';

interface chatState {
  chattingClient: CamusClient;
  isSelected: boolean;
  chat: Chat;
  messages: Message[];
  isConnected: boolean;
  token: string;
  myId: string;
  userMap: Map<string, UserProfile>;
}

interface chatAction {
  enterChatting: (chat: Chat, messages: Message[]) => void;
  close: () => void;
  setConnected: () => void;
  setDisconnected: () => void;
  setToken: (token: string) => void;
  setMyId: (myId: string) => void;
}

export const useChatStore = create<chatState & chatAction>((set) => ({
  chattingClient: new CamusClient(),
  isSelected: false,
  chat: {} as Chat,
  messages: [],
  isConnected: false,
  token: '',
  myId: '',
  userMap: new Map<string, UserProfile>(),

  enterChatting: (chat: Chat, messages: Message[]) =>
    set(() => ({
      isSelected: true,
      chat,
      messages,
    })),
  close: () => set(() => ({ isSelected: false, chat: {} as Chat })),
  setConnected: () => set(() => ({ isConnected: true })),
  setDisconnected: () => set(() => ({ isConnected: false })),
  setToken: (token: string) => set(() => ({ token })),
  setMyId: (myId: string) => set(() => ({ myId })),
}));
