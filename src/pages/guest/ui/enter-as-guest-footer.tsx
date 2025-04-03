import { ModalFooter } from '@heroui/modal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { signIn } from '@/features/login';
import { ROUTE } from '@/shared/config';
import { useTokenStore } from '@/shared/store';
import { Button } from '@/shared/ui';
import { useChattingRoomStore } from '@/widgets/chatting';

import { guestSignUp, requestEnterChatting } from '../api';

const EnterAsGuestFooter: FC<{
  onClose: () => void;
  link: string;
}> = ({ onClose, link }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onError = () => {
    alert('채팅방에 입장에 실패했습니다.');
    setIsLoading(false);
  };

  const handleEnterRoom = async () => {
    setIsLoading(true);
    const userData = await guestSignUp();
    const token = await signIn(userData);

    if (!token) {
      onError();
      return;
    }
    useTokenStore.getState().setToken(token);

    const roomId = await requestEnterChatting(link);
    if (!roomId) {
      onError();
      return;
    }

    useChattingRoomStore.getState().setRoomId(roomId);
    router.push(`${ROUTE.guest}/${link}/${roomId}`);
  };

  return (
    <ModalFooter>
      <Button
        color='danger'
        variant='light'
        onClick={onClose}
        isDisabled={isLoading}
      >
        닫기
      </Button>
      <Button color='primary' onClick={handleEnterRoom} isLoading={isLoading}>
        참여하기
      </Button>
    </ModalFooter>
  );
};

export default EnterAsGuestFooter;
