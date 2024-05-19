// import { Entry } from '@/containers/guest/[link]/Entry';
import styles from '@/containers/guest/[link]/index.module.scss';

// import {
//   requestChannelInfo,
//   requestGuestProfile,
// } from '@/containers/guest/[link]/query';
import defaultImage from '../../../../public/images/defaultProfileImg.svg';
import Logo from '@/components/Header/Logo';

interface Props {
  params: {
    link: string;
  };
}

const Guest = async ({ params }: Props) => {
  // const guest = await requestGuestProfile();
  // const channel = await requestChannelInfo(params.link);
  const channel = {
    userProfileImg: defaultImage,
    userNickname: '사장',
    channelInfo: '어쩙치일',
  };

  return (
    <>
      <Logo />
      <main className={styles.main}>
        {/* <Entry guest={guest} channel={channel} link={params.link} /> */}
      </main>
    </>
  );
};

export default Guest;
