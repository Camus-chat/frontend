import Member from '@/components/ProfileImage/Member';
import Random from '@/components/ProfileImage/Random';
import { Entry } from '@/containers/guest/[link]/Entry';
import styles from '@/containers/guest/[link]/index.module.scss';
import {
  requestChannelInfo,
  requestGuestProfile,
} from '@/containers/guest/[link]/query';

interface Props {
  params: Promise<{
    link: string;
  }>;
}

const Guest = async ({ params }: Props) => {
  const { link } = await params;
  const guest = await requestGuestProfile();
  const channel = await requestChannelInfo(link);

  return (
    <div className={styles.container}>
      <div className={styles.channelInfoWrapper}>
        <Member imgSrc={channel.ownerProfileImage} size='large' />
        <div className={styles.nickname}>
          {channel.ownerNickname}님과 대화를 시작합니다
        </div>
        <div className={styles.description}>{channel.channelContent}</div>
      </div>
      <div className={styles.guestInfoWrapper}>
        <div className={styles.guestInfo}>
          <div className={styles.nickname}>{guest.nickname}</div>
          <Random size='medium' color={guest.profileImageColor} />
        </div>
        <Entry link={link} token={guest.accessToken} />
      </div>
    </div>
  );
};

export default Guest;
