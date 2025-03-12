type ChannelType = 'private' | 'group';

interface Channel {
  type: ChannelType;
  title: string;
  content: string;
  filterLevel: number;
  link: string;
}

type ChannelCreateRequest = Omit<Channel, 'link'>;
