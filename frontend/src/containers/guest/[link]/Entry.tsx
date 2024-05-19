'use client';

import { useRouter } from 'next/navigation';

import { requestEnterRoom } from '@/containers/guest/[link]/query';

import Button from '@/components/Button';

interface Props {
  link: string;
}

export const Entry = ({ link }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    const roomId = await requestEnterRoom(link);
    router.push(`/${link}/chat/${roomId}`);
  };

  return (
    <Button size='large' color='blue' onClick={handleClick}>
      참여하기
    </Button>
  );
};
