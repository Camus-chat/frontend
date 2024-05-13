import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ChatIcon from '@mui/icons-material/Chat';

import type { Menu } from './type';

export const menu: Menu[] = [
  {
    key: 'chat',
    name: '채팅',
    path: '/service/chat',
    icon: ChatIcon,
  },
  {
    key: 'channel',
    name: '채널',
    path: '/service/channel',
    icon: AllInboxIcon,
  },
  {
    key: 'profile',
    name: '프로필',
    path: '/service/profile',
    icon: AccountCircleIcon,
  },
];
