import { FILTER_LIST } from '@/containers/(personal)/service/channel/constants';

type FilterLevel = (typeof FILTER_LIST)[number][0];

type FilterName = (typeof FILTER_LIST)[number][1];

type FilterClassName = (typeof FILTER_LIST)[number][2];

type ChannelType = 'private' | 'group';

interface ChannelRequest {
  title: string;
  content: string;
  filterLevel: FilterLevel;
}

interface ChannelCreate extends ChannelRequest {
  type: ChannelType;
}

interface ChannelUpdate extends ChannelRequest {
  link: string;
}

interface Channel extends ChannelCreate, ChannelUpdate {}
