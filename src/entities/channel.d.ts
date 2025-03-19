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
  interface Info extends Pick<Channel, 'title' | 'content'> {
    owner: Pick<Member, 'nickname' | 'profileImage'>;
  }
}
