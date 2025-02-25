'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';
import { User } from '@heroui/user';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui';

import { logout } from '../api/logout';

interface Props {
  member: Member | null;
}

const Login = ({ member }: Props) => {
  const router = useRouter();

  if (member === null) {
    return (
      <div className='grid grid-cols-2 gap-1'>
        <Button
          size='md'
          variant='light'
          onClick={() => router.push('/signup')}
        >
          회원가입
        </Button>
        <Button
          size='md'
          color='secondary'
          onClick={() => router.push('/signin')}
        >
          로그인
        </Button>
      </div>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger className='cursor-pointer'>
        <User name={member.nickname} description={member.username} />
      </DropdownTrigger>
      <DropdownMenu variant='flat' disabledKeys={['chat', 'channel']}>
        <DropdownItem key='chat'>내 채팅</DropdownItem>
        <DropdownItem key='channel'>내 채널</DropdownItem>
        <DropdownItem
          key='logout'
          className='text-red-500'
          color='danger'
          onPress={() => logout()}
        >
          로그아웃
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Login;
