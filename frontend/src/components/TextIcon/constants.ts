import { FILTER_LIST } from '@/containers/(personal)/service/channel/constants';
import {
  FilterClassName,
  FilterName,
} from '@/containers/(personal)/service/channel/type';

const CHANNEL_TYPE_NAME_MAP = {
  private: '개인채팅',
  group: '그룹채팅',
};

export const FILTER_NAME_MAP = FILTER_LIST.reduce(
  (acc, [, name, className]) => {
    acc[className] = name;
    return acc;
  },
  {} as Record<FilterClassName, FilterName>,
);

export const TEXT_ICON_NAME_MAP = {
  ...CHANNEL_TYPE_NAME_MAP,
  ...FILTER_NAME_MAP,
};
