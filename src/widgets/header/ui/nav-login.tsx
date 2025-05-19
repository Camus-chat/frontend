'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { tv } from 'tailwind-variants';

import { useMemberStore } from '@/entities/member';
import { ROUTE } from '@/shared/config';
import { Button } from '@/shared/ui';

import { logout } from '../api/logout';

interface Props {
  className?: string;
}

const style = tv({
  slots: {
    wrapper: 'grid grid-cols-2 gap-1',
    trigger: 'cursor-pointer',
  },
});

const Login = ({ className }: Props) => {
  const member = useMemberStore((state) => state.member);
  const router = useRouter();
  const { wrapper, trigger } = style();

  if (member === null) {
    return (
      <div className={wrapper({ className })}>
        <Button
          size='md'
          variant='light'
          onClick={() => router.push(ROUTE.signup)}
        >
          회원가입
        </Button>
        <Button
          size='md'
          color='secondary'
          onClick={() => router.push(ROUTE.login)}
        >
          로그인
        </Button>
      </div>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger className={trigger({ className })}>
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
