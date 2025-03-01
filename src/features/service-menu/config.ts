import { MailBoxIcon, MessagesIcon, ProfileCardIcon } from '@/shared/ui';

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
    path: '/service/chat',
    icon: MessagesIcon,
  },
  {
    key: 'channel',
    name: '채널',
    path: '/service/channel',
    icon: MailBoxIcon,
  },
  {
    key: 'profile',
    name: '프로필',
    path: '/service/profile',
    icon: ProfileCardIcon,
  },
];
