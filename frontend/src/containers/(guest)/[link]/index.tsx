import { GetServerSideProps } from 'next';

import { Entry } from '@/containers/(guest)/[link]/Entry';
import styles from '@/containers/(guest)/[link]/index.module.scss';
import {
  requestChannelInfo,
  requestGuestProfile,
} from '@/containers/(guest)/[link]/query';

import Logo from '@/components/Header/Logo';

const Guest: GetServerSideProps = async (context) => {
  const { link } = context.params || '';
  const guest = await requestGuestProfile();
  const channel = await requestChannelInfo(link as string);

  return (
    <>
      <Logo />
      <main className={styles.main}>
        <Entry guest={guest} channel={channel} link={link as string} />
      </main>
    </>
  );
};

export default Guest;
