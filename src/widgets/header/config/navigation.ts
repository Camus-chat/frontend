import { BIZ_PATH } from '@/shared/config';

export const NAVIGATIONS = {
  personal: [
    { key: 'tutorial', path: '/tutorial/channel', name: '튜토리얼' },
    { key: 'chat', path: '/service/chat', name: '서비스' },
    { key: 'support', path: '/support/assist', name: '고객지원' },
  ],
  business: [
    { key: 'service', path: `${BIZ_PATH}/docs`, name: '서비스' },
    { key: 'price', path: `${BIZ_PATH}/charge`, name: '요금' },
    { key: 'support', path: `${BIZ_PATH}/support`, name: '고객지원' },
  ],
};
