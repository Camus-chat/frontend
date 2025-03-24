import { requestChannelInfo } from '@/pages/guest';
import { MEATADATA } from '@/shared/config';

export { default } from '@/pages/guest';

type Params = Promise<{
  link: string;
}>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { link } = await params;
  const channelInfo = await requestChannelInfo(link);

  if (!channelInfo) {
    return {
      title: MEATADATA.title,
    };
  }

  return {
    title: `${channelInfo.title} - ${channelInfo.nickname}님의 채널 | ${MEATADATA.title}`,
    description: channelInfo.content,
  };
};
