import { IconTypeInfo } from '@/components/TextIcon/type';
import { FILTER_LIST } from '@/containers/(personal)/service/channel/constants';
import type {
  ChannelClassName,
  FilterClassName,
} from '@/containers/(personal)/service/channel/type';

export const ICON_TYPE = {
  channel: {
    color: 'default',
    variant: 'solid',
    style: 'text-white',
  },
  filter: {
    variant: 'dot',
    style: 'text-black',
  },
} as const;

export const CHANNEL_TYPE_LIST = [
  ['private', '개인채팅'],
  ['group', '그룹채팅'],
] as const;

const CHANNEL_TYPE_NAME_MAP = CHANNEL_TYPE_LIST.reduce<
  Record<ChannelClassName, IconTypeInfo>
>(
  (acc, [className, name]) => {
    acc[className] = {
      type: 'channel',
      name,
      color: ICON_TYPE.channel.color,
      variant: ICON_TYPE.channel.variant,
    };
    return acc;
  },
  {} as Record<ChannelClassName, IconTypeInfo>,
);

export const FILTER_NAME_MAP = FILTER_LIST.reduce<
  Record<FilterClassName, IconTypeInfo>
>(
  (acc, [, name, className, color]) => {
    acc[className] = {
      type: 'filter',
      name,
      color,
      variant: ICON_TYPE.filter.variant,
    };
    return acc;
  },
  {} as Record<FilterClassName, IconTypeInfo>,
);

export const TEXT_ICON_NAME_MAP = {
  ...CHANNEL_TYPE_NAME_MAP,
  ...FILTER_NAME_MAP,
};
