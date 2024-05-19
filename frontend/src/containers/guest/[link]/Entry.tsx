'use client';

import { useRouter } from 'next/navigation';

import styles from '@/containers/guest/[link]/index.module.scss';
import { requestEnterRoom } from '@/containers/guest/[link]/query';

import Button from '@/components/Button';
import Member from '@/components/ProfileImage/Member';
import Random from '@/components/ProfileImage/Random';

interface Props {
  guest: GuestInfo;
  channel: ChannelInfo;
  link: string;
}

export const Entry = ({ guest, channel, link }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    const roomId = await requestEnterRoom(link);
    router.push(`/${link}/chat/${roomId}`);
  };

  return (
    <>
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
        <Button size='large' color='blue' onClick={handleClick}>
          참여하기
        </Button>
      </div>
    </>
  );
};
