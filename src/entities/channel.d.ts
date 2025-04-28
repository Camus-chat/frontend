type ChannelType = 'private' | 'group';

interface Channel {
  type: ChannelType;
  title: string;
  content: string;
  filterLevel: number;
  link: string;
}

type ChannelCreateRequest = Omit<Channel, 'link'>;

namespace Channel {
  type Info = Pick<Channel, 'title' | 'content'> &
    Pick<Member, 'nickname' | 'profileLink' | 'uuid'>;
}
