import { IdCard, Mailbox, MessageSquareText } from 'lucide-react';

import { ROUTE } from '@/shared/config';

interface Menu {
  key: string;
  name: string;
  path: string;
  icon: React.FC;
}

export const SERVICE_MENU: Menu[] = [
  {
    key: 'chat',
    name: '채팅',
    path: ROUTE.chat,
    icon: MessageSquareText,
  },
  {
    key: 'channel',
    name: '채널',
    path: ROUTE.channel,
    icon: Mailbox,
  },
  {
    key: 'profile',
    name: '프로필',
    path: ROUTE.profile,
    icon: IdCard,
  },
];
