import AllInboxIcon from '@mui/icons-material/AllInbox';
import ChatIcon from '@mui/icons-material/Chat';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
    key: 'more',
    name: '더보기',
    path: '/service/settings',
    icon: MoreHorizIcon,
  },
];
