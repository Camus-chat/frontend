import type { Chat } from '@/lib/class/Chat';
import { create } from 'zustand';

interface chatState {
  isSelected: boolean;
  chat: Chat;
  messages: Message[];
}

interface chatAction {
  enterChatting: (chat: Chat, messages: Message[]) => void;
  close: () => void;
}

export const useChatStore = create<chatState & chatAction>((set) => ({
  isSelected: false,
  chat: {} as Chat,
  messages: [],

  enterChatting: (chat: Chat, messages: Message[]) =>
    set(() => ({
      isSelected: true,
      chat,
      messages,
    })),
  close: () => set(() => ({ isSelected: false, chat: {} as Chat })),
}));
