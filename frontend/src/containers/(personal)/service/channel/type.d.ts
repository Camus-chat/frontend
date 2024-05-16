import { FILTER_LEVEL } from '@/containers/(personal)/service/channel/constants';

type FilterLevel = (typeof FILTER_LEVEL)[number];

type ChannelType = 'private' | 'group';

interface RequestChannelCreate {
  type: ChannelType;
  title: string;
  content: string;
  filterLevel: FilterLevel;
}

interface Channel extends RequestChannelCreate {
  link: string;
}
