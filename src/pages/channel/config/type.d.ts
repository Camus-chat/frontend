import { CHANNEL_TYPE_LIST, FILTER_LIST } from './chips';

export type FilterKey = (typeof FILTER_LIST)[number]['key'];
export type ChannelTypeKey = (typeof CHANNEL_TYPE_LIST)[number]['key'];
