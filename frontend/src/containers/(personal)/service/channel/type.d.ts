import { FILTER_TYPE_MAP } from '@/containers/(personal)/service/channel/ChannelListItem/constants';

type FilterType = keyof typeof FILTER_TYPE_MAP;

interface Channel {
  type: ChannelType;
  title: string;
  content: string;
  filterLevel: FilterType;
  link: string;
}

type ChannelType = 'private' | 'group';
