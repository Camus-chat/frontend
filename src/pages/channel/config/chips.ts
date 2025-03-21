type FilterColor = 'danger' | 'warning' | 'success';

export const FILTERS: Record<FilterType, { name: string; color: FilterColor }> =
  {
    100: { name: '약', color: 'danger' },
    200: { name: '중', color: 'warning' },
    300: { name: '강', color: 'success' },
  } as const;

export const CHANNEL_TYPE_NAME: Record<ChannelType, string> = {
  private: '개인채팅',
  group: '그룹채팅',
};
