'use client';

import { useRouter } from 'next/navigation';

import { requestEnterRoom } from '@/containers/guest/[link]/query';
import { useChatStore } from '@/states/chat';

import Button from '@/components/Button';

interface Props {
  link: string;
  token: string;
}

export const Entry = ({ link, token }: Props) => {
  const router = useRouter();
  const { enterChatting, setToken } = useChatStore((state) => ({
    chattingClient: state.chattingClient,
    enterChatting: state.enterChatting,
    setToken: state.setToken,
  }));

  const handleClick = async () => {
    await requestEnterRoom(link, token).then((chat) => {
      setToken(token);
      enterChatting(chat, []);
      router.push(`${link}/chat`);
    });
  };

  return (
    <Button size='large' color='blue' onClick={handleClick}>
      참여하기
    </Button>
  );
};
