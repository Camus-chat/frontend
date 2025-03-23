import { type ChipProps } from '@heroui/chip';

export const CHANNEL_ACTION_KEY = {
  create: 'channel-create',
  update: 'channel-update',
  delete: 'channel-delete',
};

export const CHANNEL_FILTER_LEVEL: Record<
  number,
  { name: string; color: ChipProps['color'] | null }
> = {
  0: { name: '없음', color: null },
  100: { name: '약', color: 'danger' },
  200: { name: '중', color: 'warning' },
  300: { name: '강', color: 'success' },
} as const;

export const CHANNEL_TYPE_NAME: Record<ChannelType, string> = {
  private: '개인채팅',
  group: '그룹채팅',
};
