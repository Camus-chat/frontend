type ChannelType = 'private' | 'group';
type FilterType = 100 | 200 | 300;

interface Channel {
  type: ChannelType;
  title: string;
  content: string;
  filterLevel: FilterType;
  link: string;
}

type ChannelCreateRequest = Omit<Channel, 'link'>;
