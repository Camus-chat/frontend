import { Entry } from '@/containers/(guest)/[link]/Entry';
import styles from '@/containers/(guest)/[link]/index.module.scss';
import {
  requestChannelInfo,
  requestGuestProfile,
} from '@/containers/(guest)/[link]/query';

import Logo from '@/components/Header/Logo';

const Guest = async () => {
  const guest = await requestGuestProfile();
  const channel = await requestChannelInfo('');

  return (
    <>
      <Logo />
      <main className={styles.main}>
        <Entry guest={guest} channel={channel} />
      </main>
    </>
  );
};

export default Guest;
