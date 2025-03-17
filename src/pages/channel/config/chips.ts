export const FILTER_LIST = [
  { level: 100, name: '약', key: 'weak', color: 'danger' },
  { level: 200, name: '중', key: 'moderate', color: 'warning' },
  { level: 300, name: '강', key: 'strong', color: 'success' },
] as const;

export const CHANNEL_TYPE_LIST = [
  { key: 'private', name: '개인채팅' },
  { key: 'group', name: '그룹채팅' },
] as const;

export const FILTER_NAME_MAP = Object.fromEntries(
  FILTER_LIST.map(({ key, name }) => [key, name]),
);

export const FILTER_COLOR_MAP = Object.fromEntries(
  FILTER_LIST.map(({ key, color }) => [key, color]),
);

export const CHANNEL_TYPE_NAME_MAP = Object.fromEntries(
  CHANNEL_TYPE_LIST.map(({ key, name }) => [key, name]),
);
