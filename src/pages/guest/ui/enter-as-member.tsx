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

  const onClick = () => {
    if (isLoggedIn) {
      requestEnterChatting(link);
    } else {
      router.push(ROUTE.login);
    }
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
