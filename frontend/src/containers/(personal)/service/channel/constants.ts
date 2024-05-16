import type { FilterLevel } from '@/containers/(personal)/service/channel/type';

import type { FilterClassName } from '@/components/TextIcon/type';

export const CHANNEL_CREATE = {
  title: '채널 생성',
  content: '채팅 채널 생성에 필요한 정보를 입력해주세요.',
};

export const CHANNEL_UPDATE = {
  title: '채널 수정',
  content: '채팅 채널 수정에 필요한 정보를 입력해주세요.',
};

export const FILTER_LEVEL = ['100', '200', '300'] as const;

export const FILTER_DROP_DOWN_OPTION: DropDownItem<FilterLevel>[] = [
  { value: '300', name: '강' },
  { value: '200', name: '중' },
  { value: '100', name: '약' },
];

export const FILTER_CLASS_MAP: Record<FilterLevel, FilterClassName> = {
  '100': 'weak',
  '200': 'moderate',
  '300': 'strong',
};
