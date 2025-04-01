'use client';

import { useRouter } from 'next/navigation';

import { useMemberStore } from '@/entities/member';
import { ROUTE } from '@/shared/config';
import { Button } from '@/shared/ui';

import { requestEnterChatting } from '../api/enter';

const EnterAsMember: FC<{
  link: string;
  uuid: Channel.Info['uuid'];
}> = ({ link, uuid }) => {
  const member = useMemberStore((state) => state.member);
  const isLoggedIn = !!member;
  const isDisabled = isLoggedIn && member.uuid === uuid;
  const router = useRouter();

  const onClick = async () => {
    if (!isLoggedIn) {
      router.push(ROUTE.login);
      return;
    }

    const roomId = await requestEnterChatting(link);
    if (!roomId) {
      alert('채팅방에 입장에 실패했습니다.');
      return;
    }
    router.push(`${ROUTE.guest}/${link}/${roomId}`);
  };

  return (
    <Button
      color='primary'
      size='lg'
      className='w-full'
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {!isDisabled && '로그인 후 '}
      참여하기
    </Button>
  );
};

export default EnterAsMember;
