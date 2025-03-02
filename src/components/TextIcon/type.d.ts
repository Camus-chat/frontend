import { TEXT_ICON_NAME_MAP } from '@/components/TextIcon/constants';

export type TextIconName = keyof typeof TEXT_ICON_NAME_MAP;

export interface IconTypeInfo {
  type: 'channel' | 'filter';
  name: string;
  color: typeof ICON_TYPE.channel.color | FilterColor;
  variant: typeof ICON_TYPE.channel.variant | typeof ICON_TYPE.filter.variant;
}
