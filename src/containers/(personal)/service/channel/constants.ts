import type {
  FilterLevel,
  FilterName,
} from '@/containers/(personal)/service/channel/type';

// export const CHANNEL_CREATE = {
//   title: '채널 생성',
//   content: '채팅 채널 생성에 필요한 정보를 입력해주세요.',
// };

export const CHANNEL_UPDATE = {
  title: '채널 수정',
  content: '채팅 채널 수정에 필요한 정보를 입력해주세요.',
};

export const FILTER_LIST = [
  [100, '약', 'weak', 'danger'],
  [200, '중', 'moderate', 'warning'],
  [300, '강', 'strong', 'success'],
] as const;

export const FILTER_DROP_DOWN_OPTION: DropDownItem<FilterLevel>[] =
  FILTER_LIST.map(([level, name]) => ({
    value: level,
    name,
  }));

export const FILTER_OPTION_MAP = FILTER_LIST.reduce(
  (acc, [level, name]) => {
    acc[level] = name;
    return acc;
  },
  {} as Record<FilterLevel, FilterName>,
);
