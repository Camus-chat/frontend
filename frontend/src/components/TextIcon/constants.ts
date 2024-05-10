const CHANNEL_TYPE_NAME_MAP = {
  private: '개인채팅',
  group: '그룹채팅',
};

export const FILTER_NAME_MAP = {
  strong: '강',
  moderate: '중',
  weak: '약',
};

export const TEXT_ICON_NAME_MAP = {
  ...CHANNEL_TYPE_NAME_MAP,
  ...FILTER_NAME_MAP,
};
