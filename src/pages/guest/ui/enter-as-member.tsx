'use client';

import { Button } from '@/shared/ui';

import { requestEnterChatting } from '../api/enter';

const EnterAsMember: FC<{
  link: string;
}> = ({ link }) => {
  return (
    <Button
      color='primary'
      size='lg'
      className='w-full'
      onClick={() => requestEnterChatting(link)}
    >
      참여하기
    </Button>
  );
};

export default EnterAsMember;
