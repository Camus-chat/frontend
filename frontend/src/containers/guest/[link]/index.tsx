import { Entry } from '@/containers/guest/[link]/Entry';
import {
  requestChannelInfo,
  requestGuestProfile,
} from '@/containers/guest/[link]/query';

interface Props {
  params: {
    link: string;
  };
}

const Guest = async ({ params }: Props) => {
  const guest = await requestGuestProfile();
  const channel = await requestChannelInfo(params.link);

  return (
    <Entry guest={guest} channel={channel} link={params.link} />
  );
};

export default Guest;
