'use client';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';
import { useRouter } from 'next/navigation';

import { signIn } from '@/features/login';
import { requestEnterChatting } from '@/pages/guest/api/enter';
import { guestSignUp } from '@/pages/guest/api/guest-signup';
import { ROUTE } from '@/shared/config';
import { useTokenStore } from '@/shared/store';
import { Button } from '@/shared/ui';
import { useChattingRoomStore } from '@/widgets/chatting';

interface Props {
  link: string;
}

const EnterAsGuest = ({ link }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const handleEnterRoom = async () => {
    const userData = await guestSignUp();
    await signIn(userData)
      .then((res) => {
        const { setToken } = useTokenStore.getState();
        setToken(res);
      })
      .catch((err) => {
        if (process.env.NODE_ENV === 'development') {
          console.log(err);
        }
        alert('게스트 로그인에 실패했습니다.');
      });

    const roomId = await requestEnterChatting(link);
    if (!roomId) {
      alert('채팅방에 입장에 실패했습니다.');
      return;
    }

    useChattingRoomStore.getState().setRoomId(roomId);
    router.push(`${ROUTE.guest}/${link}/${roomId}`);
  };

  return (
    <>
      <Button variant='light' className='w-full' onClick={onOpen}>
        게스트로 참여하기
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>주의</ModalHeader>
              <ModalBody>
                <p>
                  게스트로 참여할 경우 채팅 내역이 보관되지 않습니다. <br />
                  정말 게스트로 참여하시겠습니까?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onClick={onClose}>
                  닫기
                </Button>
                <Button color='primary' onClick={handleEnterRoom}>
                  참여하기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EnterAsGuest;
