import { FILTER_TYPE_MAP } from '@/containers/(personal)/service/channel/ChannelListItem/constants';

type FilterType = keyof typeof FILTER_TYPE_MAP;

interface Channel {
  name: string;
  private: boolean;
  filter: FilterType;
  description: string;
  link: string;
}
