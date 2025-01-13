import type {
  FilterClassName,
  FilterLevel,
  FilterName,
} from '@/containers/(personal)/service/channel/type';

export const CHANNEL_CREATE = {
  title: '채널 생성',
  content: '채팅 채널 생성에 필요한 정보를 입력해주세요.',
};

export const CHANNEL_UPDATE = {
  title: '채널 수정',
  content: '채팅 채널 수정에 필요한 정보를 입력해주세요.',
};

export const FILTER_LIST = [
  [100, '약', 'weak'],
  [200, '중', 'moderate'],
  [300, '강', 'strong'],
] as const;

export const FILTER_DROP_DOWN_OPTION: DropDownItem<FilterLevel>[] =
  FILTER_LIST.map(([level, name]) => ({
    value: level,
    name,
  }));

export const FILTER_CLASS_MAP = FILTER_LIST.reduce(
  (acc, [level, , className]) => {
    acc[level] = className;
    return acc;
  },
  {} as Record<FilterLevel, FilterClassName>,
);

export const FILTER_OPTION_MAP = FILTER_LIST.reduce(
  (acc, [level, name]) => {
    acc[level] = name;
    return acc;
  },
  {} as Record<FilterLevel, FilterName>,
);
