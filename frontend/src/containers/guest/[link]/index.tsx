import { Entry } from '@/containers/guest/[link]/Entry';
import styles from '@/containers/guest/[link]/index.module.scss';
import {
  requestChannelInfo,
  requestGuestProfile,
} from '@/containers/guest/[link]/query';

import Logo from '@/components/Header/Logo';

interface Props {
  params: {
    link: string;
  };
}

const Guest = async ({ params }: Props) => {
  const guest = await requestGuestProfile();
  const channel = await requestChannelInfo(params.link);

  return (
    <>
      <Logo />
      <main className={styles.main}>
        <Entry guest={guest} channel={channel} link={params.link} />
      </main>
    </>
  );
};

export default Guest;
