import { FILTER_LIST } from '@/containers/(personal)/service/channel/constants';
import type {
  ChannelClassName,
  ChannelColor,
  ChannelName,
  FilterClassName,
  FilterColor,
  FilterName,
} from '@/containers/(personal)/service/channel/type';

export const CHANNEL_TYPE_LIST = [
  ['private', '개인채팅', 'secondary'],
  ['group', '그룹채팅', 'secondary'],
] as const;

const CHANNEL_TYPE_NAME_MAP = CHANNEL_TYPE_LIST.reduce(
  (acc, [className, name, color]) => {
    acc[className] = {
      name,
      color,
    };
    return acc;
  },
  {} as Record<ChannelClassName, { name: ChannelName; color: ChannelColor }>,
);

export const FILTER_NAME_MAP = FILTER_LIST.reduce(
  (acc, [, name, className, color]) => {
    acc[className] = {
      name,
      color,
    };
    return acc;
  },
  {} as Record<FilterClassName, { name: FilterName; color: FilterColor }>,
);

export const TEXT_ICON_NAME_MAP = {
  ...CHANNEL_TYPE_NAME_MAP,
  ...FILTER_NAME_MAP,
};
