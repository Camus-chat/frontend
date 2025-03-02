import { CHANNEL_TYPE_LIST } from '@/components/TextIcon/constants';
import { FILTER_LIST } from '@/containers/(personal)/service/channel/constants';

type FilterLevel = (typeof FILTER_LIST)[number][0];

type FilterName = (typeof FILTER_LIST)[number][1];

type FilterClassName = (typeof FILTER_LIST)[number][2];

type FilterColor = (typeof FILTER_LIST)[number][3];

type ChannelClassName = (typeof CHANNEL_TYPE_LIST)[number][0];

type ChannelName = (typeof CHANNEL_TYPE_LIST)[number][1];

type ChannelColor = (typeof CHANNEL_TYPE_LIST)[number][2];

interface ChannelRequest {
  title: string;
  content: string;
  filterLevel: FilterLevel;
}

interface ChannelCreate extends ChannelRequest {
  type: ChannelClassName;
}

interface ChannelUpdate extends ChannelRequest {
  link: string;
}

interface Channel extends ChannelCreate, ChannelUpdate {}
