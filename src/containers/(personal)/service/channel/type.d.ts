import { FILTER_LIST } from '@/containers/(personal)/service/channel/constants';
import { CHANNEL_TYPE_LIST } from '@/pages/channel/config/chips';

type FilterLevel = number;

type FilterName = (typeof FILTER_LIST)[number][1];

type FilterClassName = (typeof FILTER_LIST)[number][2];

type FilterColor = (typeof FILTER_LIST)[number][3];

type ChannelTypeName = (typeof CHANNEL_TYPE_LIST)[number][0];

type ChannelName = (typeof CHANNEL_TYPE_LIST)[number][1];

interface ChannelRequest {
  title: string;
  content: string;
  filterLevel: FilterLevel;
}

interface ChannelUpdate extends ChannelRequest {
  link: string;
}
