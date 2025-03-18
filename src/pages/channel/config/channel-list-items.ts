import { FILTER_LIST } from '@/pages/channel/config/chips';

export const FILTER_CLASS_MAP = Object.fromEntries(
  FILTER_LIST.map(({ level, key }) => [level, key]),
);
