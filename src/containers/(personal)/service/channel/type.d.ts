import { FILTER_LIST } from '@/containers/(personal)/service/channel/constants';

type FilterLevel = number;

type FilterName = (typeof FILTER_LIST)[number][1];

type FilterClassName = (typeof FILTER_LIST)[number][2];

interface ChannelRequest {
  title: string;
  content: string;
  filterLevel: FilterLevel;
}

interface ChannelUpdate extends ChannelRequest {
  link: string;
}
