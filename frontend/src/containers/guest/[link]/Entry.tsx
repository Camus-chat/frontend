'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import styles from '@/containers/guest/[link]/index.module.scss';
import { requestEnterRoom } from '@/containers/guest/[link]/query';

import Button from '@/components/Button';
import Member from '@/components/ProfileImage/Member';
import Random from '@/components/ProfileImage/Random';
import type { ProfileColor } from '@/components/ProfileImage/type';

interface Props {
  guest: GuestProfile;
  channel: ChatRoomInfo;
  link: string;
}

export const Entry = ({ guest, channel, link }: Props) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const router = useRouter();

  const handleClick = async () => {
    const roomId = await requestEnterRoom(link);
    router.push(`/${link}/chat/${roomId}`);
  };

  const reader = new FileReader();
  reader.onload = () => {
    setImgSrc(reader.result as string);
  };

  return (
    <div className={styles.container}>
      <div className={styles.channelInfoWrapper}>
        <Member imgSrc={imgSrc} size='medium' />
        <div className={styles.nickname}>
          {channel.userNickname}님과 대화를 시작합니다
        </div>
        <div className={styles.description}>{channel.channelInfo}</div>
      </div>
      <div className={styles.guestInfoWrapper}>
        <Random size='medium' color={guest.profileImgColor as ProfileColor} />
        <div className={styles.nickname}>{guest.nickname}</div>
        <Button size='large' color='blue' onClick={handleClick}>
          참여하기
        </Button>
      </div>
    </div>
  );
};
